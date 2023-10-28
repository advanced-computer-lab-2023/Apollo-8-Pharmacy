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


      </Routes>
    </div>
  );
}

export default App;
