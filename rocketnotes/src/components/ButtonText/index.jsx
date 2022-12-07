import { Container } from "./style";

export function ButtonText({title, isActive, ...rest}){
    return(
        <Container type = "button" isActive = {isActive = false} {...rest}>
            { title }

        </Container>
    )
}