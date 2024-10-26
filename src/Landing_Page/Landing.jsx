import React from "react";
import {
  Container,
  Footer,
  FooterDiv,
  FooterPara,
  LocationGrid,
  LocationGridHeading,
  LocationGridColumOne,
  LocationGridPara,
  LocationGridWhatsappNum,
  LocationGridButton,
} from "../Styledcomponents/Landingpagestyles.ts";

function Landing() {
  return (
    <>
      <Container></Container>
      <Footer>
        <FooterDiv>
          <FooterPara className="pt-9">Locations</FooterPara>
          <LocationGrid className="p-3">
            <LocationGridColumOne>
              <LocationGridHeading>HITEC CITY</LocationGridHeading>
              <LocationGridPara>
                Upper Ground Floor, Phoenix tower A, Hitech City Main Rd,
                opposite Trident hotel, HITEC City, Hyderabad, Telangana 500081
              </LocationGridPara>
              <LocationGridWhatsappNum>+91 90329 84111</LocationGridWhatsappNum>
              <LocationGridButton>Get Directions</LocationGridButton>
            </LocationGridColumOne>
            <LocationGridColumOne>
              <LocationGridHeading>JUBILEE HILLS</LocationGridHeading>
              <LocationGridPara>
                Upper Ground Floor, Phoenix tower A, Hitech City Main Rd,
                opposite Trident hotel, HITEC City, Hyderabad, Telangana 500081
              </LocationGridPara>
              <LocationGridWhatsappNum>+91 90329 84111</LocationGridWhatsappNum>
              <LocationGridButton>Get Directions</LocationGridButton>
            </LocationGridColumOne>
            <LocationGridColumOne>
              <LocationGridHeading>HITEC CITY</LocationGridHeading>
              <LocationGridPara>
                Upper Ground Floor, Phoenix tower A, Hitech City Main Rd,
                opposite Trident hotel, HITEC City, Hyderabad, Telangana 500081
              </LocationGridPara>
              <LocationGridWhatsappNum>+91 90329 84111</LocationGridWhatsappNum>
              <LocationGridButton>Get Directions</LocationGridButton>
            </LocationGridColumOne>
          </LocationGrid>
        </FooterDiv>
      </Footer>
    </>
  );
}

export default Landing;
