import styled from 'styled-components'

export const BodyContainer = styled.div`
width: 100vw;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background: ${({theme})=> theme.bg};
`

export const MainContainer = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
text-align: center;
justify-content: space-evenly;
height: 90vh;
width: 50vw;
background:${({theme})=> theme.b3};
box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
backdrop-filter: blur(8.5px);
border-radius: 10px;
color: ${({theme})=> theme.text};
overflow-y: scroll;

&::-webkit-scrollbar {
    width: 0.5rem;
   
}
 
&::-webkit-scrollbar-track {
    background-color: ${({theme})=> theme.bg};
    border-radius: 100px;
}
 
&::-webkit-scrollbar-thumb {
    background-color: ${({theme})=> theme.scroll};
    border-radius: 100px;
}

@media only screen and (max-width:320px) {
    width: 70vw;
    height: 60vh;
}
@media only screen and (min-width:360px) {
    width: 65vw;
    height: 60vh;
}
@media only screen and (min-width:411px) {
    width: 75vw;
    height: 70vh;
}
@media only screen and (min-width:768px) {
    width: 60vw;
    height: 65vh;    
}
@media only screen and (min-width:1024px) {
    width: 60vw;
    height: 65vh;   
}
@media only screen and (min-width:1280px) {
    width: 65vw;
    height: 70vh;
 
}
`

export const WelcomeText = styled.h2`
margin:1rem 0 0.5rem 0;
height: 10%;
letter-spacing: 0.4rem;
text-transform: uppercase;
padding:3px 5px;
color:${({theme})=> theme.text};
`

export const InputContainerSolo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
height :15%;
margin-left: 0%;
padding: 1rem;
`


export const DateContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
height :15%;
margin-left: 0%;
padding: 1rem;
`

export const DateAndImageContainer = styled.div`
display: flex;
flex-direction: column;
width: 93.5%;
height: 30%;
margin:0 5%;
`
 
export const ImportanceTodoButtons = styled.div`
display:flex;
flex-direction: row;
gap: 10px;
width:93.5%;
height: 20%;
justify-content: space-evenly;
margin-top: 10%;
`


export const DateLabel  = styled.label`
`

export const ButtonContainer = styled.div`
margin: 1rem 2rem 2rem 0;
width: 100%;
display: flex;
justify-content: flex-end;

`


