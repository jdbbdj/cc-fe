import React from "react";
import Image from "next/image";
import {
  Container,
  FooterDetails,
  FooterLower,
  FooterMiddle,
  FooterMiddleLeft,
  FooterMiddleRight,
  FooterMiddleRightWrapper,
  FooterUpper,
  FooterWrapper,
  IconWrapper,
  LowerWrapper,
} from "./styled";

const links = [
  {
    id: 0,
    title: "Youtube",
    icon: "/svg/yt.svg",
  },
  {
    id: 1,
    title: "Facebook",
    icon: "/svg/fb.svg",
  },
  {
    id: 2,
    title: "Tiktok",
    icon: "/svg/tt.svg",
  },
  {
    id: 3,
    title: "LinkedIn",
    icon: "/svg/lk.svg",
  },
];

const footers = [
  {
    id: 0,
    title: "Products",
    subfooters: ["Subfooters", "Subfooters", "Subfooters"],
  },
  {
    id: 1,
    title: "About",
    subfooters: ["Subfooters", "Subfooters", "Subfooters"],
  },
  {
    id: 2,
    title: "Contacts",
    subfooters: ["Subfooters", "Subfooters", "Subfooters"],
  },
];
import Typography from "../Typography";
function Footer() {
  return (
    <Container>
      <FooterWrapper>
        <FooterUpper>
          <Image src="/svg/logo.svg" alt="Logo" width={48} height={48} />
          <Typography type="category-header" text="CONG CLOTHING" />
        </FooterUpper>
        <FooterMiddle>
          <FooterMiddleLeft>
            {footers.map((footer) => {
              return (
                <FooterDetails key={footer.id}>
                  <Typography type="subheader-white" text={footer.title} />
                  {footer.subfooters.map((subfooter) => {
                    return (
                      <Typography
                        key={subfooter}
                        classType="opacity-50"
                        type="subheader-white"
                        text={subfooter}
                      />
                    );
                  })}
                </FooterDetails>
              );
            })}
          </FooterMiddleLeft>
          <FooterMiddleRight>
            <Typography type="subheader-white" text="Socials" />
            <FooterMiddleRightWrapper>
              {links.map((link) => {
                return (
                  <IconWrapper key={link.id}>
                    <Image
                      src={link.icon}
                      alt={`Image ${link.title}`}
                      width={24}
                      height={24}
                    />
                  </IconWrapper>
                );
              })}
            </FooterMiddleRightWrapper>
          </FooterMiddleRight>
        </FooterMiddle>
        <FooterLower>
          <LowerWrapper>
            <Typography
              type="default-white"
              text="Copyright © 2023 All rights reserved | Template by James Daryl Bertiz"
            />
          </LowerWrapper>
        </FooterLower>
      </FooterWrapper>
    </Container>
  );
}

export default Footer;
