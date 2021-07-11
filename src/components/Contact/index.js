import React from "react";
import img from "../../images/5.png";
import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialTwitterCircular,
  TiMail,
} from "react-icons/ti";
import {
  Container,
  TopContainer,
  TextWrapper,
  Title,
  Para,
  Link,
  BottomContainer,
  LogoWrapper,
  Logo,
  Motto,
  IconsWrapper,
  TrademarkWrapper,
  TradeMark,
  ImgWrapper,
  Img,
  Icon,
  IconLink,
  Head,
} from "./Footer.elements";

const Contact = () => {
  return (
    <>
      <Container id="contact-us">
        <TopContainer>
          <ImgWrapper>
            <Img src={img} alt="img" />
          </ImgWrapper>
          <TextWrapper>
            <Title>Enjoy Our Best Meals</Title>
            <Para>
              We welcome you to sit back, unwind and appreciate the lovely
              sights and hints of the ocean while our best gourmet expert sets
              you up a scrumptious dinner utilizing the best and freshest
              ingredients. <br />
              Enjoy our dazzling dishes and make the most of your eating
              background with us!
            </Para>
            <Link>CONTACT US NOW</Link>
          </TextWrapper>
        </TopContainer>
        <BottomContainer>
          <Head>
            <LogoWrapper>
              <Logo>L’Assiette</Logo>
              <Motto>food of your own choice</Motto>
            </LogoWrapper>
            <IconsWrapper>
              <Icon>
                <IconLink href="#" target="_blank">
                  <TiSocialFacebookCircular
                    style={{ color: "orange" }}
                    size={30}
                  />
                </IconLink>
              </Icon>
              <Icon>
                <IconLink href="#" target="_blank">
                  <TiSocialTwitterCircular
                    style={{ color: "orange" }}
                    size={30}
                  />
                </IconLink>
              </Icon>
              <Icon>
                <IconLink href="#" target="_blank">
                  <TiSocialInstagramCircular
                    style={{ color: "orange" }}
                    size={30}
                  />
                </IconLink>
              </Icon>
              <Icon>
                <IconLink href="#" target="_blank">
                  <TiMail style={{ color: "orange" }} size={30} />
                </IconLink>
              </Icon>
            </IconsWrapper>
          </Head>
          <TrademarkWrapper>
            <TradeMark>©2021-Remon Matthias.All Rights Reserved</TradeMark>
          </TrademarkWrapper>
        </BottomContainer>
      </Container>
    </>
  );
};

export default Contact;
