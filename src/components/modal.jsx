import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const UserModal = ({ open, toggle, addCar }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    year: "",
    color: "",
    brand: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCar(form);
    toggle();
  };

  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h1 className="text-center">Add User</h1>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit} id="submit">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="form-control my-2"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            className="form-control my-2"
            value={form.price}
            onChange={handleChange}
          />
          <input
            type="date"
            placeholder="Year"
            name="year"
            className="form-control my-2"
            value={form.year}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Color"
            name="color"
            className="form-control my-2"
            value={form.color}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Brand"
            name="brand"
            className="form-control my-2"
            value={form.brand}
            onChange={handleChange}
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={toggle}>
          Cancel
        </button>
        <button className="btn btn-success" type="submit" form="submit">
          Save
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
