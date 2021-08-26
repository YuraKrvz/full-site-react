import React, {useState} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, } 
from './HeroElements';
import video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';

const HeroSection = ()=> {
  const [hover, setHover] = useState(false);
  const onHover = () => setHover(!hover);


  return (
    <HeroContainer id="home">
      <HeroBg>
         <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual space of internet</HeroH1>
        <HeroP>"Hero section" Joined in virtual space of internet world!</HeroP>
        <HeroBtnWrapper>
          <Button to="footer" primary="true" dark="true" onMouseEnter={onHover} onMouseLeave={onHover} smooth={true} duration={500} spy={true} exact="true"  >Enter the space {hover ? <ArrowForward /> : <ArrowRight /> }</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;