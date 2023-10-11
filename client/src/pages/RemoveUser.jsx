// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RemoveUser() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('http://localhost:9000/admin/getUsers')
      .then((response) => {
        console.log('Response:', response.data);
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  const handleDeleteUser = async (username) => {
    try {
      const response = await axios.delete(`http://localhost:9000/admin/removeUser`, {
        data: { username },
      });
      if (response.data && response.data.message === 'The User removed successfully') {
        setUsers((prevUsers) => prevUsers.filter((user) => user.username !== username));
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };



  return (
    <div className="d-flex justify-content-center align-itelms-center vh-100 bg-light">
      <div style={{ marginLeft: "-15%" }} className="sidebar">
        <ul>
          <h2 style={{ fontWeight: "bolder" }}>Admin Page</h2>
          <li style={{ margin: "20px" }}><a href="/addAdministratin">Add Admin</a></li>
          <li style={{ margin: "20px" }}><a href="/removeUser">Remove User</a></li>
          <li style={{ margin: "20px" }}><a href="/pharmacists">List of Pharmacist</a></li>
          <li style={{ margin: "20px" }}><a href="/pharmacistsListPending">List of Pharmacist Pending</a></li>
          <li style={{ margin: "20px" }}><a href="/patients">Patient List</a></li>

        </ul>
      </div>
      <div className="card m-3 col-12" style={{ width: "80%" }}>
        <div className="card-header">
          <h2>Remove User</h2>
        </div>
        <div className="card-body">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table table-striped">
              <thead className="table-dark">
                <tr>
                  <th>
                    username
                  </th>
                  <th>
                    type
                  </th>
                  <th></th>
                </tr>

              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.username}>
                      <td>{user.username}</td>
                      <td>{user.type}</td>
                      <td>
                        <button className="btn btn-success" onClick={() => handleDeleteUser(user.username)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No users found</td>
                  </tr>
                )}


              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default RemoveUser;