import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


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
      }
    })();
  }, []);

  const login = async (newToken: string) => {
    await AsyncStorage.setItem("token", newToken);
    setToken(newToken);
    manejarToken(newToken, logout);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setToken(null);
    console.log("Sesión cerrada automáticamente");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
function tokenValido(savedToken: string) {
  throw new Error("Function not implemented.");
}

function manejarToken(savedToken: string, logout: () => Promise<void>) {
  throw new Error("Function not implemented.");
}

