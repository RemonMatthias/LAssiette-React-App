import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

import {
  NavContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
  Title,
  Subtitle,
  NavWrapper,
  MobileIcon,
} from "./NavBar.elements";

const NavBar = ({ toggle }) => {
  //Navbar scroll functionality
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <NavContainer scrollNav={scrollNav}>
        <MobileIcon onClick={toggle}>
          <FaBars size={30} />
        </MobileIcon>
        <NavWrapper>
          <NavMenu>
            <NavItem>
              <NavLink
                to="about-us"
                activeClass="active"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                ABOUT US
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="menu"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                MENU
              </NavLink>
            </NavItem>

            <NavLogo
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              activeClass="active"
            >
              <Title>
                L’Assiette
                <Subtitle>food of your own choice</Subtitle>
              </Title>
            </NavLogo>

            <NavItem>
              <NavLink
                to="booking"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                BOOKINGS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="contact-us"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                CONTACT US
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavWrapper>
      </NavContainer>
    </>
  );
};

export default NavBar;
