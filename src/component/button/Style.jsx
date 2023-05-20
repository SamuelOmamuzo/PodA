import styled from "styled-components"

export const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: ${(color)=>color.color};
    color: ${(text_color)=>text_color.text_color};
    font-weight:bold;
    transform: scale(1);
    transition: all 550ms;
    margin-top: 10px;

    :hover{
        cursor: pointer;
        transform: scale(1.1);
    }

    @media (min-width: 2560px) {
        font-size:20px;
        margin-top: 0;
        padding: 20px;
    }
`