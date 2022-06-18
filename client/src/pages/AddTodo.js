import React, {useState,useReducer, useEffect}from 'react'
import { Layout } from '../components/Layout'
import { BodyContainer, MainContainer, WelcomeText,ImageContainer, InputContainerSolo, DateContainer, DateAndImageContainer,ImportanceTodoButtons, ImportanceButton, ButtonContainer, BigInputContainer } from './Page Components/AddTodoElements';
import { StyledInputSolo,StyledTextArea } from './Page Components/Components/Input/InputElements'
import {DateRangeInput} from '@datepicker-react/styled'
import { ImportantButton,NotImportantButton,NormalButton, StyledButton } from './Page Components/Components/Button/ButtonElement'
import { ThemeProvider } from 'styled-components';
import ImageUploading from 'react-images-uploading';

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
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
      setImageTrue(!isImageTrue)
    };

    
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isImageTrue,setImageTrue] = useState(true)
  const [images,setImages] = useState([])
  const [todoTitle, setTodoTitle] = useState("")
  const [importance,setImportance] = useState("important")
  const [explonationOfTodo,setExplanationOfTodo] = useState("")


  const [values,setValues]  = useState({
    title:todoTitle,
    start_date:state.startDate,
    end_date:state.endDate,
    image:images,
    importance:importance,
    explonation_todo:explonationOfTodo
  })

  useEffect(() => {

    setValues({
      title:todoTitle,
      start_date:state.startDate,
      end_date:state.endDate,
      image:images,
      importance:importance,
      explonation_todo:explonationOfTodo
    })

  },[images,state,todoTitle,importance,explonationOfTodo])

  const TodoAdd = () => {
    alert(values)

  }



  return (
    <div style = {{ display:"flex"}}>
      
      <Layout name={"Yusuf"}></Layout>
     
     
      <BodyContainer>
        
        <MainContainer onSubmit={TodoAdd}>
          <WelcomeText>Add Todo</WelcomeText>

        <BigInputContainer>

        
            <StyledInputSolo required value={todoTitle} onChange = {e => setTodoTitle(e.target.value)} placeholder={"Enter Title"}/>


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
            
          </DateAndImageContainer>

          <InputContainerSolo>
            <StyledTextArea required value={explonationOfTodo} onChange = {e => setExplanationOfTodo(e.target.value)} placeholder='Enter your explonation'></StyledTextArea>

          </InputContainerSolo>

          <ImportanceTodoButtons>
            <ImportantButton type='button' onClick={(e)=> setImportance("important")} ButtonTheme = {ButtonThemeImportant}>Important</ImportantButton>
            <NormalButton type='button' onClick={(e)=> setImportance("normal")}  ButtonTheme = {ButtonThemeNormal}>Normal</NormalButton>
            <NotImportantButton type='button' onClick={(e)=> setImportance("not important")}  ButtonTheme = {ButtonThemeNotImportant}>Not Important</NotImportantButton>
            
          </ImportanceTodoButtons>   
           
           <ButtonContainer>
            <StyledButton type='submit' ButtonTheme = {ButtonThemeAdd}>Add Todo</StyledButton>
          </ButtonContainer>
          
          </BigInputContainer>

         
        
        </MainContainer>
        
      </BodyContainer>
      
        
      </div>
  )
}
