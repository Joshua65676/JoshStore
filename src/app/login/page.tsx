"use client";
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push(redirect);
    } catch (error) {
      setError('Error signing in: ' + (error as Error).message);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
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
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-2"
      >
        Login
      </button>
      <p>
        Don&apos;t have an account? <Link href="/signup" className="text-blue-500">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
