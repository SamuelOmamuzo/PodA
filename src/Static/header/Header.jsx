import { 
    Container,
    Wrapper,
    H1,
    Icon_Holder,
    Icon,
    Text
} from "./style"

const Header = () =>{
    return (
        <Container>
            <Wrapper>
                <H1>
                    PHANOX
                </H1>
                <Icon_Holder>
                    <Text>20</Text>
                    <Icon/>
                </Icon_Holder>
            </Wrapper>
        </Container>
    )
}
export default Header;