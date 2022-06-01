import styled from "styled-components";


export const StyledButton = styled.button`
background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 65%;
height: 3rem;
border: none;
color:white;
border-radius: 2rem;
cursor: pointer;
&:hover{
  animation-name: change;
  animation-duration: 0.63s;
  animation-iteration-count: infinite;
    
}
@keyframes change {
 0%   { background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 24%   { background: linear-gradient(to right ,${props => props.ButtonTheme.buttonColorSecond} 10% ,${props => props.ButtonTheme.buttonColorFirst} 50%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 48% {   background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorSecond} 20%,${props => props.ButtonTheme.buttonColorFirst} 110%);}
 73%   { background: linear-gradient(to right ,${props => props.ButtonTheme.buttonColorSecond} 10% ,${props => props.ButtonTheme.buttonColorFirst} 50%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 100%   { background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
      
}
`