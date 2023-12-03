import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import "../../App.css";
import ResponsiveAppBar from "../../components/TopBarAdmin";
import BottomBar from "../../components/BottomBar";

function PatientDetails() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const apiUrl = "http://localhost:9000/patient/" + id;
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

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
            backgroundColor: "rgb(0,140,990",
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
            Patient Details
          </h1>
        </div>
        <div
          className="card-body"
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "20px",
            width: "40%",
            border: "solid black",
            marginLeft: "30%",
            marginTop: "3%",
          }}
        >
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              <li>name: {data.name}</li>
              <li>email: {data.email}</li>
              <li>birthDate: {data.birthDate}</li>
              <li>gender: {data.gender}</li>
              <li>phone: {data.phone}</li>
              <li>emergencyName: {data.emergencyName}</li>
              <li>emergencyNo: {data.emergencyNo}</li>
              <li>emergencyRel: {data.emergencyRel}</li>
              <li>status: {data.status}</li>
            </ul>
          )}
        </div>
        <BottomBar />
      </AppBar>
    </div>
  );
}

export default PatientDetails;