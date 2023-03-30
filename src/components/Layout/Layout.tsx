import React, { FC, PropsWithChildren, useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = PropsWithChildren;

const Layout: FC<LayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  console.log("here");

  return (
    <div>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
