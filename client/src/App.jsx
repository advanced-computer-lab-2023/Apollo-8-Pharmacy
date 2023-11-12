import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import PharmacistSignup from "./pages/PharmacistSignup";
import PatientSignup from "./pages/PatientSignup";
import Home from "./pages/Home";
import PharmacistsList from "./pages/PharmacistsList";
import PatientsList from "./pages/PatientsList";
import PharmacistDetails from "./pages/PharmacistDetails";
import PatientDetails from "./pages/PatientDetails";
import EditMedicine from "./pages/EditMedicine";
import AddMedicine from "./pages/AddMedicine";
import MedicineSales from "./pages/MedicineSales";
import AddAdmin from "./pages/AddAdmin";
import RemoveUser from "./pages/RemoveUser";
import PharmacistsListPending from "./pages/PharmacistsListPending";
import MedicinesListPharmacist from "./pages/MedicinesListPharmacist";
import MedicinesListPatient from "./pages/MedicinesListPatient";
import HomePage from "./pages/HomePage";
import MedicinesListAdmin from "./pages/MedicinesListAdmin";
import Cart from "./pages/cart"
import MyOrders from "./pages/MyOrders";
import ListMedicine from "./pages/Medicine";
import ListMedicinepharm from "./pages/MedicinePharm";
import HomePagePharm from "./pages/HomePagePharm";
import Pharmacistlogin from "./pages/PharmacistLogin";
import Adminlogin from "./pages/AdminLogin";
import Patientlogin from "./pages/PatientLogin";
import Forget from "./pages/ForgetPassword";
import ChangePass from "./pages/chnagePass";
import ChangePassPharm from "./pages/changePassPharm";
import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`;

function App() {
  const token=JSON.parse(sessionStorage.getItem('token'));
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
                console.log( err);
                setDataFetched(true);
              }
            };
        
            fetchData();
          }, [token]);

          if (!dataFetched) {
             return <p>Loading...</p>; // Render nothing until data is fetched
          }
          
          //enum: ['Pharmacist', 'Admin', 'Patient']
        if(type==="Patient"){

        return (
          <div>
            <Routes>
              <Route path="/registerPharmacist" element={<PharmacistSignup />} />
              <Route path="/registerPatient" element={<PatientSignup />} />
              <Route path="/pharmacists" element={<PharmacistsList />} />
              <Route path="/patients" element={<PatientsList />} />
              <Route path="/pharmacists/:id" element={<PharmacistDetails />} />
              <Route path="/patients/:id" element={<PatientDetails />} />
              <Route path="/medicinesList/:id" element={<EditMedicine />} />
              <Route path="/addMedicine" element={<AddMedicine />} />
              <Route path="/medicineSales" element={<MedicineSales />} />
              <Route path="/medicinesListPharmacist" element={<MedicinesListPharmacist />} />
              <Route path="/medicinesListPatient" element={<MedicinesListPatient />} />
              <Route path="/medicinesListAdmin" element={<MedicinesListAdmin />} />
              <Route path="/" element={<Home />} />
              <Route path="/addAdmin" element={<AddAdmin />} />
              <Route path="/removeUser" element={<RemoveUser />} />
              <Route path="/pharmacistsListPending" element={<PharmacistsListPending />} />
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/myorders" element={<MyOrders />} />
              <Route path="/listMedicine" element={<ListMedicine />} />
              <Route path="/listMedicinepharm" element={<ListMedicinepharm />} />
              <Route path="/HomePagePharm" element={<HomePagePharm />} />
              <Route path="/PatientLogin" element={<Patientlogin />} />
              <Route path="/PharmacistLogin" element={<Pharmacistlogin />} />
              <Route path="/AdminLogin" element={<Adminlogin />} />
              <Route path="/ForgetPassword" element={<Forget />} />
              <Route path="/ChangePassword" element={<ChangePass />} />
              <Route path="/ChangePasswordPharm" element={<ChangePassPharm />} />
      </Routes>
    </div>

  );
        }
        else if(type==="Pharmacist"){
          return (
            <div>
              <Routes>
                <Route path="/registerPharmacist" element={<PharmacistSignup />} />
                <Route path="/registerPatient" element={<PatientSignup />} />
                <Route path="/pharmacists" element={<PharmacistsList />} />
                <Route path="/patients" element={<PatientsList />} />
                <Route path="/pharmacists/:id" element={<PharmacistDetails />} />
                <Route path="/patients/:id" element={<PatientDetails />} />
                <Route path="/medicinesList/:id" element={<EditMedicine />} />
                <Route path="/addMedicine" element={<AddMedicine />} />
                <Route path="/medicineSales" element={<MedicineSales />} />
                <Route path="/medicinesListPharmacist" element={<MedicinesListPharmacist />} />
                <Route path="/medicinesListPatient" element={<MedicinesListPatient />} />
                <Route path="/medicinesListAdmin" element={<MedicinesListAdmin />} />
                <Route path="/" element={<Home />} />
                <Route path="/addAdmin" element={<AddAdmin />} />
                <Route path="/removeUser" element={<RemoveUser />} />
                <Route path="/pharmacistsListPending" element={<PharmacistsListPending />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/myorders" element={<MyOrders />} />
                <Route path="/listMedicine" element={<ListMedicine />} />
                <Route path="/listMedicinepharm" element={<ListMedicinepharm />} />
                <Route path="/HomePagePharm" element={<HomePagePharm />} />
                <Route path="/PatientLogin" element={<Patientlogin />} />
                <Route path="/PharmacistLogin" element={<Pharmacistlogin />} />
                <Route path="/AdminLogin" element={<Adminlogin />} />
                <Route path="/ForgetPassword" element={<Forget />} />
                <Route path="/ChangePassword" element={<ChangePass />} />
                <Route path="/ChangePasswordPharm" element={<ChangePassPharm />} />
        </Routes>
      </div>
  
    );
        }
        else if(type==="Admin"){
          return (
            <div>
              <Routes>
                <Route path="/registerPharmacist" element={<PharmacistSignup />} />
                <Route path="/registerPatient" element={<PatientSignup />} />
                <Route path="/pharmacists" element={<PharmacistsList />} />
                <Route path="/patients" element={<PatientsList />} />
                <Route path="/pharmacists/:id" element={<PharmacistDetails />} />
                <Route path="/patients/:id" element={<PatientDetails />} />
                <Route path="/medicinesList/:id" element={<EditMedicine />} />
                <Route path="/addMedicine" element={<AddMedicine />} />
                <Route path="/medicineSales" element={<MedicineSales />} />
                <Route path="/medicinesListPharmacist" element={<MedicinesListPharmacist />} />
                <Route path="/medicinesListPatient" element={<MedicinesListPatient />} />
                <Route path="/medicinesListAdmin" element={<MedicinesListAdmin />} />
                <Route path="/" element={<Home />} />
                <Route path="/addAdmin" element={<AddAdmin />} />
                <Route path="/removeUser" element={<RemoveUser />} />
                <Route path="/pharmacistsListPending" element={<PharmacistsListPending />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/myorders" element={<MyOrders />} />
                <Route path="/listMedicine" element={<ListMedicine />} />
                <Route path="/listMedicinepharm" element={<ListMedicinepharm />} />
                <Route path="/HomePagePharm" element={<HomePagePharm />} />
                <Route path="/PatientLogin" element={<Patientlogin />} />
                <Route path="/PharmacistLogin" element={<Pharmacistlogin />} />
                <Route path="/AdminLogin" element={<Adminlogin />} />
                <Route path="/ForgetPassword" element={<Forget />} />
                <Route path="/ChangePassword" element={<ChangePass />} />
                <Route path="/ChangePasswordPharm" element={<ChangePassPharm />} />
        </Routes>
      </div>
  
    );
        }
        else{

          return (
            <div>
              <Routes>
                <Route path="/registerPharmacist" element={<PharmacistSignup />} />
                <Route path="/registerPatient" element={<PatientSignup />} />                <Route path="/patients" element={<PatientsList />} />
                <Route path="/" element={<Home />} />
                <Route path="/HomePage" element={<HomePage />} />
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
