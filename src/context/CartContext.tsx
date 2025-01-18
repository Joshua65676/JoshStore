"use client"
import { createContext, useState, useEffect, ReactNode } from 'react';
import { auth, db } from '@/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

type CartItem = {
  _id: number;
  title: string;
  category: string;
  price: number;
  oldPrice: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        try {
          // Retrieve cart from Firestore
          const cartDoc = await getDoc(doc(db, 'carts', user.uid));
          if (cartDoc.exists()) {
            setCart(cartDoc.data().items);
          }
        } catch (error) {
          if (error instanceof Error && 'code' in error) {
            if (error.code === 'unavailable') {
              console.error('Firestore is offline:', (error).message);
            } else {
              console.error('Error fetching cart:', (error).message);
            }
          } else {
            console.error('Unknown error:', error);
          }
        }
      } else {
        setUser(null);
        setCart([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const saveCartToFirestore = async (cartItems: CartItem[]) => {
    if (user) {
      await setDoc(doc(db, 'carts', user.uid), { items: cartItems });
    }
  };

  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem._id === item._id);
      const updatedCart = existingItem
        ? prevCart.map(cartItem =>
            cartItem._id === item._id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...prevCart, { ...item, quantity: 1 }];
      saveCartToFirestore(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter(cartItem => cartItem._id !== id);
      saveCartToFirestore(updatedCart);
      return updatedCart;
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(cartItem =>
        cartItem._id === id ? { ...cartItem, quantity } : cartItem
      );
      saveCartToFirestore(updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    saveCartToFirestore([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
