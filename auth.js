import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookies";
import { getProfile } from "./actions/vendor";
import Login from "./pages/login";
import { CircularProgress } from "@material-ui/core";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [vendor, setVendor] = useState(null);
  const [admin, setAdmin] = useState(null);
  useEffect(async () => {
    const userCookie = Cookies.getItem("auth");
    if (userCookie !== "" && userCookie != null) {
      if (userCookie) {
        setToken(userCookie);
        getProfile((error, result) => {
          if (result.status) {
            if (result.data.isAdmin) {
              setLoading(false);
              setAdmin(result.data);
            } else {
              setLoading(false);
              setVendor(result.data);
            }
          }
        });
      }
    }
  }, []);

  const setVendorData = async (data) => {
    setVendor(data);
  };
  const setAdminData = async (data) => {
    setAdmin(data);
  };

  const setTokenData = (token) => {
    setToken(token);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticatedUser: !!vendor,
        token,
        admin,
        vendor,
        setTokenData,
        setVendorData,
        setAdminData,
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

export const AdminProtectedPage = ({ children }) => {
  const { admin } = useAuth();
  if (!admin) {
    return <Login />;
  } else {
    return children;
  }
};
