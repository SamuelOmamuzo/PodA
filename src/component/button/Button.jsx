import {Button} from "./Style"

const Button_Props = ({text,background,text_color})=>{
    return(
        <Button color={background} text_color={text_color}>{text}</Button>
    )
}
export default Button_Props