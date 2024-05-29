import { Outlet } from "react-router-dom"
import Sidebar from "../ui/sidebar/sidebar"
import Header from "../ui/navbar/navbar"
import "./main.css"
const Main = () => {
  return (
    <div className="main_laylout">
        <Sidebar/>
        <div className="main_left">
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default Main
