import { Container, Content, Tags } from "./styles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Header} from "../../components/header"
import { Link } from "react-router-dom";
import { Tag } from "../../components/tags";
import {FiArrowLeft, FiStar, FiClock} from "react-icons/fi";
import placeholderImg from "../../assets/avatar_null.svg"
import { useAuth } from "../../hooks/auth"
import { ButtonBlack } from "../../components/buttonblack"
import { api } from "../../services/api";
export function Details () {
  const navigate = useNavigate()
  const {  user } = useAuth()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : placeholderImg
  const [data, setData] = useState(null)
  const params = useParams()
  function handleBack() {
    navigate(-1)
  }
  async function handleRemoveNote() {
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote(data)
  }, [])
  return (
    <Container>
      <Header />
      {data && (
        <Content>
          <Link to="/">
            <FiArrowLeft /> Voltar
          </Link>
          <h1>
            {data.name}

            <FiStar />
            {data.rating}
          </h1>

          <span>
            <img src={avatarUrl} alt={user.name} /> Por {user.name} <FiClock />{" "}
            {data.created_at}
          </span>
          {data.tags && (
            <Tags>
              {data.tags.map((tag) => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}
            </Tags>
          )}
          <p>{data.description}</p>
          <ButtonBlack title="Excluir Nota" onClick={handleRemoveNote} />
        </Content>
      )}
    </Container>
  )
}