import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PharmacistsListPending() {
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
  const handleAccept = async (id) => {
    try {
      const response = await axios.put(`http://localhost:9000/pharmacist/accept/${id}`);
      setData((prevData) =>
        prevData.map((item) =>
          item._id === id ? { ...item, status: response.data.status } : item
        )
      );
    } catch (error) {
      console.error("Error accepting pharmacist:", error);
    }
  };
  const handleReject = async (id) => {
    try {
      const response = await axios.put(`http://localhost:9000/pharmacist/reject/${id}`);
      setData((prevData) =>
        prevData.map((item) =>
          item._id === id ? { ...item, status: response.data.status } : item
        )
      );
    } catch (error) {
      console.error("Error rejecting pharmacist:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-itelms-center vh-100 bg-light">
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
                  <th>status</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.status}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => handleView(item._id)}
                      >
                        view
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => handleAccept(item._id)}
                      >
                        Accept
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => handleReject(item._id)}
                      >
                        Reject
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

export default PharmacistsListPending;
