import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function MedicineSales() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [medicinalUse, setMedicinalUse] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(medicinalUse);
    const apiUrl = `http://localhost:9000/medicine/filter?medicinalUse=${medicinalUse}`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("Data received:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [medicinalUse]);

  useEffect(() => {
    const apiUrl = "http://localhost:9000/medicine/listMedicines";
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("Data received:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function handleEdit(id) {
    // Navigate to another route and pass the ID as a prop
    navigate(`/medicinesList/${id}`);
  }

  return (
    
    <div style={{}}>

      <Container>
  
        
        <h1 className="text-center mt-4">List of Medicines</h1>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search contacts"
            />
          </InputGroup>
          <InputGroup className="my-3">
            <select
              className="form-select"
              onChange={(e) => setMedicinalUse(e.target.value)}
            >
              <option value="">Choose Medicinal Use</option>
              <option value="diarrhea">diarrhea</option>
              <option value="vomit">vomit</option>
            </select>
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Ingredients</th>
              <th>Description</th>
              <th>Status</th>
              <th>Use</th>
              <th>Quantity</th>
              <th>Image</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.medicineName.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.medicineName}</td>
                  <td>{item.price}</td>
                  <td>{item.ingredients}</td>
                  <td>{item.description}</td>
                  <td>{item.medicineStatus}</td>
                  <td>{item.medicinalUse}</td>
                  <td>{item.quantity}</td>
                  <td>{item.path}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => handleEdit(item._id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default MedicineSales;
