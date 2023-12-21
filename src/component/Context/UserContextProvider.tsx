import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export type UserContextType = {
  user: any;
  setUser: any;
  valid?: any;
  setValid?: any;
};

type AuthUser = {
  name: React.ReactNode;
  email: React.ReactNode;
  user: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export type UserContextProviderType = {
  children: React.ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  useEffect(() => {
    axios.get("http://localhost:7100/info").then((res: any) => {});
  }, []);
  // const [valid, setValid] = useState<AuthUser | null>({"test"});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
