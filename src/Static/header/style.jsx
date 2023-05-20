import styled from "styled-components";

export const Text = styled.h2`
    width:20px;
    height: 20px;
    background-color: red;
    position: absolute;
    top:2px;
    right: 0;
    z-index: 1;
    border-radius: 50%;
    color: white;
    font-size: 12px;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const Icon = styled.div`
    height: 70%;
    width:80%;
    background-color: lightgray;
`

export const Icon_Holder = styled.div`
    width:30px;
    height: 40px;
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const H1 = styled.h1`
    font-weight: 100;
    color: #A49289;
`

export const Wrapper = styled.section`
    width:90%;
    height:90%;
    display:flex;
    justify-content:space-between;
    align-items: center;
`

export const Container = styled.header`
    width:100%;
    height:60px;
    background-color: #ffffff;
    display:flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    z-index: 1000;
    top:0;
`