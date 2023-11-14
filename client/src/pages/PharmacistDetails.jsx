import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import "../App.css";
import Button1 from "react-bootstrap/Button";
import Card1 from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { height } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { Alert } from "@mui/material";

import ResponsiveAppBar from "./TopBarAdmin";
import Ads from "./Ads";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import BottomBar from "./BottomBar";
import { config } from "../config/config";

function PharmacistDetails() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = "http://localhost:9000/pharmacist/" + id;
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
  const handleBack = () => {
    // Use the navigate function to go to the specified route
    navigate("/pharmacistsListPending");
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
            backgroundColor: "rgb(0,140,990",
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
            Pharmacist Details
          </h1>
        </div>
        <div
          className="card-body"
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "20px",
            width: "40%",
            border: "solid black",
            marginLeft: "30%",
            marginTop: "3%",
          }}
        >
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              <li>name: {data.name}</li>
              <li>email: {data.email}</li>
              <li>birthDate: {data.birthDate}</li>
              <li>hourlyRate: {data.hourlyRate}</li>
              <li>hospital: {data.hospital}</li>
              <li>eduBackground: {data.eduBackground}</li>
              <li>wallet: {data.wallet}</li>
              <li>status: {data.status}</li>
              {data.idFile.substr(data.idFile.length - 3) == `pdf` ? (
                <li>
                  <a href={config.STORAGE_URL + data.idFile} download="id">
                    Download id
                  </a>
                </li>
              ) : (
                <li>
                  <img
                    style={{ height: 200, width: 200 }}
                    src={config.STORAGE_URL + data.idFile}
                    className="card-img-top"
                  />
                </li>
              )}
              {data.degreeFile.substr(data.degreeFile.length - 3) == `pdf` ? (
                <li>
                  <a
                    href={config.STORAGE_URL + data.degreeFile}
                    download="degree"
                  >
                    Download degree
                  </a>
                </li>
              ) : (
                <li>
                  <img
                    style={{ height: 200, width: 200 }}
                    src={config.STORAGE_URL + data.degreeFile}
                    className="card-img-top"
                  />
                </li>
              )}
              {data.licenseFile.substr(data.licenseFile.length - 3) == `pdf` ? (
                <li>
                  <a
                    href={config.STORAGE_URL + data.licenseFile}
                    download="license"
                  >
                    Download license
                  </a>
                </li>
              ) : (
                <li>
                  <img
                    style={{ height: 200, width: 200 }}
                    src={config.STORAGE_URL + data.licenseFile}
                    className="card-img-top"
                  />
                </li>
              )}
            </ul>
          )}
        </div>
        <button
          className="btn btn-success position-absolute bottom-0 end-0 m-3 btn-lg"
          onClick={handleBack}
        >
          Back
        </button>
        <BottomBar />
      </AppBar>
    </div>
  );
}

export default PharmacistDetails;
