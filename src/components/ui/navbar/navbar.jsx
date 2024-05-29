import "./navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="logaut">
        <span><i class="fa-solid fa-arrow-right-from-bracket"></i></span>
      </NavLink>
    </div>
  )
}

export default Navbar
