import "./sidebar.css"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <NavLink to="/main" className="nav_link">
            Cars
        </NavLink>
        <NavLink to="/main/brand" className="nav_link" >
            Brand
        </NavLink>
    </div>
  )
}

export default Sidebar
