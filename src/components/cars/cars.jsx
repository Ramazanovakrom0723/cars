import React, { useState } from "react";
import UserModal from "../modal";
import "./cars.css";
import { NavLink } from "react-router-dom";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");

  const openModal = () => {
    setModal(true);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const addCar = (car) => {
    setCars([...cars, car]);
  };

  const deleteCar = (index) => {
    const newCars = cars.filter((_, i) => i !== index);
    setCars(newCars);
  };

  return (
    <>
      <UserModal open={modal} toggle={toggle} addCar={addCar} />
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-10 offset-1">
            <div className="row">
              <div className="col-4">
                <button className="btn btn-success" onClick={openModal}>
                  Add user
                </button>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <table className="table">
            <thead>
              <tr>
                <th>T/R</th>
                <th>Name</th>
                <th>Price</th>
                <th>Year</th>
                <th>Color</th>
                <th>Brand</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cars
                .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
                .map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.year}</td>
                    <td>{item.color}</td>
                    <td>{item.brand}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button className="btn btn-danger" onClick={() => deleteCar(index)}>
                          <i className="fa-regular fa-trash-can"></i>
                        </button>
                        <NavLink to={`/main/single-car/${item.id}`} className="btn btn-primary">
                          <span><i class="fa-solid fa-eye"></i></span>
                        </NavLink>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cars;
