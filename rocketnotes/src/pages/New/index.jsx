import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useState } from "react";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function New(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted));

    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => [...prevState.filter(tag => tag !== deleted)])
    }

    async function handleNewNote(){

        if(!title){
            return alert("Digite o título da nota.");
        }

        if(newLink){
            return alert("Você escreveu um Link, mas não clicou para adicionar. Clique no + para adicionar ele antes de salvar ou apague o campo.")
        }

        if(newTag){
            return alert("Você escreveu uma tag, mas não clicou para adicionar. Clique no + para adicionar ela antes de salvar ou apague o campo.")
        } 

        await api.post("/notes", {
            title,
            description,
            tags,
            links
        });

        alert("Nota criada com sucesso");
        navigate(-1);
    }

    function handleBack(){
        navigate(-1);
    }

    return(
        <Container>
            <Header/>
            <main>
                <content>
                    <Form>
                        <header>
                            <h1>Criar Nota</h1>
                            <ButtonText title={"Voltar"} onClick={handleBack}/>
                        </header>

                        <Input 
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Textarea 
                            placeholder="Observações"
                            onChange={e => setDescription(e.target.value)}    
                        />

                        <Section title="Links Úteis">

                            {links.map((link, index) => (
                                <NoteItem
                                key={String(index)}
                                value={link}
                                onClick={() => {handleRemoveLink(link)}}
                                />
                            ))}

                            <NoteItem 
                            isNew 
                            placeholder="Novo Link"
                            value={newLink}
                            onChange={e=> setNewLink(e.target.value)}
                            onClick={handleAddLink}
                            />

                        </Section>

                        <Section title="Marcagores">

                            <div className="tags">

                                {
                                    tags.map((tag, index) => (
                                        <NoteItem
                                            key={String(index)}
                                            value={tag}
                                            onClick = {() => {handleRemoveTag(tag)}}
                                        />
                                    ))
                                }
                                <NoteItem 
                                    isNew 
                                    placeholder="Nova Tag"
                                    onChange={e => setNewTag(e.target.value)}
                                    value={newTag}
                                    onClick={handleAddTag}
                                    />
                            </div>
                        </Section>

                        <Button 
                            title= "Salvar"
                            onPress= {handleNewNote}
                            />
                        
                    </Form>
                </content> 
        </main>
        </Container>
    )
}