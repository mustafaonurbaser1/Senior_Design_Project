import React, {useState,useReducer}from 'react'
import { Layout } from '../components/Layout'
import { BodyContainer, MainContainer, WelcomeText, InputContainerSolo, DateContainer, DateAndImageContainer,ButtonContainer,InputContainerMultiple } from './Page Components/SettingsElements';
import { StyledInputSolo, StyledInputTwice,StyledTextArea,InputLabel } from './Page Components/Components/Input/InputElements'
import {DateSingleInput} from '@datepicker-react/styled'
import { ImportantButton,NotImportantButton,NormalButton, StyledButton } from './Page Components/Components/Button/ButtonElement'
import PhoneInput from 'react-phone-number-input'

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
          <StyledInputSolo placeholder={"Change Username"}/>
          <StyledInputSolo placeholder={"Change Password"} type={"password"}/>
          <StyledInputSolo placeholder={"Confirm Password"}type={"password"}/>
        </InputContainerMultiple>

        <InputContainerSolo>
          <StyledInputSolo placeholder={"Enter your new email"} type= {"email"}/>
        </InputContainerSolo>
        
        <InputContainerSolo>
        <PhoneInput placeholder="Enter phone number" value={phone} onChange={setPhone}/>
        </InputContainerSolo>

        <DateAndImageContainer>
          <DateContainer>
            <DateSingleInput onDateChange={data => dispatch({type: 'dateChange', payload: data})} onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
          date={state.date} // Date or null
          showDatepicker={state.showDatepicker} /> 
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