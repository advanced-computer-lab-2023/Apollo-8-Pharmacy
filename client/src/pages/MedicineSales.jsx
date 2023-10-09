import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function MedicineSales() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
        const apiUrl = "http://localhost:9000/medicine/medicineDetails";
        axios
            .get(apiUrl)
            .then((response) => {
                console.log('Data received:', response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    },[]);


    return (
        <div>
          <Container>
            <h1 className='text-center mt-4'>Sales & Quantity</h1>
            <Form>
              <InputGroup className='my-3'>
    
                {/* onChange for search */}
                <Form.Control
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Search contacts'
                />
              </InputGroup>
            </Form>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Medicine Name</th>
                  <th>Quantity</th>
                  <th>Sales</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((item) => {
                    return search.toLowerCase() === ''
                      ? item
                      : item.medicineName.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <tr key={index}>
                      <td>{item.medicineName}</td>
                      <td>{item.quantity}</td>
                      <td>{item.sales}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Container>
        </div>
      );
}

export default MedicineSales;
