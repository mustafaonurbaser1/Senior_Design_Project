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
justify-content: center;
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
    height: 60vh;
 
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


export const InputContainerMultiple = styled.div`
display: grid;
flex-direction: row;
grid-template-areas: "username password confirm";
height:10%;
width: 100%; 
padding: 1rem;
row-gap:30%;
column-gap: 0.5rem;
margin:0 2% 0 2%;
@media only screen and (max-width:800px) {
    height: 20%;
    grid-template-areas: "username username username username" "password password confirm confirm";
    
}
`
export const InputContainerSolo = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height :15% ;
padding: 1rem;
margin-left: 20px;
margin-top: 5%;
`


export const DateContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 45%;
height: 5%;
margin-left: 2%;

@media only screen and (max-width:800px){
    width: 70%;
}

`

export const DateAndImageContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 5%;
margin:0 5%;
`

export const ButtonContainer = styled.div`
margin: 5rem 2rem 2rem 0;
width: 100%;
display: flex;
justify-content: flex-end;
`


