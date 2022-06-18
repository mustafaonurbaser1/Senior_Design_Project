import React,{useState,useReducer} from 'react'
import {DateSingleInput} from '@datepicker-react/styled'
import PhoneInput from 'react-phone-number-input'
import ImageUploading from 'react-images-uploading'


import { MainContainer, InputContainerTwice, InputContainerSolo, WelcomeText,DateContainer,ButtonContainer, LinkContainer, BodyContainer, ImageContainer, BigInputContainer, HorizontalRule } from './RegisterElements'
import { StyledInputSolo, StyledInputTwice,StyledTextArea } from './components/Input/InputElements'
import { StyledButton } from './components/Button/ButtonElement'

import './style.css'
import "react-datepicker/dist/react-datepicker.css";
import { ThemeProvider } from 'styled-components'
import { useEffect } from 'react'


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

  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    setImageTrue(!isImageTrue)
  };

  const [phone, setPhone] = useState()
  const [date, setDate] = useReducer(reducer, initialState)
  const [values,setValues] = useState(
                                      {
                                        username:"",
                                        name:"",
                                        phone:"",
                                        image:"",
                                        password:"",
                                        address:""
                                      })

  const [username,setUsername] = useState("")
  const [name,setName] = useState("")
  const [mail,setMail] = useState("")
  const [images,setImages] = useState([])
  const [address,setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword,setConirmPassword] = useState("")
  const [isImageTrue,setImageTrue] = useState(true)

  const submitRegister = () => {
    console.log(values)
    
  
  }
  


  useEffect(() => {
    setValues({

      username:username,
      name:name,
      phone:phone,
      image:images,
      password:password,
      address:address

    })
  },[username,name,images,address,password,confirmPassword,phone,date])
  
 

  return (
    <BodyContainer>
    <MainContainer onSubmit={submitRegister}>
        <WelcomeText>Register</WelcomeText>

        <HorizontalRule></HorizontalRule>

        <BigInputContainer> 

          <InputContainerTwice>
        <StyledInputTwice required value={username} onChange = {e => setUsername(e.target.value)} type={"text"} placeholder="Username"/>
        <StyledInputTwice required type={"text"} value={name} onChange = {e => setName(e.target.value)} placeholder="Name and Surname"/>
        </InputContainerTwice>

        <InputContainerSolo>
        <StyledInputSolo required type = {"email"} value={mail} onChange = {e => setMail(e.target.value)}  placeholder = "Enter your email"></StyledInputSolo>
        </InputContainerSolo>

        <InputContainerSolo>
        <PhoneInput required placeholder="Enter phone number" value={phone} onChange={setPhone} defaultCountry="TR"/>
        </InputContainerSolo>

        <InputContainerTwice>
        <DateContainer>
          <ThemeProvider 
           theme={{
            breakpoints: ["32em", "48em", "64em"],
            reactDatepicker: {
              daySize: [36, 40],
              inputWidth:[100,"36vw"],
              inputBorder:["none"],
              colors: {
                accessibility: "#436EB1",
                selectedDay: "#436EB1",
                primaryColor: "#436EB1"
              }
            }
          }}
        >
        <DateSingleInput required onDateChange={data => setDate({type: 'dateChange', payload: data})} onFocusChange={focusedInput => setDate({type: 'focusChange', payload: focusedInput})}
          date={date.date}
           showDatepicker={date.showDatepicker} /> 
           </ThemeProvider>


        </DateContainer>
        
        <ImageContainer>
        
        <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">

            {isImageTrue &&
              <button className='Button Image'
                    style={isDragging ? { color: 'red' } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}>
                    Add Profile Picture
                  </button>
            }
            
      
             {imageList.map((image, index) => (
               <>
                <img src={image['data_url']} alt="" width="100%" onClick={() => onImageRemove(index)} />
               
              </>
            ))}
          </div>
        )}
      </ImageUploading>
      
        </ImageContainer>
        </InputContainerTwice>


        <InputContainerTwice>
        <StyledInputTwice required type={"password"} value={password} onChange = {e => setPassword(e.target.value)} placeholder="Enter your password"/>
        <StyledInputTwice required type={"password"} value={confirmPassword} onChange = {e => setConirmPassword(e.target.value)} placeholder="Confirm your password"/>
        </InputContainerTwice>


        <InputContainerSolo>
        <StyledTextArea required type ={"text"} value={address} onChange = {e => setAddress(e.target.value)} placeholder="Enter your address" />
        </InputContainerSolo>

        </BigInputContainer>

        

        <ButtonContainer>
         <StyledButton type='submit' onClick={submitRegister} ButtonTheme = {ButtonTheme} >Register</StyledButton>
        </ButtonContainer>

        <LinkContainer>
        <a href ="/">Already have an account? Sign In</a>
        </LinkContainer>
    </MainContainer>
           
    </BodyContainer>
  )
}

export default Register