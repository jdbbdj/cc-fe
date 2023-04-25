import React, { ReactElement } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import useNavigation from "@/utils/navigation/navigation";
const Layout: React.FC<Props> = ({ children, handleToggleChange }) => {
  const navigate = useNavigation();
  return (
    <React.Fragment>
      {/*this will insert on the head */}
      <Header />
      <div className="layout-main">
        <Navbar handleToggleChange={handleToggleChange} navigate={navigate} />
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
