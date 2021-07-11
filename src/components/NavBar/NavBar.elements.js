import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const NavContainer = styled.nav`
  width: 100vw;
  height: 10vh;
  position: fixed;
  top: 0;
  font-size: 1rem;
  z-index: 100;
  background: ${({ scrollNav }) =>
    scrollNav ? "radial-gradient(#555554, transparent)" : "transparent"};

  @media screen and (max-width: 768px) {
    background: transparent;
  } ;
`;

//SideBar Icon

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8em;
    cursor: pointer;
    color: #fff;
  }
`;

//Navbar

export const NavWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: Center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  text-align: center;
  width: 90%;
`;

export const NavItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavLink = styled(LinkS)`
  color: white;
  font-family: "Chivo", sans-serif;
  font-size: 1.2em;
  cursor: pointer;

  &:hover {
    color: #ffc901;
    transition: all 0.2s ease-in-out;
  }
  &.active {
    color: #ffc901;
  }
`;

export const NavLogo = styled(LinkS)`
  height: 100%;
  cursor: pointer;
  color: white;
  :hover {
    color: #ffc901;
    transition: all 0.2s ease-in-out;
  }
`;

export const Title = styled.h1`
  font-family: "Atma", cursive;
  font-size: 2em;
  font-weight: 400;
`;

export const Subtitle = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 0.4em;
`;
