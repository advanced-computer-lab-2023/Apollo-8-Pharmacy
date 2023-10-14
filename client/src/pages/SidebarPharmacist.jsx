import React from "react";
import "../App.css"

function SidebarPharmacist() {

    return (
        <div className="sidebar" style={{ marginLeft: "-15%" }}>
            <ul>
                <h2 style={{ fontWeight: "bolder" }}>Pharmacist Page</h2>
                <li style={{ margin: "20px" }}><a href="/Home">Home</a></li>
                <li style={{ margin: "20px" }}><a href="/medicinesListPharmacist">Medicine List</a></li>
                <li style={{ margin: "20px" }}><a href="/addMedicine">Add Medicine</a></li>
                <li style={{ margin: "20px" }}><a href="/medicineSales">Medicine Sales</a></li>
            </ul>
        </div>
    )
}

export default SidebarPharmacist;