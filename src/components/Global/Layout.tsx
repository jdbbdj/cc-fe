import React, { ReactElement } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";

const Layout: React.FC<Props> = ({ children, handleToggleChange }) => {
  return (
    <React.Fragment>
      {/*this will insert on the head */}
      <Header />
      <div className="layout-main">
        <Navbar handleToggleChange={handleToggleChange} />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
};

type Props = {
  children: ReactElement;
  handleToggleChange: any;
};

export default Layout;
