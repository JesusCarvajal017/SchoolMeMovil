import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { tokenValido, manejarToken } from "../util/TokenManager";

type AuthContextType = {
  token: string | null;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const savedToken = await AsyncStorage.getItem("token");
      if (savedToken && tokenValido(savedToken)) {
        setToken(savedToken);
        manejarToken(savedToken, logout);
      } else {
        await AsyncStorage.removeItem("token");
        setToken(null);
      }
    })();
  }, []);

  const login = async (newToken: string) => {
    if (!newToken) return;
    await AsyncStorage.setItem("token", newToken);
    setToken(newToken);
    manejarToken(newToken, logout);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setToken(null);
    console.log("Sesión cerrada");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
