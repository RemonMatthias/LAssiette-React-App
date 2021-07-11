import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon size={30} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="about-us" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink to="menu" onClick={toggle}>
            Menu
          </SidebarLink>
          <SidebarLink to="booking" onClick={toggle}>
            Bookings
          </SidebarLink>
          <SidebarLink to="contact-us" onClick={toggle}>
            Contact Us
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
