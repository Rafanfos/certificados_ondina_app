'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const token = await login(username, password);
      
      localStorage.setItem('token', token);

      toast.success('Login realizado com sucesso!');
      router.push('/dashboard'); 
    } catch (err) {
      toast.error('Erro ao realizar login.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 shadow-md rounded-lg w-96'>
        <figure className='flex justify-center mb-6'>
          <Image
            src='/assets/images/empon-logo.png'
            alt='Logo'
            width={200}
            height={100}
          />
        </figure>

        <h1 className='text-2xl font-bold mb-6 text-center'>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block mb-1'>Username:</label>
            <input
              type='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className='w-full px-3 py-2 border rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-1'>Senha:</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full px-3 py-2 border rounded-md'
            />
          </div>
                  <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded-md mt-4'
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
