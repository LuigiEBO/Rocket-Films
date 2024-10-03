import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container, Interact, Content } from "./styles";

import {Header} from "../../components/header"
import { Button } from "../../components/button"
import { Film } from "../../components/film"
import { Link } from "react-router-dom"
import {FiPlus} from "react-icons/fi"
export function Home() {
  const [tags, setTags] = useState();
/* 
  useEffect(() => {
    async function fetchTags() {
    const response = api.get("/tags");
    setTags(response.data)
    }
 fetchTags()
})
*/
  return (
    <Container>
      <Header />
      <Interact>
        <h1>Meus Filmes</h1>
        <Link to="/new">
          <Button title="adicionar filme" icon={FiPlus} />
        </Link>
      </Interact>
      <Content>
        <Film></Film>
        <Film></Film>
        <Film></Film>
        <Film></Film>
      </Content>
    </Container>
  )
}