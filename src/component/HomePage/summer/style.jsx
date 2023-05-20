import styled from "styled-components";

export const Div = styled.div`
    width: 300px;
    height: 300px;
    object-fit: inherit;
    @media (min-width: 908px) {
        position: relative;
        width: 350px;
        height: 350px;

        animation-name: myHeadphone;
        animation-duration: 3s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
    }
`

export const P2 = styled.p`
   font-size: 10px;

   
   @media (min-width: 768px) {
        font-size: 15px;
    }

    /* @media (min-width: 1441px) {
        font-size:15px;
    } */
`

export const H2 = styled.h2`
    font-size: 10px;
    font-weight: 20;
    width: 80%;

    
    @media (min-width: 768px) {
        font-size: 15px;
    }
/* 
    @media (min-width: 1441px) {
        font-size:40px;
    } */
`

export const H = styled.h1`
   color: #fff;
   font-size: 40px;
   margin: 10px 0px 10px 0px;

   @media (min-width: 603px) {
        font-size: 40px;
    }
    
    @media (min-width: 768px) {
        font-size: 49px;
    }

    @media (min-width: 908px) {
        font-size: 49px;
    }

    /* @media (min-width: 1441px) {
        font-size: 100px;
    } */
`

export const Text_holder = styled.div`
    /* width: 100%; */
`

export const Holder2 = styled.div`
    width:100%;

    @media (min-width: 908px) {
        width: 300px;

    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: inherit;

    @media (min-width: 908px) {
        position: absolute;
        bottom: 20px;

        @keyframes myHeadphone {
            from {
                bottom:20px ;
            }
            to{
                bottom: 60px;
            }
        }
    }
`

export const H1 = styled.h1`
    font-size: 40px;    
    margin: 10px 0px 10px 0px;
    /* background-color: royalblue; */
`

export const P = styled.p`
font-size: 13px;
`

export const Holder = styled.div`
    width: 100%;
    /* background-color: white; */

    
    @media (min-width: 908px) {
        width: fit-content;

    }
`

export const Wrapper = styled.main`
    width:90%;
    height:90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* background-color: grey; */
    color:#fff;

    @media (min-width: 908px) {
        flex-direction: unset;
        /* background-color: aliceblue; */
        justify-content: space-around;
        background-color: #F02D34;
        height: 55%;
        width: 70%;
        position: relative;
        border-radius: 10px;
        padding: 30px 0px 0px 30px;

    }

`

export const Container = styled.section`
    background-color: red;
    height: 100vh;
    width:100%;
    display: flex;
    justify-content: center;
    /* padding-top:30px; */
    align-items: center;

    @media (min-width: 908px) {
        flex-direction: unset;
        height: 80vh;
        background-color: #fff;

    }

`