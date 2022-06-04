import React,{useState,useReducer} from 'react'
import {DateSingleInput} from '@datepicker-react/styled'
import PhoneInput from 'react-phone-number-input'


import { MainContainer, InputContainerTwice, InputContainerSolo, WelcomeText,DateContainer,ButtonContainer, LinkContainer, BodyContainer } from './RegisterElements'
import { StyledInputSolo, StyledInputTwice,StyledTextArea } from './components/Input/InputElements'
import { StyledButton } from './components/Button/ButtonElement'

import './style.css'
import "react-datepicker/dist/react-datepicker.css";

const initialState = {
  date: null,
  showDatepicker: false,
}

const ButtonTheme = {
  buttonColorFirst: "#052F5F",
  buttonColorSecond:"#436EB1"
};

function reducer(state, action) {
  switch (action.type) {
    case 'focusChange':
      return {...state, showDatepicker: action.payload}
    case 'dateChange':
      return action.payload
    default:
      throw new Error()
  }
}



const Register = () => {

  const [phone, setPhone] = useState()
  const [state, dispatch] = useReducer(reducer, initialState)
  

  return (
    <BodyContainer>
    <MainContainer>
        <WelcomeText>Register</WelcomeText>

        <InputContainerTwice>
        <StyledInputTwice type={"text"} placeholder="Username"/>
        <StyledInputTwice type={"text"} placeholder="Name and Surname"/>
        </InputContainerTwice>

        <InputContainerSolo>
        <StyledInputSolo type = {"email"}  placeholder = "Enter your email"></StyledInputSolo>
        </InputContainerSolo>

        <InputContainerSolo>
        <PhoneInput placeholder="Enter phone number" value={phone} onChange={setPhone}/>
        </InputContainerSolo>

        <DateContainer>
        
        <DateSingleInput onDateChange={data => dispatch({type: 'dateChange', payload: data})} onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
          date={state.date} // Date or null
           showDatepicker={state.showDatepicker} /> 
        
        </DateContainer>


        <InputContainerTwice>
        <StyledInputTwice type={"password"} placeholder="Enter your password"/>
        <StyledInputTwice type={"password"} placeholder="Confirm your password"/>
        </InputContainerTwice>


        <InputContainerSolo>
        <StyledTextArea type ={"text"} placeholder="Enter your address" />
        </InputContainerSolo>


        <ButtonContainer>
         <StyledButton ButtonTheme = {ButtonTheme} >Register</StyledButton>
        </ButtonContainer>

        <LinkContainer>
        <a href ="/">Already have an account? Sign In</a>
        </LinkContainer>
    </MainContainer>
           
    </BodyContainer>
  )
}

export default Register