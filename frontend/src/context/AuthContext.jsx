import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
export const authContext = createContext("");

export const useAuthContext = () => {
  return useContext(authContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const checkedUserLoggedIn = async () => {
      try {
        const response = await fetch("/api/auth/check", {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setAuthUser(data.user);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    checkedUserLoggedIn();
  }, []);
  return (
    <authContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </authContext.Provider>
  );
};
