import React from "react";
import { Container, HeroWrapper, CustomImage, HeroRight } from "./styled";

import Logo from "../../../public/svg/hero-blob";
import Typography from "../Global/Typography";
import Button from "../Global/Button";
const Hero = () => {
  return (
    <Container>
      <Logo className="absolute z-1" />
      <HeroWrapper>
        <CustomImage
          alt="Hero Image"
          className="z-1 relative"
          src={"/svg/hero.svg"}
          width={100}
          height={100}
        />
        <HeroRight>
          <Typography type="header" text="SUPPORT LOCAL" />
          <Typography
            type="subheader"
            text="PROUDLY PHILIPPINE-MADE FASHION IN MODERN DESIGN."
          />
          <Button type="default" text="ORDER NOW >" />
        </HeroRight>
      </HeroWrapper>
    </Container>
  );
};

export default Hero;
