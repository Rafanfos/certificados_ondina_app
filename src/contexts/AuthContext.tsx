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

type AuthContextData = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  fetchUserData: () => Promise<void>;
};

type User = {
  name: string;
  username: string;
  role: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<string>('');
  const [contextUrl, setContextUrl] = useState<string>('');

  const router = useRouter();

  useEffect(() => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;
    setContextUrl(`${baseUrl}/users`);
  });

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(`${contextUrl}/login`, {
        username,
        password,
      });
      const userData = response.data;

      const token = userData.access;
      router.push('/dashboard');
      if (token) {
        localStorage.setItem('token', userData.access);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const decoded: any = jwtDecode(token);
        setUserId(decoded.id);
      }

      const response = await axios.get(`${contextUrl}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      console.error('Failed to fetch user data', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, fetchUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
