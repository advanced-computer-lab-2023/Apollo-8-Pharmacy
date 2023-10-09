import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import PharmacistSignup from "./pages/PharmacistSignup";
import PatientSignup from "./pages/PatientSignup";
import Home from "./pages/Home";
import AddAdmin from "./pages/AddAdmin";
import RemoveUser from "./pages/RemoveUser"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/registerPharmacist" element={<PharmacistSignup />} />
        <Route path="/registerPatient" element={<PatientSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addAdministratin" element={<AddAdmin/>}/>
        <Route path="/RemoveUser" element={<RemoveUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
