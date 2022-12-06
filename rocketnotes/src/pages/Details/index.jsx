import { Container, Links, Content } from "./styles.js"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details(){

  return(
    <Container>
      <Header />
      <main>
          <Content>
      
            <ButtonText title="Excluir nota"></ButtonText>

            <h1>Introdução ao React</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad ipsam, consectetur nemo nulla quibusdam! Officiis eos eveniet quo! Provident excepturi similique ducimus veritatis enim assumenda voluptas ipsa sint! Voluptatum!</p>

            <Section title="Lista de itens">
              <Links>
                <li><a href="#">https://app.rocketseat.com.br/node/</a></li>
                <li><a href="#">https://app.rocketseat.com.br/node/</a></li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Tag title="Nodejs"></Tag>
              <Tag title="React"></Tag>
            </Section>

            <Button title="Voltar" />
          </Content>
      </main>
    </Container>
  )
}