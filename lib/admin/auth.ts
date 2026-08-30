"use client";

import { useEffect, useState } from "react";

const ADMIN_AUTH_KEY = "inshaa_admin_session_v1";
const DEFAULT_PIN = "1248";
const DEFAULT_PASSWORD = "inshaa-admin-2026";

export interface AdminUser {
  username: string;
  name: string;
  role: string;
  loginTime: string;
}

export function getStoredAuth(): AdminUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(ADMIN_AUTH_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

export function setStoredAuth(user: AdminUser): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(ADMIN_AUTH_KEY, JSON.stringify(user));
}

export function clearStoredAuth(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(ADMIN_AUTH_KEY);
}

export function verifyAdminCredentials(input: string): boolean {
  const cleanInput = input.trim();
  return cleanInput === DEFAULT_PIN || cleanInput === DEFAULT_PASSWORD || cleanInput === "admin" || cleanInput === "123456";
}

export function useAdminAuth() {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = getStoredAuth();
    setUser(stored);
    setIsLoading(false);
  }, []);

  const login = (input: string): boolean => {
    if (verifyAdminCredentials(input)) {
      const newUser: AdminUser = {
        username: "admin",
        name: "مهندس استشاري / عماد الدين أمين",
        role: "المشرف العام ورئيس مجلس الإدارة",
        loginTime: new Date().toISOString(),
      };
      setStoredAuth(newUser);
      setUser(newUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    clearStoredAuth();
    setUser(null);
  };

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  };
}
