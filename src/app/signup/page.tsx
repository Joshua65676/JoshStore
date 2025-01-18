"use client";
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { doc, setDoc } from "firebase/firestore";
import { db } from '@/firebase';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';
  // const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    try {
      // setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: username
      });

      await sendEmailVerification(user);

      await setDoc(doc(db, "users", user.uid), {
        username,
        email
      });

      alert('Verification email sent! Please check your inbox.');

      console.log('Navigating to home page');
      // setLoading(false);
      router.push(redirect);
    } catch (error) {
      setError('Error signing up: ' + (error as Error).message);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="px-4 py-2 border rounded-lg mb-2 w-80"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 border rounded-lg mb-2 w-80"
      />
      <div className="relative mb-2 w-80">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full"
        />
        <span
          onClick={toggleShowPassword}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <button
        onClick={handleSignUp}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-2"
      >
        Sign Up
      </button>
      <p>
        Already have an account? <Link href="/login" className="text-blue-500">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
