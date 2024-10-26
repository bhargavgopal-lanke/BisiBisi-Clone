import React from "react";
import {
  Container,
  Footer,
  FooterDiv,
  FooterPara,
} from "../Styledcomponents/Landingpagestyles.ts";

function Landing() {
  return (
    <>
      <Container></Container>
      <Footer>
        <FooterDiv>
          <FooterPara className=".pt-9">Locations</FooterPara>
        </FooterDiv>
      </Footer>
    </>
  );
}

export default Landing;
