import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content, Inputs, Marcadores, Buttons} from "./styles";
import { api } from "../../services/api";
import { Header } from "../../components/header"
import { Input } from "../../components/input"
import { TextArea } from "../../components/textarea"
import { Button } from "../../components/button"
import {ButtonBlack} from "../../components/buttonblack"
import { NewTag } from "../../components/newtag"
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
export function New() {
  const [name, setName] =  useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");


  const navigate = useNavigate();

  function handleAddTag () {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }
  function handleRemoveTag (tagDeleted) {
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted))
  }
  async function handleNewFilm() {
    if (!name) {
      return alert("Não se esqueça de adicionar o título ^_^")
    }
    if (!rating) {
      return alert("Não se esqueça de avaliar o filme ^_^")
    }
    if (newTag) {
      alert("Não se esqueça de adicionar a tag ^_^, você escreveu um texto porém não o adicionou. O adicione ou deixe vazio o campo")
    }
    await api.post("/notes", {
      name,
      description,
      rating,
      tags,
    })
    alert("Nota criada com sucesso");
    navigate("/")
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
          <Input
            placeholder="Título"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Nota de 0 a 5"
            type="number"
            onChange={(e) => setRating(e.target.value)}
          />
        </Inputs>
        <TextArea
          placeholder="Observações"
          onChange={(e) => setDescription(e.target.value)}
        />

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
          <Button title="Salvar Nota" onClick={handleNewFilm}/>
        </Buttons>
      </Content>
    </Container>
  )
}