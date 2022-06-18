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
margin:3rem 0 0rem 0;
letter-spacing: 0.4rem;
text-transform: uppercase;
padding:3px 5px;
letter-spacing: 0.4rem;
text-transform: uppercase;
color:${({theme})=> theme.text};
`


export const BigInputContainer = styled.div`
display: grid;
width: 80%;
height: 100%;
margin: 4rem 0 10rem 0;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
grid-gap: 2rem;

@media only screen and (max-width:1000px){
    width: 80%;
}

@media only screen and (max-width:800px){
    width: 90%;
}
`

export const InputContainerSolo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
height:100%;
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
height: 100%;
margin:0 5%;
`

export const ImageContainer = styled.div`
width: 90%;
height: 100%;
margin-top: 1.4rem;
margin-left:1rem;
align-items:center;
justify-content: center;

.Button.Image{
    margin: 10%;
    padding: .5rem;
    text-align: center;
    justify-content: center;
    background-color: ${({theme}) => theme.bg2};
    align-items: center;
    border: 1px solid;
    border-radius: 4rem;
    background-color: linear-gradient(to right, );
    color: ${({theme}) => theme.item};
    &:hover{
        border: 1px solid blue;
        color: ${({theme}) => theme.primary};
    }
}
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

export const ButtonContainer = styled.div`
width: 100%;
margin-top: 10%;
margin-bottom: 10%;

`


