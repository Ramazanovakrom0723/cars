import { Routes, Route } from "react-router-dom"
import Login from "./components/login/login"
import Cars from "./components/cars/cars"
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./components/modal";
const App = () => {
  return (
      <>
      <Routes>
        <Route path="" element={<Login/>}/>
        <Route path="cars" element={<Cars/>}/>
      </Routes>
      </>
  )
}

export default App
