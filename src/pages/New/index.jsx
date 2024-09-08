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
          <NewTag value="react" />
          <NewTag isNew placeholder="Nova Tag" />
        </Marcadores>
        <Buttons>
          <ButtonBlack title="Excluir Nota" />
          <Button title="Salvar Nota" />
        </Buttons>
      </Content>
    </Container>
  )
}