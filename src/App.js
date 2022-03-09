import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Appointments from "./components/Appointments";
import Doctors from "./components/Doctors/Doctors";
import Departments from "./components/Departments";
import Patients from "./components/Patients";
import Payments from "./components/Payments";
import Doctor from "./components/Doctors/Doctor";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:profile" element={<Doctor />} />
        <Route path="/deparments" element={<Departments />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </Router>
  );
}

export default App;
