import React, {useState,useReducer}from 'react'
import { Layout } from '../components/Layout'
import { BodyContainer, MainContainer, WelcomeText, InputContainerSolo, DateContainer, DateAndImageContainer,ButtonContainer,InputContainerMultiple, UsernameDiv, PpasswordDiv, ConfirmDiv } from './Page Components/SettingsElements';
import { StyledInputSolo } from './Page Components/Components/Input/InputElements'
import {DateSingleInput} from '@datepicker-react/styled'
import { StyledButton } from './Page Components/Components/Button/ButtonElement'
import PhoneInput from 'react-phone-number-input'
import { ThemeProvider } from 'styled-components';

const Settings = () => {

  const initialState = {
    date: null,
    showDatepicker: false,
  }
  
  const ButtonThemeAdd = {
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
  
  const [phone, setPhone] = useState()
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
   
    <div style = {{ display:"flex"}}>
      
    <Layout name={"Yusuf"}></Layout>
   
   
    <BodyContainer>
      
      <MainContainer>
        <WelcomeText>Settings</WelcomeText>

        <InputContainerMultiple>
          <UsernameDiv>
            <StyledInputSolo placeholder={"Change Username"}/>
          </UsernameDiv>

          <PpasswordDiv>
            <StyledInputSolo placeholder={"Change Password"} type={"password"}/>
          </PpasswordDiv>

          <ConfirmDiv>
          <StyledInputSolo placeholder={"Confirm Password"}type={"password"}/>
          </ConfirmDiv>
        </InputContainerMultiple>

        <InputContainerSolo>
          <StyledInputSolo placeholder={"Enter your new email"} type= {"email"}/>
        </InputContainerSolo>
        
        <InputContainerSolo>
        <PhoneInput placeholder="Enter phone number" value={phone} onChange={setPhone}/>
        </InputContainerSolo>

        <DateAndImageContainer>
          <DateContainer>
            <ThemeProvider
            theme={{
              breakpoints: ["32em", "48em", "64em"],
              reactDatepicker: {
                daySize: [36, 40],
                inputWidth:[100,"20vw"],
                inputBorder:["none"],
                colors: {
                  accessibility: "#436EB1",
                  selectedDay: "#436EB1",
                  primaryColor: "#436EB1"
                }
              }
            }}>
            <DateSingleInput onDateChange={data => dispatch({type: 'dateChange', payload: data})} onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
          date={state.date} // Date or null
          showDatepicker={state.showDatepicker} /> 
          </ThemeProvider>
          </DateContainer>
        </DateAndImageContainer>

        <ButtonContainer>
          <StyledButton ButtonTheme = {ButtonThemeAdd}>Change</StyledButton>
        </ButtonContainer>
        
      </MainContainer>
      
    </BodyContainer>
    
      
    </div>
  )
}

export default Settings