import styled from "styled-components";


export const StyledIcon = styled.div`
height: 3.5rem;
width: 3.5rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 1rem;
color:white;
background: ${(props) => props.background};
cursor: pointer;

svg{
    width: 1.85rem;
    height: 1.85rem;
    
}

&:hover{

        transform: scale(1.2);
        border-radius: 4rem;
}
`