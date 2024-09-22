"use client"

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

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
  const [contextUrl, setContextUrl] = useState<string>("");

  useEffect(() => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;
    setContextUrl(`${baseUrl}/users`);
  });

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(`${contextUrl}login`, {
        username,
        password,
      });
      const userData = response.data;

      localStorage.setItem("token", userData.token); // Salva o token no localStorage
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8000/api/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user data", error);
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
