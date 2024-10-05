import { useState, useEffect } from "react"
import {Container, Profile} from "./styles"
import {useAuth} from "../../hooks/auth"
import { api } from "../../services/api"
import placeholderImg from "../../assets/avatar_null.svg"
import { Link } from "react-router-dom"
export function Header() {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : placeholderImg

    
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Profile>
        <div>
          <Link to="/profile">
            <span>{user.name}</span>
          </Link>
          <strong onClick={signOut}>sair</strong>
        </div>
        <img src={avatarUrl} alt={user.name} />
      </Profile>
    </Container>
  )
}