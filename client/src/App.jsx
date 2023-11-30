import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import PharmacistSignup from "./pages/auth/PharmacistSignup";
import PatientSignup from "./pages/auth/PatientSignup";
import Home from "./pages/Home";
import PharmacistsList from "./pages/admin/PharmacistsList";
import PatientsList from "./pages/admin/PatientsList";
import PharmacistDetails from "./pages/admin/PharmacistDetails";
import PatientDetails from "./pages/admin/PatientDetails";
import EditMedicine from "./pages/admin/EditMedicine";
import AddMedicine from "./pages/pharmacist/AddMedicine";
import MedicineSales from "./pages/pharmacist/MedicineSales";
import AddAdmin from "./pages/admin/AddAdmin";
import RemoveUser from "./pages/admin/RemoveUser";
import PharmacistsListPending from "./pages/admin/PharmacistsListPending";
import MedicinesListPharmacist from "./pages/pharmacist/MedicinesListPharmacist";
import MedicinesListPatient from "./pages/patient/MedicinesListPatient";
import HomePage from "./pages/patient/HomePage";
import MedicinesListAdmin from "./pages/admin/MedicinesListAdmin";
import Cart from "./pages/patient/cart";
import MyOrders from "./pages/patient/MyOrders";
import ListMedicine from "./pages/patient/Medicine";
import ListMedicinepharm from "./pages/pharmacist/MedicinePharm";
import HomePagePharm from "./pages/pharmacist/HomePagePharm";
import HomePageAdmin from "./pages/admin/HomePageAdmin";
import AddressForm from "./pages/patient/AddressForm";
import PaymentForm from "./pages/patient/PaymentForm";
import Review from "./pages/patient/Review";
import Checkout from "./pages/patient/Checkout";
import Pharmacistlogin from "./pages/auth/PharmacistLogin";
import Adminlogin from "./pages/auth/AdminLogin";
import Patientlogin from "./pages/auth/PatientLogin";
import Forget from "./pages/auth/ForgetPassword";
import ChangePass from "./pages/patient/chnagePass";
import ChangePassPharm from "./pages/pharmacist/changePassPharm";
import ChangePassAdm from "./pages/admin/changePassAdm";
import OrderDetails from "./pages/patient/orderDetails";
import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
  sessionStorage.getItem("token")
)}`;

function App() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [type, setData] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:9000/admin/getType");

        setData(result.data.type);
        setDataFetched(true);
        console.log(result.data.type);
      } catch (err) {
        console.log(err);
        setDataFetched(true);
      }
    };

    fetchData();
  }, [token]);

  if (!dataFetched) {
    return <p>Loading...</p>; // Render nothing until data is fetched
  }

  //enum: ['Pharmacist', 'Admin', 'Patient']
  if (type === "Patient") {
    return (
      <div>
        <Routes>
          <Route
            path="/medicinesListPatient"
            element={<MedicinesListPatient />}
          />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/myorders/:id" element={<OrderDetails />} />
          <Route path="/listMedicine" element={<ListMedicine />} />
          <Route path="/AddressForm" element={<AddressForm />} />
          <Route path="/PaymentForm" element={<PaymentForm />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Checkout" element={<Checkout />} />

          <Route path="/ForgetPassword" element={<Forget />} />
          <Route path="/ChangePassword" element={<ChangePass />} />
        </Routes>
      </div>
    );
  } else if (type === "Pharmacist") {
    return (
      <div>
        <Routes>
          <Route path="/medicinesList/:id" element={<EditMedicine />} />
          <Route path="/addMedicine" element={<AddMedicine />} />

          <Route path="/medicineSales" element={<MedicineSales />} />
          <Route
            path="/medicinesListPharmacist"
            element={<MedicinesListPharmacist />}
          />
          {/* <Route path="/listMedicinepharm" element={<ListMedicinepharm />} /> */}
          <Route path="/HomePagePharm" element={<HomePagePharm />} />
          <Route path="/ForgetPassword" element={<Forget />} />
          <Route path="/ChangePassword" element={<ChangePass />} />
          <Route path="/ChangePasswordPharm" element={<ChangePassPharm />} />
        </Routes>
      </div>
    );
  } else if (type === "Admin") {
    return (
      <div>
        <Routes>
          <Route path="/pharmacists" element={<PharmacistsList />} />
          <Route path="/patients" element={<PatientsList />} />
          <Route path="/pharmacists/:id" element={<PharmacistDetails />} />
          <Route path="/patients/:id" element={<PatientDetails />} />
          <Route path="/medicinesList/:id" element={<EditMedicine />} />
          <Route path="/medicinesListAdmin" element={<MedicinesListAdmin />} />
          <Route path="/addAdmin" element={<AddAdmin />} />
          <Route path="/HomePageAdmin" element={<AddAdmin />} />
          <Route path="/removeUser" element={<RemoveUser />} />
          <Route
            path="/pharmacistsListPending"
            element={<PharmacistsListPending />}
          />
          <Route path="/ForgetPassword" element={<Forget />} />
          <Route path="/ChangePassword" element={<ChangePass />} />
          <Route path="/ChangePassAdm" element={<ChangePassAdm />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        <Routes>
          <Route path="/registerPharmacist" element={<PharmacistSignup />} />
          <Route path="/registerPatient" element={<PatientSignup />} />{" "}
          <Route path="/" element={<Home />} />
          <Route path="/PatientLogin" element={<Patientlogin />} />
          <Route path="/PharmacistLogin" element={<Pharmacistlogin />} />
          <Route path="/AdminLogin" element={<Adminlogin />} />
          <Route path="/ForgetPassword" element={<Forget />} />
          <Route path="/ChangePassword" element={<ChangePass />} />
          <Route path="/ChangePasswordPharm" element={<ChangePassPharm />} />
          <Route path="/:any" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
