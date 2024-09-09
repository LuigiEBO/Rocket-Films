import {Routes, Route} from "react-router-dom"

import {SignIn} from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"
import {Home} from "../pages/Home"
import { New } from "../pages/New"
import { Profile } from "../pages/Profile"
import { Details } from "../pages/Details"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/cadastrar" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}