import React from 'react'
import {FaFacebook, FaInstagram,FaTwitter} from 'react-icons/fa'
import { BodyContainer, ButtonContainer, ForgotPassword, HorizontalRule, IconsContainer, InputContainer, LoginWith, MainContainer,Register,WelcomeText } from './LoginElements'
import { Input } from './components/Input/Input'
import { Button } from './components/Button/Button'
import { Icon } from './components/Icon/Icon'

export const Login = () => {

  const ButtonTheme = {
    buttonColorFirst: "#052F5F",
    buttonColorSecond:"#436EB1"
};

const HorizontalColor = {
  hrColor1:"#14163c",
  hrColor2:"#031B63"

}

const FacebookBackground = "linear-gradient(to right, #0546A0 0% , #663FB6 100%)"
const InstagramBackground = "linear-gradient(to right, #A12AC4 0%,#ED586C 40% , #F0A853 100%)"
const TwitterBackground = "linear-gradient(to right, #56C1E1 0% , #35A9CE 50%)"


  return (
    <BodyContainer>
    <MainContainer>
        <WelcomeText>Welcome</WelcomeText>
        
        <InputContainer>
          <Input type={"text"} placeholder="Email"/>
          <Input type={"password"} placeholder="Password"/>
        </InputContainer>

        <ButtonContainer>
          <Button ButtonTheme={ButtonTheme} content = "Sign In"/>
        </ButtonContainer>

        <Register to = "/Register">Register</Register>

        <LoginWith>Login With</LoginWith>

        <HorizontalRule color={HorizontalColor}/>

        <IconsContainer>

          <Icon color = {FacebookBackground}><FaFacebook/></Icon>

          <Icon color = {InstagramBackground}><FaInstagram/></Icon>

          <Icon color = {TwitterBackground}><FaTwitter/></Icon>


        </IconsContainer>

        <ForgotPassword>Forgot Password</ForgotPassword>
    
    </MainContainer>
    </BodyContainer>
  )
}
