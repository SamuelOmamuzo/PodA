import {
    Container, Holder, Image, Wrapper,H1, H2, H3 , P, Discription, Details, Text_holder
} from "./style"
import headphone from "../../../asset/headphone.png"
import Button_Props from "../../button/Button";

const Hero = () =>{
    return(
        <Container>
            <Wrapper>
                <Holder>
                    <Text_holder>
                        <P>Beats solo</P>
                        <H2>Wireless</H2>
                        <H1>HEADPHONE</H1>
                        <Button_Props text_color="#FFFFFF" background="#F02D34" text="Shop wireless headphone"/>
                    </Text_holder>
                    <Image src={headphone}/>
                </Holder>
                <Discription>
                    <Details>
                        <H3>Discription</H3>
                        The game begins here. with immortal 1000D <br/>
                        gaming headphones, don't just play the <br/>
                        game - feel it, live it, and own it. level up <br/>
                        your audio game with 7.1 Channel
                    </Details>
                </Discription>
            </Wrapper>
        </Container>
    )
}
export default Hero;