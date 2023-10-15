import React from "react";
import "../App.css"

function SidebarAdministrator() {

    return (
        <div className="sidebar" style={{ marginLeft: "-15%" }}>
            <ul>
                <h2 style={{ fontWeight: "bolder" }}>Admin Page</h2>
                <li style={{ margin: "20px" }}><a href="/">Home</a></li>
                <li style={{ margin: "20px" }}><a href="/addAdmin">Add Admin</a></li>
                <li style={{ margin: "20px" }}><a href="/medicinesListAdmin">Medicine List</a></li>
                <li style={{ margin: "20px" }}><a href="/removeUser">Remove User</a></li>
                <li style={{ margin: "20px" }}><a href="pharmacistsListPending">Pharmacists List </a></li>
                <li style={{ margin: "20px" }}><a href="/patients">Patients List</a></li>
            </ul>
        </div>
    )
}

export default SidebarAdministrator;