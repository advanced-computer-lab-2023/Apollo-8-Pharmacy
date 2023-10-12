// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

function AddAdmin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/admin/addAdministrator", {
        username,
        password,
        type: "Admin",
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
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
        <h2>add Administrator</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              autoComplete="off"
              name="username"
              className="form-control rounded-0"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddAdmin;