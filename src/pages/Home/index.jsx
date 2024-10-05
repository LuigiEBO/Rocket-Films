import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container, Interact, Content } from "./styles";
import {Header} from "../../components/header"
import { Button } from "../../components/button"
import { Film } from "../../components/film"
import { Link } from "react-router-dom"
import { Input } from "../../components/input"
import {FiPlus} from "react-icons/fi"
import { FiSearch } from "react-icons/fi"
export function Home() {
  const [tags, setTags] = useState([])
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])
  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data)
    }
    fetchTags()
  }, []);
  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?name=${search}&tags=${tags}`) ;
      setNotes(response.data)
    }
    fetchNotes()
  }, [search, tags])
  return (
    <Container>
      <Header />
      <Interact>
        <h1>Meus Filmes</h1>
        <Input
          placeholder="Pesquisar Pelo Título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/new">
          <Button title="adicionar filme" icon={FiPlus} />
        </Link>
      </Interact>
      <Content>
        {notes.map((note) => (
          <Film
          key={String(note.id)}
          data={note}
          />
        ))}
      </Content>
    </Container>
  )
}