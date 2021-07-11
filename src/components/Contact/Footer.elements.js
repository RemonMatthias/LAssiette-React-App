import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  position: relative;
  height: 800px;
  @media screen and (min-height: 850px) {
    height: 100vh;
  }
`;

//Top Content

export const TopContainer = styled.div`
  position: absolute;
  top: 20%;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: static;
    justify-content: space-between;
    height: 75%;
    padding-bottom: 2rem;
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
    height: 40%;
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 70%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

//Text

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  text-align: center;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 60%;
  }
`;

export const Title = styled.h1`
  color: #ffc901;
  font-family: "Chivo", sans-serif;
  font-weight: 400;
  font-size: 2.5em;
`;

export const Para = styled.p`
  color: white;
  font-family: "Overpass", sans-serif;
  font-weight: 200;
  line-height: 2em;
`;

export const Link = styled.a`
  color: #ffc901;
  cursor: pointer;
  font-family: "Overpass", sans-serif;
  font-weight: 200;
  font-size: 2em;

  :hover {
    color: #cc9900;
  }
`;

//Bottom Content

export const BottomContainer = styled.div`
  height: 24%;
  width: 100%;
  position: absolute;
  bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 65%;
  margin-top: 1.5em;
  justify-content: center;
`;

export const Logo = styled.h1`
  color: white;
  font-family: "Atma", cursive;
  font-size: 2em;
  font-weight: 400;
`;

export const Motto = styled.h4`
  color: white;
  font-family: "Nunito", sans-serif;
  font-size: 1em;
  font-weight: 400;
`;

// Social Icons

export const IconsWrapper = styled.div`
  height: 35%;
  list-style: none;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Icon = styled.li`
  display: inline-block;
  padding: 0 1em 0 0;
`;

export const IconLink = styled.a`
  text-decoration: none;
  border-bottom: none;
  position: relative;
  transition: all 0.2s ease;
  border-radius: 100%;
  display: flex;
  border: solid 1px rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.075);

  :hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

//Footer

export const TrademarkWrapper = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TradeMark = styled.h4`
  color: #ffc901;
  font-family: "Nunito", sans-serif;
  font-weight: 200;
  font-size: 0.9em;
`;
