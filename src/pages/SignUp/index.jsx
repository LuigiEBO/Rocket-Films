import {Container, Form, Background} from "./styles"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import {FiUser, FiMail, FiLock} from "react-icons/fi";
export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua Conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar"/>

        <a href="">Voltar para o Login</a>
      </Form>

      <Background/>
    </Container>
  )
}
