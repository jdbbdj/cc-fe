import React from "react";
import {
  Container,
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
    <Container>
      <AboutWrapper>
        <AboutUpper>
          {about.map((item) => {
            return (
              <AboutDivs>
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
    </Container>
  );
};

export default About;
