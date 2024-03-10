import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import LoginPages from "./pages/LoginPages";
import LikesPages from "./pages/LikesPages";
import SignupPages from "./pages/SignupPages";
import ExplorePage from "./pages/ExplorePage";
import SideBar from "./pages/SideBar";
import { Toaster } from "react-hot-toast";
import VideoBackground from "./components/VideoBackground";
import { useAuthContext } from "./context/AuthContext";
function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <div className="flex">
        <VideoBackground />
        <SideBar />
        <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route
              path="/Login"
              element={!authUser ? <LoginPages /> : <Navigate to="/" />}
            />
            <Route
              path="/Signup"
              element={!authUser ? <SignupPages /> : <Navigate to="/" />}
            />
            <Route
              path="/Likes"
              element={authUser ? <LikesPages /> : <Navigate to="/" />}
            />
            <Route
              path="/Explore"
              element={authUser ? <ExplorePage /> : <Navigate to="/" />}
            />
          </Routes>
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default App;
