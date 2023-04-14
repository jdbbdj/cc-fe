import React from "react";
import Typography from "../Typography";
import Image from "next/image";
function Navbar() {
  return (
    <div className="navbar-main h-16">
      {/*PROMO -------------------------------------*/}
      <div className="promo-header h-5 justify-center items-center text-center">
        <Typography
          type="default-white"
          text="Super deals! Free shipping for orders above P500"
        />
      </div>

      {/*LOGO HEADER NAVS -------------------------------------*/}
      <div className="navbar-second flex flex-row justify-between items-center px-4">
        <div
          className="flex flex-row justify-between"
          style={{ width: "calc((100% - 470px))" }}
        >
          <Image src="/svg/logo.svg" alt="My SVG file" width={48} height={48} />
          <Typography type="header" text="CONG CLOTHING" />
        </div>

        <div className="navigations flex flex-row justify-around items-center w-48">
          <Typography type="default" text="REGISTER" />
          <Typography type="default" text="SIGN IN" />
          <Image
            src="/svg/shopping.svg"
            alt="My SVG file"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
