import styled from "styled-components";


export const StyledButton = styled.button`
background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 30%;
height: 3rem;
border: none;
color:white;
border-radius: 2rem;
cursor: pointer;
&:hover{
  animation-name: change0;
  animation-duration: 0.63s;
  transform: scale(1.1);
  animation-iteration-count: infinite;
    
}
@keyframes change0{
 0%   { background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 24%   { background: linear-gradient(to right ,${props => props.ButtonTheme.buttonColorSecond} 10% ,${props => props.ButtonTheme.buttonColorFirst} 50%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 48% {   background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorSecond} 20%,${props => props.ButtonTheme.buttonColorFirst} 110%);}
 73%   { background: linear-gradient(to right ,${props => props.ButtonTheme.buttonColorSecond} 10% ,${props => props.ButtonTheme.buttonColorFirst} 50%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 100%   { background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
      
}
`

export const ImportantButton = styled.button`
width: 100%;
height: 30%;
border:none;
background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);
&:hover{
  animation-name: change1;
  animation-duration: 0.63s;
  transform: scale(1.1);
  animation-iteration-count: infinite;
    
}
@keyframes change1 {
 0%   { background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 24%   { background: linear-gradient(to right ,${props => props.ButtonTheme.buttonColorSecond} 10% ,${props => props.ButtonTheme.buttonColorFirst} 50%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 48% {   background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorSecond} 20%,${props => props.ButtonTheme.buttonColorFirst} 110%);}
 73%   { background: linear-gradient(to right ,${props => props.ButtonTheme.buttonColorSecond} 10% ,${props => props.ButtonTheme.buttonColorFirst} 50%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 100%   { background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
      
}
`
export const NormalButton = styled.button`
width: 100%;
height: 30%;
border: none;

background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);
&:hover{
  animation-name: change2;
  animation-duration: 0.63s;
  transform: scale(1.1);
  animation-iteration-count: infinite;
    
}
@keyframes change2 {
 0%   { background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 24%   { background: linear-gradient(to right ,${props => props.ButtonTheme.buttonColorSecond} 10% ,${props => props.ButtonTheme.buttonColorFirst} 50%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 48% {   background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorSecond} 20%,${props => props.ButtonTheme.buttonColorFirst} 110%);}
 73%   { background: linear-gradient(to right ,${props => props.ButtonTheme.buttonColorSecond} 10% ,${props => props.ButtonTheme.buttonColorFirst} 50%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 100%   { background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
      
}
`

export const NotImportantButton = styled.button`
width: 100%;
height: 30%;
border: none;
background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);
&:hover{
  animation-name: change3;
  animation-duration: 0.63s;
  transform: scale(1.1);
  animation-iteration-count: infinite;
    
}

@keyframes change3 {
 0%   { background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 24%   { background: linear-gradient(to right ,${props => props.ButtonTheme.buttonColorSecond} 10% ,${props => props.ButtonTheme.buttonColorFirst} 50%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 48% {   background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorSecond} 20%,${props => props.ButtonTheme.buttonColorFirst} 110%);}
 73%   { background: linear-gradient(to right ,${props => props.ButtonTheme.buttonColorSecond} 10% ,${props => props.ButtonTheme.buttonColorFirst} 50%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 100%   { background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
      
}
`

export const StyledButtonDelete = styled.button`
background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 30%;
height: 3rem;
border: none;
color:white;
border-radius: 2rem;
cursor: pointer;
&:hover{
  animation-name: changeDelete;
  animation-duration: 0.63s;
  transform: scale(1.1);
  animation-iteration-count: infinite;
    
}
@keyframes changeDelete{
 0%   { background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 24%   { background: linear-gradient(to right ,${props => props.ButtonTheme.buttonColorSecond} 10% ,${props => props.ButtonTheme.buttonColorFirst} 50%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 48% {   background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorSecond} 20%,${props => props.ButtonTheme.buttonColorFirst} 110%);}
 73%   { background: linear-gradient(to right ,${props => props.ButtonTheme.buttonColorSecond} 10% ,${props => props.ButtonTheme.buttonColorFirst} 50%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
 100%   { background: linear-gradient(to right , ${props => props.ButtonTheme.buttonColorFirst} 10%,${props => props.ButtonTheme.buttonColorSecond} 90%);}
      
}
`