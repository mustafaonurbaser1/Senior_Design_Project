import React, {useState,useReducer}from 'react'
import { Layout } from '../components/Layout'
import { BodyContainer, MainContainer, WelcomeText, InputContainerSolo, DateContainer, DateAndImageContainer,ImportanceTodoButtons, ImportanceButton, ButtonContainer } from './Page Components/AddTodoElements';
import { StyledInputSolo, StyledInputTwice,StyledTextArea } from './Page Components/Components/Input/InputElements'
import {DateRangeInput} from '@datepicker-react/styled'
import { ImportantButton,NotImportantButton,NormalButton, StyledButton } from './Page Components/Components/Button/ButtonElement'
import { ThemeProvider } from 'styled-components';


const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
}


const ButtonThemeAdd = {
  buttonColorFirst: "#052F5F",
  buttonColorSecond:"#436EB1"
};


const ButtonThemeImportant = {
  buttonColorFirst: "#E00000",
  buttonColorSecond:"#FF5C5C"
};

const ButtonThemeNormal = {
  buttonColorFirst: "#CCB100",
  buttonColorSecond:"#FFE95C"
};

const ButtonThemeNotImportant = {
  buttonColorFirst: "#00A30E",
  buttonColorSecond:"#70FF7C"
};
function reducer(state, action) {
  switch (action.type) {
    case 'focusChange':
      return {...state, focusedInput: action.payload}
    case 'dateChange':
      return action.payload
    default:
      throw new Error()
  }
}
export const AddTodo = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  

  return (
    <div style = {{ display:"flex"}}>
      
      <Layout name={"Yusuf"}></Layout>
     
     
      <BodyContainer>
        
        <MainContainer>
          <WelcomeText>Add Todo</WelcomeText>

          <InputContainerSolo>
            <StyledInputSolo placeholder={"Enter Title"}/>
          </InputContainerSolo>

          <DateAndImageContainer>
            <DateContainer>
              <ThemeProvider theme={{
              breakpoints: ["32em", "48em", "64em"],
              reactDatepicker: {
                daySize: [36, 40],
                inputWidth:[100,"10vw"],
                inputBorder:["none"],
                colors: {
                  accessibility: "#436EB1",
                  selectedDay: "#436EB1",
                  primaryColor: "#436EB1"
                }
              }
            }}>
            <DateRangeInput
              onDatesChange={data => dispatch({type: 'dateChange', payload: data})}
              onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
              startDate={state.startDate} // Date or null
              endDate={state.endDate} // Date or null
              focusedInput={state.focusedInput} // START_DATE, END_DATE or null
              displayFormat={"dd/MM/yyyy"}
              />
              </ThemeProvider>
            </DateContainer>
            
          </DateAndImageContainer>

          <InputContainerSolo>
            <StyledTextArea placeholder='Enter your explonation'></StyledTextArea>
          
          </InputContainerSolo>

          <ImportanceTodoButtons>
            <ImportantButton ButtonTheme = {ButtonThemeImportant}>Important</ImportantButton>
            <NormalButton ButtonTheme = {ButtonThemeNormal}>Normal</NormalButton>
            <NotImportantButton ButtonTheme = {ButtonThemeNotImportant}>Not Important</NotImportantButton>
            
          </ImportanceTodoButtons>

          <ButtonContainer>

            <StyledButton ButtonTheme = {ButtonThemeAdd}>Add Todo</StyledButton>
          </ButtonContainer>
          
        
        </MainContainer>
        
      </BodyContainer>
      
        
      </div>
  )
}
