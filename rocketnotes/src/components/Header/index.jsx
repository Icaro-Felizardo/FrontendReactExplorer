import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'


export function Header(){
    return(
    <Container>
        <Profile>
            <img src="https://github.com/Icaro-Felizardo.png" alt="" />
            <div>
                <span>Bem vindo,</span>
                <strong>Icaro Felizardo</strong>
            </div>            
        </Profile>

        <Logout>
            <RiShutDownLine />
        </Logout>
    </Container>
    );
}