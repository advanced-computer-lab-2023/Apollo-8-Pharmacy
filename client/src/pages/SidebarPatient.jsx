import React from "react";
import "../App.css"

function SidebarPatient() {

    return (
        <div className="sidebar" style={{ marginLeft: "-15%" }}>
            <ul>
                <h2 style={{ fontWeight: "bolder" }}>Patient Page</h2>
                <li style={{ margin: "20px" }}><a href="/">Home</a></li>
                <li style={{ margin: "20px" }}><a href="/medicinesListPatient">Medicine List</a></li>
            </ul>
        </div>
    )
}

export default SidebarPatient;