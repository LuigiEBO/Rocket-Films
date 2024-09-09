import {Routes, Route} from "react-router-dom"

import {Home} from "../pages/Home"
import { New } from "../pages/New"
import { Profile } from "../pages/Profile"
import { Details } from "../pages/Details"

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="https://luigiebo.github.io/Rocket-Films/"
        element={<Home />}
      />
      <Route
        path="https://luigiebo.github.io/Rocket-Films/details"
        element={<Details />}
      />
      <Route
        path="https://luigiebo.github.io/Rocket-Films/new"
        element={<New />}
      />
      <Route
        path="https://luigiebo.github.io/Rocket-Films/profile"
        element={<Profile />}
      />
    </Routes>
  )
}