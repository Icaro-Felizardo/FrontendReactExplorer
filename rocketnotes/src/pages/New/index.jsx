import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";

export function New(){
    return(
        <Container>
            <Header/>
        <contet>
            <Form>
                <header>
                    <h1>Criar Nota</h1>
                    <a href="/">Voltar</a>
                </header>

                <Input placeholder="Título"/>
                <Textarea placeholder="Observações"/>

                <Section title="Links Úteis">
                    <NoteItem value="teste.com.br"/>
                    <NoteItem isNew placeholder="Novo Link"/>

                </Section>
                
            </Form>
        </contet> 
        </Container>
    )
}