type Props = {
  children: ReactElement;
};

import React, { ReactElement } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      {/*this will insert on the head */}
      <Header />
      <div className="layout-main">
        <Navbar />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
