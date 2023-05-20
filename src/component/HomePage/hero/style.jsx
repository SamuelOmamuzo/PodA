import styled from "styled-components"

export const H3 = styled.h3`
    color: #324D6E;
`

export const Details = styled.span`
   font-size: 10px;   
   color: #9f9f9f;
   @media (min-width: 603px) {
        font-size: 12px;
    }

    @media (min-width: 1441px) {
        font-size: 15px;
    }
`

export const Discription = styled.div`
    width: 90%;
   line-height: 13px;
   @media (min-width: 603px) {
        display: flex;
        justify-content: end;
        text-align: end;
        line-height: 15px;
    }

    
    @media (min-width: 768px) {
        text-align: start;
        justify-content: start;
    }

    @media (min-width: 985px) {
        justify-content: end;
        text-align: end;
    }

    @media (min-width: 1441px) {
        line-height: 20px;
    }
`

export const P = styled.p`
   font-size: 10px;
   color: #000000;

   
   @media (min-width: 768px) {
        font-size: 15px;
    }

    @media (min-width: 1441px) {
        font-size:15px;
    }
`

export const H2 = styled.h2`
    font-size: 20px;
    color: #000000;

    
    @media (min-width: 768px) {
        font-size: 30px;
    }

    @media (min-width: 1441px) {
        font-size:40px;
    }
`

export const H1 = styled.h1`
   color: #FFFFFF;
   font-size: 40px;
   @media (min-width: 603px) {
        font-size: 55px;
    }
    
    @media (min-width: 768px) {
        font-size: 80px;
    }

    @media (min-width: 1441px) {
        font-size: 100px;
    }
`

export const Text_holder = styled.div`
    width: 90%;
    padding: 10px;
`

export const Holder = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 603px) {
        flex-direction: unset;
        position: relative;
    }
`

export const Image = styled.img`
    width:250px;
    height:250px; 
    object-fit:fill ;
    @media (min-width: 603px) {
        width: 300px;
        height: 300px;
        position: absolute;
        top: -40%;
        right: 0;
    }

    @media (min-width: 768px) {
        width: 350px;
        height: 350px;
        right: -1%;
    }

    
    @media (min-width: 985px) {
        right: 200px;
    }

    @media (min-width: 1233px) {
        width: 400px;
        height: 400px;
    }

    @media (min-width: 1441px) {
        width: 400px;
        height: 400px;
        top: -40%;
    }
`

export const Wrapper = styled.main`
   width:90%;
   height:85%;
   background-color: #DCDCDC;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
    overflow: hidden;

    @media (min-width: 603px) {
        justify-content: space-around;
        height: 85%;
        overflow: unset;
    }

    @media (min-width: 768px) {
        width: 90%;
        height: 60%;
        overflow: unset;
    }

    @media (min-width: 1233px) {
        width: 70%;
        overflow: unset;
    }

    @media (min-width: 1441px) {
        border-radius:20px;
    }
`

export const Container = styled.section`
   width:100%;
   height: calc(100vh - 60px);
   display: flex;
   justify-content: center;
   align-items: center;

   @media (min-width: 603px) {
        height: calc(80vh - 60px);
    }

    @media (min-width: 768px) {
        height: calc(100vh - 60px);
    }

    @media (min-width: 1441px) {
        height: calc(100vh - 60px);
    }
`