import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 800px;
  position: relative;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
  @media screen and (min-height: 850px) {
    height: 100vh;
  }
`;

//Image

export const ImgWrapper = styled.div`
  width: 50%;
  display: flex;
  margin-top: 3em;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    position: absolute;
    margin-top: 0;
    top: 10%;
    height: 23%;
  }
`;

export const Img = styled.img`
  width: 90%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

//Content

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 75%;
  position: absolute;
  right: 0;
  bottom: 5%;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40%;
    bottom: 30%;
  }
`;

//Group1

export const FirstGroup = styled.div`
  text-align: right;
  margin-right: 4em;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 3em auto;
    font-size: 0.8em;
  }
`;

export const Title = styled.h1`
  color: white;
  font-family: "Chivo", sans-serif;
  font-size: 3em;
`;

export const Subtitle = styled.a`
  color: #ffc901;
  cursor: pointer;
  font-family: "Chivo", sans-serif;
  font-size: 1.5em;

  :hover {
    color: #cc9900;
  }
`;

//Group2

export const SecondGroup = styled.div`
  text-align: right;
  margin-right: 4em;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 0 auto 3em auto;
  }
`;

export const Brand = styled.h1`
  color: white;
  font-family: "Atma", cursive;
  font-size: 3.5em;
`;

export const Motto = styled.p`
  color: white;
  font-family: "Nunito", sans-serif;
`;

//Group 3

export const ThirdGroup = styled.div`
  width: 100%;
  height: 20%;
  text-align: right;
  position: relative;
  margin-right: 4em;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin: auto;
  }
`;

export const Background = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgba(82, 82, 82, 1)
  );

  z-index: -2;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Booking = styled.h2`
  color: white;
  position: absolute;
  width: 100%;
  top: 40%;
  right: 10%;
  font-family: "Chivo", sans-serif;
  font-size: 1.5em;

  @media screen and (max-width: 768px) {
    position: static;
  }
`;

export const BookingLink = styled(LinkS)`
  color: #ffc901;
  cursor: pointer;
  font-family: "Chivo", sans-serif;
  font-size: 1em;

  :hover {
    color: #cc9900;
  }
`;
