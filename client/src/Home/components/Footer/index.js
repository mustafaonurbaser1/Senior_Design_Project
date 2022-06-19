import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa'

import { FooterContainer,FooterLink,FooterLinksContainer,FooterLinkItems,FooterLinksWrapper,FooterWrap,FooterLinkTitle,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,SocialIconLink,WebsiteRights } from './FooterElements';

function Footer() {

    
    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>

                            <FooterLink to="/">How It Works</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                       
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                                            
                            <FooterLink to="/">Submit Video</FooterLink>
                            <FooterLink to="/">Ambassadors</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencer</FooterLink>
                    
                       
                    </FooterLinkItems>
                    
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                                            
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Destinations</FooterLink>
                            <FooterLink to="/">Sponsorships</FooterLink>
                       
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                                            
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>

                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            
            
            
            <SocialMedia> 

            <SocialMediaWrap>

            <SocialLogo to="/" onClick={toggleHome}>
                <WebsiteRights>Eventitude © {new Date().getFullYear()} All Rights</WebsiteRights>
                 </SocialLogo>  

                <SocialIcons>
                    <SocialIconLink href = "//www.facebook.com/" target="_blank" aria-label="Facebook"><FaFacebook/> </SocialIconLink>
                    <SocialIconLink href = "//www.instagram.com/" target="_blank" aria-label="Instagram"><FaInstagram/> </SocialIconLink>
                    <SocialIconLink href = "//www.youtube.com/" target="_blank" aria-label="Youtube"><FaYoutube/> </SocialIconLink>
                    <SocialIconLink href = "//www.twitter.com/" target="_blank" aria-label="Twitter"><FaTwitter/> </SocialIconLink>
                </SocialIcons>
                 
                 </SocialMediaWrap>
            </SocialMedia>

        </FooterWrap>
        
    </FooterContainer>
  )
}

export default Footer