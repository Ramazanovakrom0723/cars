import { useParams } from "react-router-dom"

const SingleCar = () => {
    const {id} = useParams()
  return (
    <div>
      <h1>SingleCar: {id}</h1>
    </div>
  )
}

export default SingleCar
