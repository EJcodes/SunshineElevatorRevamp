import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksContainer,FooterLinksWrapper, 
    FooterLinkItems, FooterLinkTitle,FooterLink, } from '../Footer/FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>            
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/contactus">Contact us</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}
export default Footer;