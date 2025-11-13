"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userType: string | null;
  userEmail: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    const storedUserType = localStorage.getItem('userType');
    const storedUserEmail = localStorage.getItem('userEmail');

    setIsAuthenticated(authStatus);
    setUserType(storedUserType);
    setUserEmail(storedUserEmail);
  }, []);

  const login = (email: string, password: string) => {
    if (
      (email === 'admin@gmail.com' && password === 'admin') ||
      (email === 'user@gmail.com' && password === 'user')
    ) {
      const userType = email === 'admin@gmail.com' ? 'admin' : 'user';
      localStorage.setItem('userType', userType);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      
      setIsAuthenticated(true);
      setUserType(userType);
      setUserEmail(email);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    localStorage.removeItem('userEmail');
    
    setIsAuthenticated(false);
    setUserType(null);
    setUserEmail(null);
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      userType,
      userEmail,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}