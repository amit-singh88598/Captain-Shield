import Axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookies";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(async () => {
    const userCookie = Cookies.getItem("captionshield");
    if (
      userCookie !== "" &&
      userCookie != null
      // typeof userCookie == "undefined"
    ) {
      //   const { data: user } = await Axios.get("/api/user", {
      //     headers: {
      //       Authorization: `${userCookie.token}`,
      //     },
      //   });
      if (true) {
        setUser({ name: "captionshield" });
        setToken(userCookie.token);
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticatedUser: !!user,
        user,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
