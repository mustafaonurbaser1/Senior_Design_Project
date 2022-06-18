import styled from 'styled-components';

export const BodyContainer = styled.div`
width: 100vw;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: white;

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

export const HorizontalRule = styled.hr`
width:90%;
height: 1rem;
border-radius: 0.8rem;
border:none;
margin: 1.5rem 0 1rem 0.54rem;
background:black;
`



export const WelcomeText = styled.h2`
margin:3rem 0 0rem 0;
letter-spacing: 0.4rem;
text-transform: uppercase;
padding:3px 5px;
`;

export const BigInputContainer = styled.div`
display: grid;
width: 80%;
height: 100%;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr ;
grid-gap: 1.5rem;

@media only screen and (max-width:1000px){
    width: 80%;
}

@media only screen and (max-width:800px){
    width: 90%;
}
`

export const InputContainerTwice = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
align-items:center ;
`
export const InputContainerSolo = styled.div`
display: flex;
width: 100%; 
align-items:center ;
`

export const ImageContainer = styled.div`
width: 90%;
height: 100%;
background-color: white;

margin-left:1rem;
align-items:center;
justify-content: center;

.Button.Image{
    margin: 10%;
    padding: .5rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 4rem;
    background-color: linear-gradient(to right, );

    &:hover{
        border: 1px solid blue;
        color:blue;
    }
}
`

export const DateContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items:center ;
`


export const ButtonContainer = styled.div`
margin: 1.5rem 0 1.5rem 0;
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


