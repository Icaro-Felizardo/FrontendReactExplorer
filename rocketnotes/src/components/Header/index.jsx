import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from "../../hooks/auth";


export function Header(){
    const { signOut } = useAuth();

    return(
    <Container>
        <Profile to="/perfil">
            <img src="https://github.com/Icaro-Felizardo.png" alt="" />
            <div>
                <span>Bem vindo,</span>
                <strong>Icaro Felizardo</strong>
            </div>            
        </Profile>

        <Logout onClick={signOut}>
            <RiShutDownLine />
        </Logout>
    </Container>
    );
}