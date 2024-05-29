import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom"
import App from "../App"
import Login from "../components/login/login"
import Cars from "../components/cars/cars"
import SingleCar from "../components/single-car/single-car"
import Main from "../components/main/main"
import Brand from "../components/brand/brand"

const index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
            <Route index element={<Login/>}/>
            <Route path="main/*" element={<Main/>}>
            <Route index element={<Cars/>}/>
            <Route path="single-car/id:" element={<SingleCar/>}/>
            <Route path="brand" element={<Brand/>}/>
            </Route>

            {/* <Route path="Cars" element={<Cars/>}/>
            <Route path="single-car/:id" element={<SingleCar/>}/> */}
            </Route>
        )
    );
  return <RouterProvider router={router}/>
};

export default index
