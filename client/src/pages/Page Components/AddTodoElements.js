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
background:rgba(255,255,255,0.15);
box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
backdrop-filter: blur(8.5px);
border-radius: 10px;
color: ${({theme})=> theme.text};
overflow-y: scroll;

@media only screen and (max-width:320px) {
    width: 70vw;
    height: 60vh;
}
@media only screen and (min-width:360px) {
    width: 70vw;
    height: 60vh;
}
@media only screen and (min-width:411px) {
    width: 60vw;
    height: 55vh;
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


export const InputContainerTwice = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: flex-start;
height: 20%;
width: 100%; 
`
export const InputContainerSolo = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height :20% ;

margin-left: 20px;
`


export const DateContainer = styled.div`
display: flex;
flex-direction: column;
gap:300%;
justify-content: flex-start;
width: 45%;
height: 10%;
margin-left: 2%;
`

export const DateAndImageContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 30%;
margin:0 5%;
`
 

export const ImportanceTodoButtons = styled.div`
display:flex;
width:80%;
gap: 10px;
height: 20%;
margin-top: 10%;
`


export const DateLabel  = styled.label`
`

export const ButtonContainer = styled.div`
margin: 5rem 2rem 2rem 0;
width: 100%;
display: flex;
justify-content: flex-end;

`


