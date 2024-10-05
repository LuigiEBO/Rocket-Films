import { Container, Form, Avatar } from "./styles"
import { useState } from "react"
import { api } from "../../services/api";
import {useAuth} from "../../hooks/auth"
import { Link } from "react-router-dom"
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi"
import placeholderImg from "../../assets/avatar_null.svg"
import {Input} from "../../components/input"
import { Button } from "../../components/button"
export function Profile() {
  const { user, updatedProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setOldPassword] = useState()
  const [passwordNew, setNewPassword] = useState()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderImg
  const [avatar, setAvatar] = useState(avatarUrl )
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
  
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };
    const userUpdated = Object.assign(user, updated)


    await updatedProfile({user: userUpdated, avatarFile});
  }

   function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imgPreview = URL.createObjectURL(file);
    setAvatar(imgPreview)
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
          <img src={avatar} alt="Foto do Usuario" />
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" onChange={handleChangeAvatar}/>
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