import styled from 'styled-components';

export const BodyContainer = styled.div`
width: 100vw;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: black;

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
color: #ffffff;

overflow-y: scroll;
@media only screen and (max-width:320px) {
    width: 80vw;
    height: 90vh;
}
@media only screen and (min-width:360px) {
    width: 80vw;
    height: 90vh;
}
@media only screen and (min-width:411px) {
    width: 80vw;
    height: 90vh;
}
@media only screen and (min-width:768px) {
    width: 80vw;
    height: 80vh;    
}
@media only screen and (min-width:1024px) {
    width: 80vw;
    height: 90vh;   
}
@media only screen and (min-width:1280px) {
    width: 80vw;
    height: 90vh;
    
}
`;


export const WelcomeText = styled.h2`
margin:3rem 0 2rem 0;
letter-spacing: 0.4rem;
text-transform: uppercase;
`;

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
height: 20%;
width: 100%; 
margin-left: 20px;
`


export const DateContainer = styled.div`
display: flex;
justify-content: flex-start;
width: 100%;
height: 20%;
margin-left: 2%;

`

export const DateLabel  = styled.label`
`

export const ButtonContainer = styled.div`
margin: 2rem 0 5rem 0;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
`

export const LinkContainer = styled.div`
display: flex;
margin-top: -50px;
flex-direction: row;
justify-content: space-evenly;
align-items: flex-start;
width: 100%; 
height: 10%;
`


