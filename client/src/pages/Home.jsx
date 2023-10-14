/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handlePharmacistSignup = () => {
    navigate("/registerPharmacist");
  };
  const handlePatientSignup = () => {
    navigate("/registerPatient");
  };
  const handlePatientLogin = () => {
    navigate("/medicinesListPatient");
  };
  const handlePharmacistLogin = () => {
    navigate("/medicinesListPharmacist");
  };
  const handleAdminLogin = () => {
    navigate("/medicinesListAdmin");
  };

  return (
    <div className="d-flex justify-content-center align-itelms-center vh-100 bg-light">
      <div className="card m-3 col-12" style={{ width: "80%" }}>
      <div className="card-body text-center">
        <body>
         <div><button className="btn btn-success m-3 btn-lg"
          onClick={handlePharmacistSignup} >PharmacistSignup</button></div>
         <div><button className="btn btn-success m-3 btn-lg"
          onClick={handlePatientSignup}>PatientSignup</button></div>
         <div><button className="btn btn-success m-3 btn-lg"
          onClick={handleAdminLogin}>AdminLogin</button></div>
         <div><button className="btn btn-success m-3 btn-lg"
          onClick={handlePatientLogin}>PatientLogin</button></div>
         <div><button className="btn btn-success m-3 btn-lg"
          onClick={handlePharmacistLogin}>PharmacistLogin</button></div>
         

</body>
</div>
</div>
</div>
       );
}


export default Home;
