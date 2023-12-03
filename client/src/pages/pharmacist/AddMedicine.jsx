import * as React from "react";
import AppBar from "@mui/material/AppBar";
import "../../App.css";
import { Alert } from "@mui/material";
import ResponsiveAppBar from "../../components/TopBarPharm";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";
import BottomBar from "../../components/BottomBar";
import { useState } from "react";

function AddMedicine() {
  const [medicineName, setMedicineName] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState();
  const [medicineStatus, setMedicineStatus] = useState();
  const [medicinalUse, setMedicinalUse] = useState();
  const [image, setImage] = useState();
  const [message, setMessage] = useState("");

  // to handle the addition of medicine in the DB
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:9000/medicine/addMedicine",
        {
          medicineName,
          price,
          quantity,
          ingredients,
          description,
          medicineStatus,
          sales: "0",
          medicinalUse,
          image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((result) => {
        setMessage("Medicine added successfully!");
        console.log(result);
        clearForm();
      })
      .catch((err) => {
        setMessage("Failed to add medicine. Please try again.");
        console.log(err);
        console.error(err);
      });
  };

  const clearForm = () => {
    // Reset form fields
    setMedicineName("");
    setPrice("");
    setQuantity("");
    setIngredients([]);
    setDescription("");
    setMedicineStatus("");
    setMedicinalUse("");
    setImage("");
  };
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

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
            <AddCircleIcon
              fontSize="large"
              sx={{ color: "white", marginRight: "20px" }}
            />
            Add Medicine{" "}
          </h1>
        </div>
        {showAlert && (
          <Alert
            style={{
              marginTop: "2%",
              fontSize: "18px",
              backgroundColor: " RGB(50, 205, 50)",
              width: "70%",
              marginLeft: "15%",
            }}
            variant="filled"
            severity="success"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            Medicine Added Successfully
          </Alert>
        )}
        <div
          className="card m-3 col-12"
          style={{ width: "80%", borderRadius: "50px", left: "9%" }}
        >
          <div className="card-body" style={{}}>
            {message && (
              <div
                className={`alert ${
                  message.includes("successfully")
                    ? "alert-success"
                    : "alert-danger"
                }`}
              >
                {message}
              </div>
            )}
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="medicineName">
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter medicine name"
                  autoComplete="off"
                  name="medicineName"
                  className="form-control rounded-0"
                  onChange={(e) => setMedicineName(e.target.value)}
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="price">
                    <strong>Price</strong>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter price in L.E."
                    autoComplete="off"
                    name="price"
                    className="form-control rounded-0"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="quantity">
                    <strong>Quantity</strong>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter quantity"
                    autoComplete="off"
                    name="quantity"
                    className="form-control rounded-0"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="description">
                  <strong>Description</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter a brief description of the medicine"
                  autoComplete="off"
                  name="description"
                  className="form-control rounded-0"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="ingredients">
                  <strong>Active Ingredients</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter the active ingredients"
                  autoComplete="off"
                  name="ingredients"
                  className="form-control rounded-0"
                  onChange={(e) => setIngredients(e.target.value)}
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="medicineStatus">
                    <strong>Status</strong>
                  </label>
                  <select
                    name="medicineStatus"
                    className="form-select rounded-0"
                    value={medicineStatus}
                    onChange={(e) => setMedicineStatus(e.target.value)}
                  >
                    <option value="">Choose</option>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="medicinalUse">
                    <strong>Medicinal Use</strong>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter medicinal use"
                    autoComplete="off"
                    name="medicinalUse"
                    className="form-control rounded-0"
                    onChange={(e) => setMedicinalUse(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="customFile">
                  <strong>Medicine Image</strong>
                </label>
                <input
                  type="file"
                  placeholder="Choose file"
                  autoComplete="off"
                  name="path"
                  className="form-control rounded-0"
                  id="customFile"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <button
                onClick={handleButtonClick}
                style={{
                  backgroundColor: "rgb(0,140,990)",
                  width: "10%",
                  borderRadius: "20px",
                }}
                type="submit"
                className="btn btn-success"
              >
                Add
              </button>
            </form>
          </div>
        </div>

        <BottomBar />
      </AppBar>
    </div>
  );
}

export default AddMedicine;