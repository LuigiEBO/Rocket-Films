import { Container, Form, Avatar } from "./styles"
import { Link } from "react-router-dom"
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi"
import {Input} from "../../components/input"
import { Button } from "../../components/button"
export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/home">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/luigiebo.png" alt="Foto do Usuario" />
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatr" type="file" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha Atual" type="text" icon={FiLock} />
        <Input placeholder="Nova Senha" type="text" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
} 