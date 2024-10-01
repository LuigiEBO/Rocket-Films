import { Container, Form, Avatar } from "./styles"
import { useState } from "react"
import {useAuth} from "../../hooks/auth"
import { Link } from "react-router-dom"
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi"
import {Input} from "../../components/input"
import { Button } from "../../components/button"
export function Profile() {
  const { user, updatedProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setOldPassword] = useState()
  const [passwordNew, setNewPassword] = useState()

  async function handleUpdate() {
  
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }


    await updatedProfile({user});
  }

  return (
    <Container>
      <header>
        <Link to="/">
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
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha Atual"
          type="text"
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          placeholder="Nova Senha"
          type="text"
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
} 