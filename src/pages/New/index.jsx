import { useState } from "react"
import { Container, Content, Inputs, Marcadores, Buttons} from "./styles"
import { Header } from "../../components/header"
import { Input } from "../../components/input"
import { TextArea } from "../../components/textarea"
import { Button } from "../../components/button"
import {ButtonBlack} from "../../components/buttonblack"
import { NewTag } from "../../components/newtag"
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
export function New() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag () {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }
  function handleRemoveTag (tagDeleted) {
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted))
  }
  return (
    <Container>
      <Header />
      <Content>
        <Link to="/">
          <FiArrowLeft /> Voltar
        </Link>
        <h1>Novo Filme</h1>
        <Inputs>
          <Input placeholder="Título" type="text" />
          <Input placeholder="Nota de 0 a 5" type="number" />
        </Inputs>
        <TextArea placeholder="Observações" />

        <h2>Marcadores</h2>
        <Marcadores>
          {tags.map((tag, index) => (
            <NewTag
              key={String(index)}
              value={tag}
              onclick={() => handleRemoveTag(tag)}
            />
          ))}
          <NewTag
            isNew
            placeholder="Nova Tag"
            onChange={(e) => setNewTag(e.target.value)}
            value={newTag}
            onclick={handleAddTag}
          />
        </Marcadores>
        <Buttons>
          <ButtonBlack title="Excluir Nota" />
          <Button title="Salvar Nota" />
        </Buttons>
      </Content>
    </Container>
  )
}