import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const AboutContainer = styled.div`
  width: 100vw;
  height: 800px;
  position: relative;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (min-height: 850px) {
    height: 100vh;
  }
`;

//Image

export const ImgWrapper = styled.div`
  width: 50%;
  display: flex;
  z-index: -222222;
  margin-top: 3em;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 30%;
    margin: 0 auto;
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 90%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

//content

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    height: 60%;
    width: 100%;
    font-size: 0.8em;
  }
`;

export const MiniWrapper = styled.div`
  display: flex;
  text-align: Center;
  margin-bottom: 2em;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 1em;
  }
`;

export const Icon = styled.img`
  padding: 0 1em;
`;

export const Title = styled.h1`
  color: white;
  font-family: "Chivo", sans-serif;
  font-weight: 400;
  font-size: 2.5em;
`;

export const Para = styled.p`
  color: white;
  font-family: "Overpass", sans-serif;
  margin-bottom: 3.5em;
  font-size: 1em;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto 1em auto;
  }
`;

export const Visit = styled.h3`
  color: white;
  font-family: "Overpass", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
`;

export const Link = styled(LinkS)`
  color: #ffc901;
  font-family: "Overpass", sans-serif;
  font-weight: 300;
  cursor: pointer;
  font-size: 1em;

  :hover {
    color: #cc9900;
  }
`;
