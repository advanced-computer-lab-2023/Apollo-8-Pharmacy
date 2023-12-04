import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppBar } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import ResponsiveAppBar from "../../components/TopBarPharm";
import BottomBar from "../../components/BottomBar";
function MedicineSales() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  /*useEffect(() => {
    const apiUrl = "http://localhost:9000/medicine/medicineDetails";
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("Data received:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);*/
    useEffect(() => {
       console.log("Selected Month State:", selectedMonth);
      if (selectedMonth) {
        const apiUrl = `http://localhost:9000/pharmacist/sales/${selectedMonth}`;
        axios
          .get(apiUrl)
          .then((response) => {
            console.log("Data received:", response.data);
            setData(response.data);
          })
          .catch((error) => {
            console.error("Error fetching pharmacist sales:", error);
          });
      }
    }, [selectedMonth]);
  
  return (
    <div style={{ marginRight: "-5%", marginLeft: "-5%" }}>
      <AppBar
        style={{
          height: "100%",
          backgroundColor: "#F0F0F0",
          overflowY: "auto",
        }}
      >
        <ResponsiveAppBar />
        <div
          style={{
            backgroundColor: "rgb(0,140,990)",
            borderRadius: "50px",
            margin: "10px",
            width: "30%",
            marginLeft: "35%",
          }}
        >
          <h1
            style={{
              font: "Arial",
              fontWeight: "bold",
              color: "white",
              margin: "10px",
            }}
          >
            <PaidIcon
              fontSize="large"
              sx={{ color: "white", marginRight: "20px" }}
            />
            Sales Report{" "}
          </h1>
        </div>

        <div
          className="card m-3 col-12"
          style={{ width: "80%", borderRadius: "50px", left: "9%" }}
        >
          <Form>
            <InputGroup className="my-3" style={{ width: "80%" }}>

              <Form.Control
                style={{ color: "black", backgroundColor: "white" }}
                sx={{
                  marginLeft: "-10%",
                  width: 500,
                  maxWidth: "100%",
                  borderRadius: "100px",
                  borderColor: "rgba(0, 140, 990, 0.1)",
                }}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search contacts"
              />
              
            </InputGroup>
          </Form>
          <Form>
            <InputGroup className="my-3" style={{ width: "80%" }}>

              <Form.Control
  style={{ color: "black", backgroundColor: "white" }}
  sx={{
    marginLeft: "-10%",
    width: 500,
    maxWidth: "100%",
    borderRadius: "100px",
    borderColor: "rgba(0, 140, 990, 0.1)",
  }}
  onInput={(e) => {
    const monthValue = parseInt(e.target.value, 10);
    setSelectedMonth(monthValue);
  }}
  placeholder="Search by month"
/>
              
            </InputGroup>
          </Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>TotalSales</th>
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
                    <td>{item.totalSales}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>

        <BottomBar />
      </AppBar>
    </div>
  );
}

export default MedicineSales;
