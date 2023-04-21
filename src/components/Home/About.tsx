import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutUpper,
  AboutLower,
  AboutDivs,
} from "./styled";
import { about } from "../../utils/data";
import Typography from "../Global/Typography";
import Button from "../Global/Button";
const About = () => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutUpper>
          {about.map((item) => {
            return (
              <AboutDivs key={item.id}>
                <Typography type="category-header-black" text={item.title} />
                <br></br>
                <Typography type="about" text={item.description} />
              </AboutDivs>
            );
          })}
        </AboutUpper>
        <AboutLower>
          <Typography
            classType="mr-10"
            type="header"
            text={"BECOME A MEMBER"}
          />
          <Button type="default" classType={`bg-white `} text="SIGN UP FREE" />
        </AboutLower>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
