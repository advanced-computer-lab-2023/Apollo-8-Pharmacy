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
import AddAdmin from "./pages/AddAdmin";
import RemoveUser from "./pages/RemoveUser";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/registerPharmacist" element={<PharmacistSignup />} />
        <Route path="/registerPatient" element={<PatientSignup />} />
        <Route path="/pharmacists" element={<PharmacistsList />} />
        <Route path="/patients" element={<PatientsList />} />
        <Route path="/pharmacists/:id" element={<PharmacistDetails />} />
        <Route path="/patients/:id" element={<PatientDetails />} />
        <Route path="/editMedicine" element={<EditMedicine />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addAdministratin" element={<AddAdmin />} />
        <Route path="/RemoveUser" element={<RemoveUser />} />
      </Routes>
    </div>
  );
}

export default App;
