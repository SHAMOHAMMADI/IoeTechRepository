import { createContext, useState } from "react";

export type UserContextType = {
  user: any;
  setUser: any;
};

type AuthUser = {
  name: React.ReactNode;
  email: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export type UserContextProviderType = {
  children: React.ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
