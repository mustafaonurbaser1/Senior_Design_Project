import React, {useState,useReducer,useEffect}from 'react'
import { Layout } from '../components/Layout'
import { BodyContainer, ImageContainer, MainContainer, WelcomeText, InputContainerSolo, DateContainer, DateAndImageContainer,ButtonContainer,InputContainerMultiple, UsernameDiv, PpasswordDiv, ConfirmDiv, BigInputContainer, PhoneContainer } from './Page Components/SettingsElements';
import { StyledInputSolo } from './Page Components/Components/Input/InputElements'
import {DateSingleInput} from '@datepicker-react/styled'
import { StyledButton } from './Page Components/Components/Button/ButtonElement'
import PhoneInput from 'react-phone-number-input'
import { ThemeProvider } from 'styled-components';
import ImageUploading from 'react-images-uploading'
const Settings = () => {

  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
      setImageTrue(!isImageTrue)
    };

    

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
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [email,setEmail] = useState("")
  const [isImageTrue,setImageTrue] = useState(true)
  const [images,setImages] = useState([])

  const [values,setValues]  = useState({
    username:username,
    password:password,
    birth_day:state.Date,
    image:images,
    phone:phone,
    email:email,
  })

  useEffect(() => {

    setValues({
      username:username,
      password:password,
      birth_day:state.Date,
      image:images,
      phone:phone,
      email:email,
    })

  },[phone,password,state,username,email,images])

  const changeSettings = () => {

  }

  return (
   
    <div style = {{ display:"flex"}}>
      
    <Layout name={"Yusuf"}></Layout>
   
   
    <BodyContainer>
      
      <MainContainer onSubmit={changeSettings}>
        <WelcomeText>Settings</WelcomeText>

        <BigInputContainer>

          <UsernameDiv>
            <StyledInputSolo required value={username} onChange = {e => setUsername(e.target.value)} placeholder={"Change Username"}/>
          </UsernameDiv>

          <PpasswordDiv>
            <StyledInputSolo required value={password} onChange = {e => setPassword(e.target.value)} placeholder={"Change Password"} type={"password"}/>
          </PpasswordDiv>

          <ConfirmDiv>
          <StyledInputSolo required value={confirmPassword} onChange = {e => setConfirmPassword(e.target.value)} placeholder={"Confirm Password"}type={"password"}/>
          </ConfirmDiv>
        

        <InputContainerSolo>
          <StyledInputSolo required value={email} onChange = {e => setEmail(e.target.value)} placeholder={"Enter your new email"} type= {"email"}/>
        </InputContainerSolo>
        
        <PhoneContainer>
        <PhoneInput  placeholder="Enter phone number" value={phone} onChange={setPhone}/>
        </PhoneContainer>

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
                    type = 'button'
                    {...dragProps}>
                    Add Profile Picture
                  </button>
            }
             {imageList.map((image, index) => (
               <>
                <img key={index} src={image['data_url']} alt="" width="100%" height="70%" onClick={() => onImageRemove(index)} style={{marginTop:"10%"}} />
              </>
            ))}
          </div>
        )}
      </ImageUploading>
      
        </ImageContainer>
          
          <ButtonContainer>
            <StyledButton type='submit' ButtonTheme = {ButtonThemeAdd}>Change</StyledButton>
          </ButtonContainer>
        </BigInputContainer>
      </MainContainer>
      
    </BodyContainer>
    
      
    </div>
  )
}

export default Settings