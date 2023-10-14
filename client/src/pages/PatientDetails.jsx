import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SidebarAdministrator from "./SidebarAdministrator";

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
    <div className="d-flex justify-content-center align-itelms-center vh-100 bg-light">
      <SidebarAdministrator/>
      <div className="card m-3 col-12" style={{ width: "80%" }}>
        <div className="card-header">
          <h2>Patient Details</h2>
        </div>
        <div className="card-body">
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
      </div>
    </div>
  );
}

export default PatientDetails;
