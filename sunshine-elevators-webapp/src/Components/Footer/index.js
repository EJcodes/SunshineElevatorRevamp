import React from 'react'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>            
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkTitle>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/contactus">Contact us</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                        </FooterLinkTitle>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}
export default Footer;