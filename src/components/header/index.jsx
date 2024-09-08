import {Container, Profile} from "./styles"
import { Input } from "../input"
import { Link } from "react-router-dom"
import {FiSearch} from "react-icons/fi"
export function Header() {
  return (
    <Container>
        <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar Pelo Título" icon={FiSearch} />
      <Link to="/profile">
        <Profile>
          <div>
            <span>Luigi Oliveira</span>
            <strong>sair</strong>
          </div>
          <img src="https://github.com/luigiebo.png" alt="" />
        </Profile>
      </Link>
    </Container>
  )
}