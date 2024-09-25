import { useState } from "react";
import {Container, Form, Background} from "./styles";
import { Input } from "../../components/input";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import {FiUser, FiMail, FiLock} from "react-icons/fi";
export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {signIn} = useAuth();

  function handleSignIn () {
    signIn({email, password})
  }
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu Login</h2>

        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="">
          <Button title="Entrar" onClick={handleSignIn} />
        </Link>

        <Link to="/cadastrar">Cadastrar</Link>
      </Form>

      <Background />
    </Container>
  )
}
