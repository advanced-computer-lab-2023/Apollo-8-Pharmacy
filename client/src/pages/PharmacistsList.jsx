import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import SidebarAdministrator from "./SidebarAdministrator";


function PharmacistsList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = "http://localhost:9000/pharmacist";
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

  function handleView(id) {
    // Navigate to another route and pass the ID as a prop
    navigate(`/pharmacists/${id}`);
  }

  return (

    <div className="d-flex justify-content-center align-itelms-center vh-100 bg-light">
      <SidebarAdministrator />
      <div className="card m-3 col-12" style={{ width: "80%" }}>
        <div className="card-header">
          <h2>Pharmacists</h2>
        </div>
        <div className="card-body">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => handleView(item._id)}
                      >
                        view
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default PharmacistsList;
