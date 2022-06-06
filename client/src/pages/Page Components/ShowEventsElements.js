import styled from 'styled-components'

export const BodyContainer = styled.div`
width: 100%;
height:100vh;
display: flex;
flex-direction: column;
background: ${({theme})=> theme.bg};

`

export const PageNumberContainer = styled.div`
width: inherit;
height:2.5rem;
display:flex;
flex-direction: row;
margin: 10vh 0 0 0;
padding-left: 5%;
`


export const ItemsContainer = styled.div`
width:100%;
height:80vh;
display:flex;
flex-direction: row;
justify-content: space-content;
gap:10%;
margin: 1.5rem 0 0 0;
padding-left: 5%;
`

export const ItemContainer = styled.div`
display: flex;
flex-direction: column;
width: 30%;
height: 100%;
text-align: center;
align-items: center;
border:2px solid;
gap: 5px;
margin-right: 2rem;
`

export const TitleTodo = styled.h3`
padding: 5%;
`

export const Importance = styled.div`
width: 10%;
height: 10%;
border-radius: 100%;
background:red;
justify-content: center;
align-items: center;
`

export const HorizontalRule = styled.hr`
width:90%;
height: 0.3rem;
border-radius: 0.8rem;
border:none;
margin: 1.5rem 0 1rem 0;
`

export const ImageContainer = styled.div`
width: 90%;
height: 50%;
padding:3%;
background-color: white;
border:2px solid;
`


export const DescriptionContainer = styled.div`
width: 90%;
height: 20%;
padding:3%;
background-color: white;
overflow-x: hidden;
overflow-y: hidden;
border:2px solid;
`

export const Date= styled.div`
margin-top:5%;
width: 90%;
height: 5%;
padding:0.4rem;
background-color: white;
overflow-x: hidden;
overflow-y: hidden;
text-align: center;
justify-content: center;
vertical-align: middle;
align-items:center;
border:2px solid;
`
export const ButtonContainer = styled.div`
margin: 5rem 2rem 2rem 0;
width: 100%;
display: flex;
justify-content: flex-end;
`