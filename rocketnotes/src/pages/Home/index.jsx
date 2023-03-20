import { FiPlus, FiSearch } from 'react-icons/fi';
import { Header } from '../../components/Header/index.jsx';
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Note } from '../../components/Note/index.jsx';
import { Input } from '../../components/Input/index.jsx';
import {Container, Brand, Menu, Search, Content, NewNote} from './styles.js';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api.js';

export function Home(){

    const[search, setSearch] = useState("");
    const[tags, setTags] = useState([]);
    const[tagsSelected, setTagsSelected] = useState([]);
    const[notes, setNotes] = useState([]);

    const navigate = useNavigate();

    function handleTagSelected(tagName){
        
        const alredySelected = tagsSelected.includes(tagName);

        if(alredySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName );
            setTagsSelected(filteredTags);
        }else{
            setTagsSelected(prevState => [...prevState, tagName]);
        }

    }

    function handleDetails(id){
        navigate(`/nota/${id}`)
    }

    useEffect(() =>{
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);
        };

        fetchTags();
    },[])

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data);
        }

        fetchNotes();

    },[tagsSelected, search])
    
    return(
        <Container>
            <Brand><h1>Rocket Notes</h1></Brand>

            <Header></Header>

            <Menu>
                <li><ButtonText 
                    title="Todos"
                    onClick={() => setTagsSelected([])}
                    isActive = {tagsSelected.length === 0}
                    />
                </li>
                
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                isActive = {tagsSelected.includes(tag.name)}
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                    placeholder='Pesquisar pelo título' 
                    icon={FiSearch}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title={"Minhas Notas"}>

                    {
                        notes.map(note => 
                            <Note 
                                key={String(note.id)}
                                data={note}   
                                onClick={() => handleDetails(note.id)}                         
                            />
                        )
                    }
                    
                </Section>
            </Content>

            <NewNote to="/nova">
                <FiPlus/>
                Criar Nota
            </NewNote>
        </Container>
    )
}