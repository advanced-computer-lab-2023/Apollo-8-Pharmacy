import React from "react";
import { useState } from "react";
import axios from "axios";


function AddMedicine() {

    const [medicineName, setMedicineName] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [ingredients, setIngredients] = useState([]);
    const [description, setDescription] = useState();
    const [medicineStatus, setMedicineStatus] = useState();
    const [medicinalUse, setMedicinalUse] = useState();
    const [path, setPath] = useState();
    const [message, setMessage] = useState("");

    // to handle the addition of medicine in the DB
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:9000/medicine/addMedicine", {
                medicineName,
                price,
                quantity,
                ingredients,
                description,
                medicineStatus,
                sales: "0",
                medicinalUse,
                path,
            })
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

    function convertToBase64(e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setPath(reader.result);
        };
        reader.onerror = error => {
            console.log("Error: " , error );
        };
    }


    const clearForm = () => {
        // Reset form fields
        setMedicineName("");
        setPrice("");
        setQuantity("");
        setIngredients([]);
        setDescription("");
        setMedicineStatus("");
        setMedicinalUse("");
        setPath("");
    };



    return (
        <div className="d-flex justify-content-center align-itelms-center vh-100 bg-light">
            <div className="card m-3 col-12" style={{ width: "60%" }}>
                <div className="card-header">
                    <h2>Add Medicine</h2>
                </div>
                <div className="card-body">
                    {message && (
                        <div className={`alert ${message.includes("successfully") ? "alert-success" : "alert-danger"}`}>
                            {message}
                        </div>
                    )}
                    <form action="" onSubmit={handleSubmit} >
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


                        {/* THIS PART IS TO CHOOSE AN IMAGE BUT WE WILL USE A STRING UNTIL WE FIGURE IT OUT  */}
                        <div className="mb-3">
                            <label class="form-label" for="customFile">
                                <strong>Medicine Image</strong></label>
                            <input
                                type="file"
                                placeholder="Choose file"
                                autoComplete="off"
                                name="path"
                                className="form-control rounded-0"
                                id="customFile"
                                onChange={convertToBase64}
                            />
                        </div>



                        <button type="submit" className="btn btn-success">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default AddMedicine;