'use client';

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';

interface IUserData {
  first_name: string;
  last_name: string;
}

type AuthContextData = {
  login: (username: string, password: string) => Promise<void>;
  fetchUserData: () => Promise<IUserData>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [contextUrl, setContextUrl] = useState<string>('');

  const router = useRouter();

  const login = async (username: string, password: string) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;
    const contextUrl = `${baseUrl}/users`;

    try {
      const response = await axios.post(`${contextUrl}/login`, {
        username,
        password,
      });
      const userData = response.data;

      const token = userData.access;
      localStorage.setItem('token', token);

      router.push('/dashboard');
    } catch (error) {
      console.error(error);
      throw new Error('Falha ao fazer login');
    }
  };

  const fetchUserData = async (): Promise<IUserData> => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;
    const contextUrl = `${baseUrl}/users`;

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Token not found');
      }

      localStorage.setItem('token', token);
      const decoded: any = jwtDecode(token);
      const userId = decoded.user_id;

      const response = await axios.get(`${contextUrl}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Falha ao buscar os dados do usuário');
    }
  };

  return (
    <AuthContext.Provider value={{ login, fetchUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
