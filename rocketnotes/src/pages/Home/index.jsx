import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/Header/index.jsx'
import { ButtonText } from '../../components/ButtonText/index.jsx'
import { Input } from '../../components/Input/index.jsx'
import {Container, Brand, Menu, Search, Content, NewNote} from './styles.js'

export function Home(){
    return(
        <Container>
            <Brand><h1>Rocket Notes</h1></Brand>

            <Header></Header>

            <Menu>
                <li><ButtonText title="Todos"></ButtonText></li>
                <li><ButtonText title="React"></ButtonText></li>
                <li><ButtonText title="NodeJs"></ButtonText></li>
            </Menu>

            <Search>
                <Input placeholder='Pesquisar pelo título' icon={FiSearch}/>
            </Search>

            <Content></Content>

            <NewNote>
                <FiPlus/>
                Criar Nota
            </NewNote>
        </Container>
    )
}