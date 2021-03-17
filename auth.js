import { createContext, useContext, useEffect, useState } from "react";
import Login from "./pages/vendor/login";
import Cookies from "js-cookies";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  useEffect(async () => {
    const userCookie = Cookies.getItem("auth");
    if (userCookie !== "" && userCookie != null) {
      if (userCookie) {
        setToken(userCookie);
      }
    }
  }, []);

  const setUserData = async (data) => {
    setUser(data);
  };

  const setTokenData = (token) => {
    setToken(token);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticatedUser: !!token,
        token,
        setTokenData,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const UserProtectedPage = ({ children }) => {
  const { isAuthenticatedUser } = useAuth();
  if (!isAuthenticatedUser) {
    return <Login />;
  } else {
    return children;
  }
};
