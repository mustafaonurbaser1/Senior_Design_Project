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

export const MainContainer = styled.form`
display:flex;
align-items: center;
flex-direction: column;
height: 80vh;
width: 30vw;
background:rgba(255,255,255,0.15);
box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
backdrop-filter: blur(8.5px);
border-radius: 10px;
color: #000;
gap:1rem;
text-transform: uppercase;
letter-spacing: 0.4rem;
overflow-y: scroll;
overflow-x:hidden ;
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
    gap:10%;
}
@media only screen and (min-width:360px) {
    width: 65vw;
    height: 60vh;
    gap:10%;
}
@media only screen and (min-width:411px) {
    width: 75vw;
    height: 70vh;
    gap:10%;
}
@media only screen and (min-width:768px) {
    width: 60vw;
    height: 65vh; 
    gap:10%;   
}
@media only screen and (min-width:1024px) {
    width: 60vw;
    height: 70vh; 
    gap:5%;  
}
@media only screen and (min-width:1280px) {
    width: 65vw;
    height: 80vh;
    gap:0%;
 
}
`


export const WelcomeText = styled.h2`
margin:1rem 0 0.5rem 0;
letter-spacing: 0.4rem;
text-transform: uppercase;

color:${({theme})=> theme.text};
`
export const UsernameDiv = styled.div`
width: 100%;
height: 100%;
grid-area: username;
`
export const PpasswordDiv = styled.div`
width: 100%;
height: 100%;
grid-area: password;
`
export const ConfirmDiv = styled.div`
width: 100%;
height: 100%;
grid-area: confirm;
`

export const BigInputContainer = styled.div`
display: grid;
width: 80%;
height: 100%;
margin: 1.5rem 0 1.5rem 0;
grid-template-areas: "username password confirm" 
"solo solo solo"
"phone phone phone"
"date date date"
"image image image"
"button button button";
grid-gap: 2rem;

@media only screen and (max-width:1000px){
    width: 80%;
    grid-template-areas: "username username" 
    "password confirm"
"solo solo " 
"phone phone "
"date date "
"image image"
"button button ";
}

@media only screen and (max-width:600px){
    width: 90%;
    grid-template-areas: "username " 
    "password "
    "confirm"
"solo" 
"phone"
"date "
"image"
"button";
grid-gap: 5rem;
}
`

export const InputContainerSolo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
grid-area: solo;
`

export const ImageContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
grid-area: image;
`


export const DateContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
grid-area: date;


@media only screen and (max-width:800px){
    width: 70%;
}
`

export const PhoneContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
grid-area: phone;


`

export const ButtonContainer = styled.div`
margin: 5rem 2rem 2rem 0;
width: 100%;
display: flex;
grid-area: button;
justify-content: flex-end;
`


