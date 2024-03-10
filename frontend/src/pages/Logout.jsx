import React from "react";
import { UserRound, LogOut } from "lucide-react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const Logout = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setAuthUser(null);
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="w-10 h-10 rounded-full border flex justify-center items-center border-gray-800">
        {" "}
        <UserRound color="#ffffff" strokeWidth={1.5} />{" "}
      </div>

      <div
        onClick={handleLogout}
        className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800"
      >
        <LogOut color="#ffffff" strokeWidth={1.5} />
      </div>
    </>
  );
};

export default Logout;
