import styled from "styled-components";
import {Link} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'


export const Button  = styled(Link)`
border-radius:50px;
background:#4761C2;
white-space:nowrap;

padding:${({big})=> (big ? '14px 48px':'12px 30px')};
color:#fff;
font-size:${({fontBig})=> (fontBig ? '20px':'16px')};
outline:none;
border:none;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    color:white;
    transform: scale(1.1);
    
}
`

export const ButtonMain  = styled(LinkR)`
border-radius:50px;
background:#4761C2;
white-space:nowrap;

padding:${({big})=> (big ? '14px 48px':'12px 30px')};
color:#fff;
font-size:${({fontBig})=> (fontBig ? '20px':'16px')};
outline:none;
border:none;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    color:white;
    transform: scale(1.1);
    
}
`