import React from "react";
import img1 from "../../images/1.png";
import {
  AboutContainer,
  ContentWrapper,
  Title,
  Para,
  Visit,
  Link,
  ImgWrapper,
  Img,
  MiniWrapper,
  Icon,
} from "./Aboutus.elements";
import img from "../../images/3.png";

const AboutUs = () => {
  return (
    <>
      <AboutContainer id="about-us">
        <ContentWrapper>
          <MiniWrapper>
            <Icon src={img1} alt="img" />
            <Title>ABOUT US</Title> <Icon src={img1} alt="img" />
          </MiniWrapper>
          <Para>
            We welcome you to sit back, unwind and appreciate the lovely sights
            and hints of the ocean while our best gourmet expert sets you up a
            scrumptious dinner utilizing the best and freshest
            ingredients.L'Assiette 's legacy comes from The parent Restaurant
            which was built up in 1963. L'Assiette was worked for people in
            general and has advanced into a combination between exquisite chic
            and contemporary fine charge. Enjoy our dazzling dishes and make the
            most of your eating background with us!
          </Para>
          <Visit>
            Visit OR Book{" "}
            <Link
              to="booking"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              NOW
            </Link>
          </Visit>
        </ContentWrapper>
        <ImgWrapper>
          <Img src={img} alt="img" />
        </ImgWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutUs;
