import {
    Container, Div, H, H1, H2, Holder, Holder2, Image, P, P2, Text_holder, Wrapper
} from "./style"
import White_headphone from "../../../asset/White_headphone.png"
import Button_Props from "../../button/Button"

const Summer = () =>{
    return(
        <Container>
            <Wrapper>
                <Holder>
                    <P>20% OFF</P>
                    <H1>FINE <br/>SMILE</H1>
                    <P>15 Nov to 7 dec</P>
                </Holder>
                <Div>
                    <Image src={White_headphone}/>
                </Div>
                <Holder2>
                    <Text_holder>
                        <P2>Beats Solo Air</P2>
                        <H>Summer Sale</H>
                        <H2>Company that's grown from 270 to 480 employees in the last 12 months.</H2>
                        <Button_Props color="#fff" text_color="#F02D34" text="Shop Now"/>
                    </Text_holder>
                </Holder2>
            </Wrapper>
        </Container>
    )
}

export default Summer;