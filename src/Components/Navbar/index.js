import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import logoSVG from '../Images/Logo.svg';
import{
    Logo,
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink} 
    from './NavbarElements';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome = () => {
         scroll.scrollToTop()
    }
    return (
        <>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  <NavLogo to='/' onClick={toggleHome}><Logo alt="sunshine elevator service's logo" src={logoSVG}/>Sunshine Elevator</NavLogo>
                  
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>

                  <NavMenu>
                      <NavItem>
                        <NavLinks to='about'
                        smooth={true} duration={500} spy={true}
                        exact='true' offset={-80}
                        >About</NavLinks>   
                       </NavItem>
                       <NavItem>
                           <NavLinks to ='sectors'
                           smooth={true} duration={500} spy={true}
                           exact='true' offset={-80}
                           >Sectors</NavLinks>
                       </NavItem>
                       <NavItem>
                        <NavLinks to='services'
                        smooth={true} duration={500} spy={true}
                        exact='true' offset={-80}
                        >Services</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="contactus"
                           smooth={true} duration={500} spy={true}
                           exact='true' offset={-80}
                           >Contact Us</NavLinks>
                       </NavItem>
                  </NavMenu>
                       {/* <NavBtn>
                           <NavBtnLink to ='/signin'>Sign In</NavBtnLink>
                       </NavBtn> */}
              </NavbarContainer>
          </Nav>
        </> 
    );
};

export default Navbar;
