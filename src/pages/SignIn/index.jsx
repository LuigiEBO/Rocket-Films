import {Container, Form, Background} from "./styles"
import { Input } from "../../components/input"
import { Link } from "react-router-dom"
import { Button } from "../../components/button"
import {FiUser, FiMail, FiLock} from "react-icons/fi";
export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu Login</h2>

        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Link to="/home">
          <Button title="Entrar" />
        </Link>

        <Link to="/cadastrar">Cadastrar</Link>
      </Form>

      <Background />
    </Container>
  )
}
