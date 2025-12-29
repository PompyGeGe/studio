
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { mockUsers, type User } from '@/lib/mock-data';

interface AuthContextType {
  user: User | null;
  login: (username: string, pass: string) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('demo-user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('demo-user');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!loading && !user && pathname !== '/login') {
      router.push('/login');
    }
  }, [user, loading, pathname, router]);

  const login = (username: string, pass: string) => {
    const foundUser = mockUsers.find(
      (u) => u.username === username && u.password === pass
    );

    if (foundUser) {
      const userToStore = { ...foundUser };
      delete userToStore.password;
      
      localStorage.setItem('demo-user', JSON.stringify(userToStore));
      setUser(userToStore);
      router.push('/');
    } else {
      throw new Error('用户名或密码不正确');
    }
  };

  const logout = () => {
    localStorage.removeItem('demo-user');
    setUser(null);
    router.push('/login');
  };

  const value = { user, login, logout, loading };

  if (loading) {
    return null; // Or a loading spinner
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

    