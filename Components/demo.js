import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Login from "./pages/vendor/login";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [admin,setAdmin]=useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(async () => {
    const userCookie = Cookies.getItem("captionshield");
    // const adminCookie = Cookies.getItem("captionshield");
    if (userCookie !== "" && userCookie != null) {
      const { data: user } = await axios.get(
        "https://captionshield.herokuapp.com/api/users",
        {
          headers: {
            Authorization: `${userCookie.token}`,
          },
        }
      );
      if (user.status) {
        setUser({ user: data });
        setToken(userCookie.token);
      }
    }
    //     if (adminCookie !== "" && adminCookie !=null ){
    //       const {data: admin } = await Axios.get("",
    //       {
    //       headers: {
    //         Authorization: `${adminCookie.token}`,
    //       },
    //       });
    // if (admin.status){
    //   setAdmin(admin.data);
    //   setAdmin(adminCookie.token);
    // }
    //     }
  });

  const setUserData = async (data) => {
    setUser(data);
  };

  // const setAdminData = async (data)=>{
  //   setAdminData(data);
  // }

  const setTokenData = (token) => {
    setToken(token);
  };

  const logout = (userType) => {
    switch (userType.toLowerCase()) {
      case "user":
        Cookies.remove("captionshield");
        setUser(null);
        router.replace("/vendor/login");
        break;
      // case "admin":
      //   Cookies.remove("captionshield");
      //   setAdmin(null);
      //   router.replace("/")
      //   break;
      default:
        break;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticatedUser: !!user,
        user,
        // isAuthenticatedAdmin: !!admin,
        // admin,
        token,
        logout,
        setTokenData,
        setUserData,
        // setAdminData
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
// export const AdminProtectedPage = ({ children }) => {
//   const { isAuthenticatedAdmin } = useAuth();
//   if (!isAuthenticatedAdmin) {
//     return <Login />;
//   } else {
//     return children;
//   }
// };
