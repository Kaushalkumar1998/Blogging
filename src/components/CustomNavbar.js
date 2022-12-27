import { NavLink as ReactLink } from "react-router-dom";
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function CustomNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ backgroundColor: "Black" }} {...args}>
        <NavbarBrand style={{ color: "white" }} tag={ReactLink} to='/'>My Blogs</NavbarBrand>
        <NavbarToggler style={{ backgroundColor: "white" }} onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink style={{ color: "white" }} tag={ReactLink} to='/about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "white" }} tag={ReactLink} to='/Login'>
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "white" }} tag={ReactLink} to='/Signup'>
                Signup
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style={{ color: "white" }} nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="/Services">Services</DropdownItem>
                <DropdownItem tag={ReactLink} to="/Contactsus">Contact us</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>GitHub</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText style={{ color: "white" }} >YouTube</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;