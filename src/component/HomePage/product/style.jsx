import styled from "styled-components";

export const Price = styled.p`
    font-weight: bold;
`

export const P = styled.p`
    font-size: small;
    color: #324D67;
`

export const Image = styled.img`
    width: 100%;
    height: 85%;
    background-color: #EBEBEB;
    border-radius: 10px;
    object-fit: inherit;
`

export const Card = styled.div`
    width: 90%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    margin: 10px;

    @media (min-width:430px) {
        width: 250px;
        height: 280px;
    }
`

export const  Span = styled.span`
    font-size: small;
    color:#324D67;    

`

export const H1 = styled.h1`
    font-size: 20px;
    margin-bottom: 5px;
    color: #324D67;

    @media (min-width:430px) {
        font-size: 35px;
        margin-bottom: 10px;
    }
`

export const Wrapper = styled.div`
    padding-top: 30px;
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
`