import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function HamburgerNav(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">Google Books</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem active={isActive} onClick={() => setIsActive(!isActive)}>
              <NavLink href="/">Search</NavLink>
            </NavItem>
            <NavItem active={!isActive} onClick={() => setIsActive(!isActive)}>
              <NavLink href="/Saved">
                Saved
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HamburgerNav;