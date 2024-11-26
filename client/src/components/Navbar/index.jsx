import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function HamburgerNav(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(collapsed);

  // Use useEffect to detect window resize and update the collpased state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 ) {
        console.log(window.innerWidth+" : " + collapsed)
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on load

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Navbar color="faded" expand>
        <NavbarBrand href="/" className="me-auto">
          Google Books
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Search</NavLink>
            </NavItem>
            <NavItem>
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