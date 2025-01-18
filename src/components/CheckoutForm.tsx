import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';

// Define CartItem type within this file
interface CartItem {
  id: number;
  price: number;
  quantity: number;
}

interface CheckoutFormProps {
  cartItems: CartItem[];
  handlePayment: (event: React.FormEvent) => void;
  loading: boolean;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ cartItems, handlePayment, loading }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0) * 100; // Convert to cents

  return (
    <form onSubmit={handlePayment}>
      <CardElement />
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : `Pay $${(totalPrice / 100).toFixed(2)}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
