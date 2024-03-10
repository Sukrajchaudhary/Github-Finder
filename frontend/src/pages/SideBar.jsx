import React from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Home,
  Heart,
  Compass,
  LogIn,
  ArrowUpSquare,
} from "lucide-react";
import Logout from "./Logout";
import { useAuthContext } from "../context/AuthContext";
const SideBar = () => {
  const { authUser } = useAuthContext();

  return (
    <aside
      className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border-gray-800 text-white"
    >
      <nav className="h-full flex flex-col gap-3">
        <Link to="/" className="flex justify-center">
          <Github color="#ffffff" strokeWidth={1.5} />
        </Link>
        <Link to="/" className="flex justify-center">
          <Home color="#ffffff" strokeWidth={1.5} />
        </Link>
        {authUser && (
          <Link to="/Explore" className="flex justify-center">
            <Compass color="#ffffff" strokeWidth={1.5} />
          </Link>
        )}
        {authUser && (
          <Link
            to="/Likes"
            className="flex p-2 justify-center transition-colors duration-200 rounded-lg hover:bg-gray-500"
          >
            <Heart color="#ffffff" strokeWidth={1.5} />
          </Link>
        )}
        {authUser && (
          <Link to="/" className="flex flex-col gap-2 mt-auto">
            <Logout></Logout>
          </Link>
        )}
        {!authUser && (
          <Link
            to="/Login"
            className="flex p-2 justify-center transition-colors duration-200 rounded-lg hover:bg-gray-500"
          >
            <LogIn color="#ffffff" strokeWidth={1.5} />
          </Link>
        )}
        {!authUser && (
          <Link
            to="/Signup"
            className="flex p-2 justify-center transition-colors duration-200 rounded-lg hover:bg-gray-500"
          >
            <ArrowUpSquare color="#ffffff" strokeWidth={1.5} />
          </Link>
        )}
      </nav>
    </aside>
  );
};

export default SideBar;
