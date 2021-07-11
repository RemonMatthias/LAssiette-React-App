import React from "react";
import img1 from "../../images/1.png";
import {
  MenuContainer,
  Img,
  ImgWrapper,
  ContentWrapper,
  Title,
  Para,
  Link1,
  Link2,
  DiscountWrapper,
  Span,
  MiniWrapper,
  Icon,
} from "./Menu.elements";
import img from "../../images/4.png";

const Menu = () => {
  return (
    <>
      <MenuContainer id="menu">
        <ImgWrapper>
          <Img src={img} alt="img" />
        </ImgWrapper>
        <ContentWrapper>
          <MiniWrapper>
            <Icon src={img1} alt="img" />
            <Title>OUR FOOD QUALITY</Title> <Icon src={img1} alt="img" />
          </MiniWrapper>
          <Para>
            In case you’re searching for top notch food, L'Assiette is
            unquestionably one of the spots to go for in Paris. The adaptable
            menu flaunts some imaginative food.The honor winning wine
            determination merits uncommon notice, both quaffer and specialist
            are all around provided food for.
          </Para>
          <Link1> OUR MENU >> </Link1>
          <DiscountWrapper>
            DOUBLE THE FUN <Span>ON EVERY SATURDAY</Span>
          </DiscountWrapper>
          <Link2>GET UP TO 50% DISCOUNT</Link2>
        </ContentWrapper>
      </MenuContainer>
    </>
  );
};

export default Menu;
