import React, {useState, useEffect} from 'react';
import {FaAlignJustify} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({toggle})=> {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = ()=> window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);

  useEffect(()=> window.addEventListener('scroll', changeNav) , []);

  const toggleHome = ()=> scroll.scrollToTop()

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <NavLogo to="/" onClick={toggleHome}>
                inter
              </NavLogo>
              <MobileIcon onClick={toggle}>
                <FaAlignJustify />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset="-80" >About</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="discover" smooth={true} duration={500} spy={true} exact="true"  >Discover</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="services" smooth={true} duration={500} spy={true} exact="true"  >Services</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="signup" smooth={true} duration={500} spy={true} exact="true" >Sign up</NavLinks>
                </NavItem>
              </NavMenu>
              <NavBtn>
                <NavBtnLink to="/signin">Sign in</NavBtnLink>
              </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;