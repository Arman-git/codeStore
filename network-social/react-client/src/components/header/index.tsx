import React, { useContext } from "react"
import { ThemeContext } from "../theme-provider"
import { Navbar, NavbarBrand } from "@nextui-org/react"

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Network Social</p>
      </NavbarBrand>
    </Navbar>
  )
}
