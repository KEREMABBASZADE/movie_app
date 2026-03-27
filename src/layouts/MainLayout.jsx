import React, { useContext } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeContext } from "../contexts/ThemeContext";

const MainLayout = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main
        className={`flex-1 ${
          isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
