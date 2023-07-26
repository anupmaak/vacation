import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';
const AppNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    UserProfile.setCustomerId(0)
    navigate('/');
  }

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
      <NavbarToggler onClick={() => { setIsOpen(!isOpen) }}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="justify-content-end" style={{width: "100%"}} navbar>
          {/* <NavItem>
            <NavLink href="https://twitter.com/oktadev">@oktadev</NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink href="/"></NavLink>
          </NavItem>
          {( UserProfile.getCustomerId() != 0 && UserProfile.getCustomerId() != null) && <NavItem>
            <NavLink href="/"><Button size="sm" color="danger" onClick={() => logout()}>LogOut</Button></NavLink>
          </NavItem>}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default AppNavbar;