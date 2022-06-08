import styled from 'styled-components';

export const BodyContainer = styled.div`
width: 100vw;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: white;

`

export const MainContainer = styled.div`
display:flex;
align-items: center;
flex-direction: column;
height: 80vh;
width: 30vw;
background:rgba(255,255,255,0.15);
box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
backdrop-filter: blur(8.5px);
border-radius: 10px;
gap:6rem;
color: #000;
text-transform: uppercase;
letter-spacing: 0.4rem;
overflow-y: scroll;
overflow-x:hidden ;

&::-webkit-scrollbar {
    width: 0.5rem;
   
}
 
&::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
}
 
&::-webkit-scrollbar-thumb {
    background-color: #333333;
    border-radius: 100px;
}

@media only screen and (max-width:320px) {
    width: 70vw;
    height: 60vh;

    hr{
        margin-bottom: 0.3rem;
    }

    h4{
        font-size: small;
    }
    
}

@media only screen and (min-width:360px) {
    width: 70vw;
    height: 60vh;

    h4{
        font-size: small;
    }
}
@media only screen and (min-width:411px) {
    width: 80vw;
    height: 70vh;
}
@media only screen and (min-width:768px) {
    width: 80vw;
    height: 80vh;    
}
@media only screen and (min-width:1024px) {
    width: 80vw;
    height: 80vh;   
}
@media only screen and (min-width:1280px) {
    width: 85vw;
    height: 80vh;
    
}
`;


export const WelcomeText = styled.h2`
margin:3rem 0 0rem 0;
letter-spacing: 0.4rem;
text-transform: uppercase;
padding:3px 5px;
`;

export const InputContainerTwice = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
height: 10%;
width: 100%; 
`
export const InputContainerSolo = styled.div`
display: flex;
justify-content: space-evenly;
height: 10%;
width: 100%; 
`

export const ImageContainer = styled.div`
width: 90%;
height: 100%;
background-color: white;
border:2px solid;
`

export const DateContainer = styled.div`
display: flex;
width: 90%;
justify-content: center;
`


export const ButtonContainer = styled.div`
margin: 2rem 0 5rem 0;
width: 70%;
display: flex;
justify-content: center;
align-items: flex-end;
`

export const LinkContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%; 
height: 10%;
margin-bottom: 10%;
`


