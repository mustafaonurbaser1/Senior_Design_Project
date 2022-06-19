import React,{useState} from 'react'
import { HeroContainer, HeroBG, VideoBG,HeroH1,HeroContent,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements';
import Video from'../../videos/data.mp4'

import { Button, ButtonMain } from './../ButtonElement';

function HeroSection() {

    const [hover,setHover] = useState(false)

    const onHover = ()=> {
        setHover(!hover)
    }
  return (
    <HeroContainer id = "home">
        <HeroBG>
            <VideoBG autoPlay loop muted src ={Video} type = 'video/mp4'/>
        </HeroBG>

        <HeroContent>

            <HeroH1>Don't Bother For Remember</HeroH1>

            <HeroP>
                Sign up and add and events. Don't bother for remembering jobs.We will remember for you.
            </HeroP>

            <HeroBtnWrapper>
                <ButtonMain to ="/Register" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark = "true"> Get Started  {hover? <ArrowForward/> : <ArrowRight/>} </ButtonMain>
            </HeroBtnWrapper>
        
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection