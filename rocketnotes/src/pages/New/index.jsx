import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom'

export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <content>
                    <Form>
                        <header>
                            <h1>Criar Nota</h1>
                            <Link to="/">Voltar</Link>
                        </header>

                        <Input placeholder="Título"/>
                        <Textarea placeholder="Observações"/>

                        <Section title="Links Úteis">
                            <NoteItem value="teste.com.br"/>
                            <NoteItem isNew placeholder="Novo Link"/>

                        </Section>

                        <Section title="Marcagores">

                            <div className="tags">
                                <NoteItem value="React"/>
                                <NoteItem isNew placeholder="Nova Tag"/>
                            </div>
                        </Section>

                        <Button title= "Salvar"/>
                        
                    </Form>
                </content> 
        </main>
        </Container>
    )
}