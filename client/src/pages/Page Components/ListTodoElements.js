import styled from 'styled-components'

export const BodyContainer = styled.div`
width: 100%;
height:100vh;
display: flex;
flex-direction: column;
background: ${({theme})=> theme.bg};
overflow-x: hidden;
`

export const PageNumberContainer = styled.div`
width: 60%;
height:2.5rem;
display:flex;
flex-direction: row;
margin: 10vh 0 0 0;
padding-left: 5%;
`


export const ItemsContainer = styled.div`
width:100%;
height:80vh;
display:flex;
flex-direction: row;
justify-content: ${props => props.numofitems === 1 ? "center" : "space-between" };
gap:5%;
margin: 5rem 0 0 0;
padding-left: 5%;
`

export const DescriptionContainer = styled.div`
position: absolute;
bottom: 0%;
right: -144444%;
width: 100%;
padding: 0rem 0rem 0rem 0rem;
height: 44%;
border:1px solid black;
border-radius: 20px;
background: rgba(54,54,48,0.45);
color:${({theme})=> theme.bg};;
overflow-x: hidden;
overflow-y: hidden;
padding-bottom: 0.2rem;

& p{
    text-align: center;
    font-size: 1.1rem;


}

`

export const ItemContainer = styled.div`
position: relative;
display: flex;
background-image: url("https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg");
background-size: cover;
flex-direction: column;
width: ${({numofitems}) =>( numofitems === 1 && "70%") || (numofitems === 2 && "60%") || "30%"};
height: 80%;
text-align: center;
align-items: center;
border:1px solid;
gap: 5px;
border-radius:2rem ;
margin-right: 2rem;
overflow-y: hidden;
overflow-x: hidden;

&:hover{
    box-shadow: 10px 10px 25px 0 ${({importance}) => (importance === "important" && "rgba(174,54,30,0.42)") || (importance === "normal" && "rgba(219,177,26,0.42)") || "rgba(77,168,80,0.42)"};
 
    ${DescriptionContainer} {
        right: 0;
        animation-name:bottom_to_up;
        animation-duration: 6s;
        animation-delay: -5s;
        
    } 

    @keyframes bottom_to_up {
        0% {bottom:-100%}
        25% {bottom:-75%}
        50%{bottom:-50%}
        75%{bottom:-25%}
        95%{bottom:2%}
        100%{bottom:0} 
    }

}
`

export const TitleTodo = styled.h3`
padding: 3%;
margin-top: 5%;
`


export const HorizontalRule = styled.hr`
width:90%;
height: 0.3rem;
border-radius: 0.8rem;
border:none;
margin: 1.5rem 0 1rem 0;
`



export const Date= styled.div`
margin-top:5%;
width: 90%;
height: 10%;
padding:0.54rem 0;
background-color: white;
z-index: 4;
overflow-x: hidden;
overflow-y: hidden;
text-align: center;
justify-content: center;
vertical-align: middle;
align-items:center;
border:1px solid;
border-radius: 20px;

&:p{
    color: white;
}
`
export const ButtonContainer = styled.div`
margin: 5rem 2rem 2rem -0.43rem;
width: 100%;
padding: 0 0 0 1rem;
display: flex;
justify-content: flex-end;
`

