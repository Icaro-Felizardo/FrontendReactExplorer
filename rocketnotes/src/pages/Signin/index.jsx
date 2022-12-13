import { Container, Form } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn(){
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links</p>

                <h2>Faça seu Login</h2>

                <Input 
                placeholder = "Email"
                type = "Text"
                icon = {FiMail}
                />
                <Input 
                placeholder = "Senha"
                type = "password"
                icon = {FiLock}
                />

                <Button title={"Entrar"} />
                <a href="#">Criar Conta</a>                    
                
            </Form>
        </Container>
    )
}