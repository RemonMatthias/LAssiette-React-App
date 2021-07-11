import React from "react";
import {
  HomeContainer,
  ImgWrapper,
  Img,
  ContentWrapper,
  FirstGroup,
  Title,
  Subtitle,
  SecondGroup,
  Brand,
  Motto,
  ThirdGroup,
  Booking,
  BookingLink,
  Background,
} from "./Home.elements";
import img from "../../images/2.png";

const Home = () => {
  return (
    <>
      <HomeContainer id="home">
        <ContentWrapper>
          <FirstGroup>
            <Title>START YOUR MEAL WITH OUR EXCLUSIVE MENU</Title>
            <Subtitle>LEARN MORE...</Subtitle>
          </FirstGroup>

          <SecondGroup>
            <Brand>L’Assiette</Brand>
            <Motto>food of your own choice</Motto>
          </SecondGroup>
          <ThirdGroup>
            <Background />
            <Booking>
              BOOK YOUR TABLE{" "}
              <BookingLink
                to="booking"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                NOW
              </BookingLink>
            </Booking>
          </ThirdGroup>
        </ContentWrapper>
        <ImgWrapper>
          <Img src={img} alt="img" />
        </ImgWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;
