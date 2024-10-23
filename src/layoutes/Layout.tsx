import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div>
      <Header />

      <main>
        {/* This is where the routed content will appear */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
