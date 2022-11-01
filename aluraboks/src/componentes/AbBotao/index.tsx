import React from "react";
import styled from "styled-components";



const BotaoEstilizado = styled.button`
background-color:#EB9B00 ;
padding: 16px 32px;
border: 2px solid #EB9B00;
color:#ffffff;
cursor: pointer;
&:hover{
    background-color:#B87900; 
    border: 2px solid #B87900; 
}
`


export const AbBotao =() => {
    return (
        <BotaoEstilizado>
            Clique aqui!
        </BotaoEstilizado>
    )
}