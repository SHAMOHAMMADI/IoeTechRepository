import { createContext, useState } from "react";

export type LoginType = {
  login: any;
  setIsLogin: any;
};

type AuthUserLogin = {
  name: React.ReactNode;
  email: React.ReactNode;
};

export const LoginContext = createContext({} as LoginType);

export type loginProviderType = {
  children: React.ReactNode;
};

export const LoginUserContextProvider = ({ children }: loginProviderType) => {
  const [login, setIsLogin] = useState<AuthUserLogin | null>(null);
  return (
    <LoginContext.Provider value={{ login, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
