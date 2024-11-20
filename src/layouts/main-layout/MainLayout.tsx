import { Outlet } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import "./main-layout.styles.css";
import SideBar from "../../components/side-bar/SideBar";

const MainLayout = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="content-wrapper">
        <SideBar />
        <main className="site-main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
