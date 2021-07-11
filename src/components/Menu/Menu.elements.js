import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100vw;
  display: flex;
  position: relative;
  height: 800px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
  @media screen and (min-height: 850px) {
    height: 100vh;
  }
`;

//Image

export const ImgWrapper = styled.div`
  width: 45%;
  display: flex;
  margin-top: 3em;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 30%;
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 90%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

//Main Content

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 85%;
  position: absolute;
  right: 6em;
  bottom: 5%;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    height: 55%;
    width: 100%;
    font-size: 0.7rem;
    text-align: center;
    position: static;
  }
`;
export const MiniWrapper = styled.div`
  display: flex;
  text-align: Center;
  margin-bottom: 3em;
  justify-content: center;
`;
export const Icon = styled.img`
  padding: 0 1em;
  /* display: inline; */
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
  margin-bottom: 3em;
  font-size: 1.2em;
  line-height: 1em;
  font-weight: 200;
  @media screen and (max-width: 768px) {
    font-size: 1.5em;
    width: 90%;
    margin: 0 auto 1.5em auto;
  }
`;

export const Link1 = styled.a`
  color: #ffc901;
  font-family: "Chivo", sans-serif;
  font-weight: 400;
  font-size: 1.87em;
  cursor: pointer;
  margin-bottom: 2em;

  :hover {
    color: #cc9900;
  }
`;

export const DiscountWrapper = styled.h2`
  color: white;
  font-family: "Chivo", sans-serif;
  font-weight: 400;
  font-size: 3.5em;
  margin-bottom: 0.8em;
`;

export const Span = styled.h2`
  font-size: 0.8em;
  font-family: "Chivo", sans-serif;
  font-weight: 400;
`;

export const Link2 = styled.a`
  color: #ffc901;
  font-family: "Overpass", sans-serif;
  font-weight: 300;
  cursor: pointer;
  font-size: 2em;

  :hover {
    color: #cc9900;
  }
`;
