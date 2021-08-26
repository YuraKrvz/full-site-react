import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrapper, SocialLogo, WebSiteRights, SocialIcons, SocialIconLink, } from './FooterElements';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';


const Footer = ()=> {
  const toggleHome = ()=> scroll.scrollToTop()

  return (
    <FooterContainer id="footer">
      <FooterWrap>
         <FooterLinksContainer>
            <FooterLinksWrapper>
               <FooterLinkItems>
                  <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/">How it works</FooterLink>
                  <FooterLink to="/">Testing</FooterLink>
                  <FooterLink to="/">Careers</FooterLink>
                  <FooterLink to="/">Investors</FooterLink>
               </FooterLinkItems>
               <FooterLinkItems>
                  <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/">How it works</FooterLink>
                  <FooterLink to="/">Testing</FooterLink>
                  <FooterLink to="/">Careers</FooterLink>
                  <FooterLink to="/">Investors</FooterLink>              
               </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
               <FooterLinkItems>
                  <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/">How it works</FooterLink>
                  <FooterLink to="/">Testing</FooterLink>
                  <FooterLink to="/">Careers</FooterLink>
                  <FooterLink to="/">Investors</FooterLink>     
               </FooterLinkItems>
               <FooterLinkItems>
                  <FooterLinkTitle>Social media</FooterLinkTitle>
                  <FooterLink to="/">Instagram</FooterLink>
                  <FooterLink to="/">FaceBook</FooterLink>
                  <FooterLink to="/">Twitter</FooterLink>
                  <FooterLink to="/signin">you-tube</FooterLink> 
               </FooterLinkItems>
            </FooterLinksWrapper>
         </FooterLinksContainer>
         <SocialMedia>
            <SocialMediaWrapper>
               <SocialLogo to="/" onClick={toggleHome}>
                  inter
               </SocialLogo>
               <WebSiteRights>
                  inter  {new Date().getFullYear()} All rights reserved.
               </WebSiteRights>
               <SocialIcons>
                  <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                     <FaInstagram /> 
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                     <FaFacebook /> 
                  </SocialIconLink>
                  <SocialIconLink href="//www.twitter.com/userName" target="_blank" aria-label="Twitter">
                     <FaTwitter /> 
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                     <FaYoutube /> 
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                     <FaLinkedin /> 
                  </SocialIconLink>
               </SocialIcons>
            </SocialMediaWrapper>
         </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;