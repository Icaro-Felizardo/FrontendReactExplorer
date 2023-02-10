import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from 'react-router-dom'

import {useAuth} from "../../hooks/auth"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn} = useAuth();
   
    function handleSignIn(){
        signIn({ email, password });
    }

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
                onChange = {e => setEmail(e.target.value) }
                />
                <Input 
                placeholder = "Senha"
                type = "password"
                icon = {FiLock}
                onChange = {e => setPassword(e.target.value) }

                />

                <Button title="Entrar" onPress={handleSignIn} />
                <Link to="/criar-conta">Criar Conta</Link>                    
                
            </Form>

            <Background />
        </Container>
    )
}