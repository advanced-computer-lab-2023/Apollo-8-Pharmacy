import { useState } from "react";
import axios from "axios";

function Patientlogin(){
    {
        const [name, setUsername] = useState();
        const [password, setPassword] = useState();
      
      
        const handleSubmit = (e) => {
          e.preventDefault();

        //  console.log(email);
          axios
            .post(" http://localhost:9000/patient/patientLogin", {
              name,
              password,
            })
            .then((result) => {

              console.log(result.data.token);
              sessionStorage.setItem('token', JSON.stringify(result.data.token));
            
              const data = sessionStorage.getItem('token');
              console.log("asassaas "+data)
              window.location.pathname = '/HomePage';
            })
            .catch((err) => console.log(err));
            
        };
      
        return (
          <div className="d-flex justify-content-center align-itelms-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
              <h2>Patient Login</h2>
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
      
                <button
                  style={{ marginTop: "10px" }}
                  type="submit"
                  className="btn btn-success w-100 rounded-0"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        );
      }
      
      
}

export default Patientlogin;