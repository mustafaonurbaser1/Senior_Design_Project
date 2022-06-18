import styled from "styled-components"

export const StyledInputTwice = styled.input`
background: rgba(255,255,255,0.15);
border-radius: 2rem;
box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
width: 45%;
height: 3rem;
padding: 1rem;
border: none;
outline:none;
color:#000;
font-size: 1rem;
font-weight: bold;
&:focus{
    color:#3c354e;
    display:inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0 ;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
}
&::placeholder{
    color:#000;
    font-weight: 100;
    font-size: 1rem;
}
`

export const StyledInputSolo = styled.input`
background: rgba(255,255,255,0.15);
border-radius: 2rem;
box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
width: 100%;
height: 3rem;
padding: 1rem;
border: none;
outline:none;
color:#000;
font-size: 1rem;
font-weight: bold;
&:focus{
    color:#3c354e;
    display:inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0 ;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
}
&::placeholder{
    color:#000;
    font-weight: 100;
    font-size: 1rem;
}
`


export const StyledTextArea  =  styled.textarea`
background: rgba(255,255,255,0.15);
border-radius: 2rem;
box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
width: 100%;
height: 100%;
padding: 1rem;
border: none;
outline:none;
color:#000;
font-size: 1rem;
font-weight: bold;
resize:none;

&:focus{
    color:#3c354e;
    display:inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0 ;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
}
&::placeholder{
    color:#000;
    font-weight: 100;
    font-size: 1rem;
}

&::-webkit-scrollbar {
  display: none;
}


`