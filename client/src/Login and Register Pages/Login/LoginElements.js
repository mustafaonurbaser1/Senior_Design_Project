import styled from 'styled-components';
import { Link } from "react-router-dom";


export const BodyContainer = styled.div`
width: 100vw;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({theme}) =>theme.bg};

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
color: #000;
text-transform: uppercase;
letter-spacing: 0.4rem;


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
    width: 60vw;
    height: 65vh;   
}
@media only screen and (min-width:1280px) {
    width: 40vw;
    height: 80vh;
    
}
`;


export const WelcomeText = styled.h2`
margin:3rem 0 2rem 0;
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 20%;
width: 100%; 
`


export const ButtonContainer = styled.div`
margin: 1rem 0 2rem 0;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const Register = styled(Link)`
color:black;
letter-spacing:0.2rem;
&:hover{
    color:blue;
    letter-spacing:0.3rem;
    font-size: large;
}

`
export const LoginWith = styled.h5`
margin-top: 5%;

`

export const HorizontalRule = styled.hr`
width:90%;
height: 0.3rem;
border-radius: 0.8rem;
border:none;
margin: 1.5rem 0 1rem 0;
background:linear-gradient(to right, ${props => props.color.hrColor1} 10%, ${props => props.color.hrColor2} 80% );
`


export const IconsContainer = styled.div`
display:flex;
justify-content: space-evenly;
margin: 2rem 0 3rem 0;
width: 80%;
`

export const ForgotPassword =styled.h4`
cursor: pointer;
`
