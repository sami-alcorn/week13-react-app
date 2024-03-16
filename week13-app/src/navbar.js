/*imported properties from react and reactstrap so my navbar would work*/
import React, { useState } from 'react'
import {   
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
/*function that returns the navbar, with export default so it can be imported by index.js*/
export default function MyNavbar() {
  /*sets the navbar to be collapsed*/  
  const [collapsed, setCollapsed] = useState(true)
 /*changes the navbar collapse setting to expand when the toggle is clicked*/
  const toggleNavbar = () => setCollapsed(!collapsed)
 /*returns the jsx for the navbar itself, with silly unusable "links" to the 90s shows I love.
 the gitub and youtube links actually work.*/
  return (
    <div>
      <Navbar className='navbar navbar-dark bg-dark'>
        <NavbarBrand href="/" className="me-auto">
          90's TV Perfection
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
          <NavItem>
              <NavLink href="/">David Lynch's Twin Peaks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">The X-Files</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Buffy the Vampire Slayer</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/sami-alcorn/week13-reactApp">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://youtu.be/JV14GcLabTU">
                YouTube
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


