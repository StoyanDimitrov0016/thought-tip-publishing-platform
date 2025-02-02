import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/core/header/Header";
import Sidebar from "../components/core/sidebar/Sidebar";

const MOBILE_BREAKPOINT = 768;

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

  function toggleHandler() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="site-container">
      <Header isOpen={isOpen} toggleHandler={toggleHandler} isMobile={isMobile} />
      <div className="site-content">
        {(!isMobile || isOpen) && (
          <Sidebar isOpen={isOpen} toggleHandler={toggleHandler} isMobile={isMobile} />
        )}
        <main className="site-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
