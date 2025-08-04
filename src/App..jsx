// src/App.jsx
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import DoctorProfile from "./components/DoctorProfile.jsx";
import BookingForm from "./components/BookingForm.jsx";
import MyAppointments from "./components/MyAppointments.jsx";
import Loader from "./components/Loader.jsx";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="app-loader-container">
        <Loader />
      </div>
    );
  }

  return (
    <AppProvider>
      <Router>
        <div className="app-fullscreen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/book/:id" element={<BookingForm />} />
            <Route path="/appointments" element={<MyAppointments />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
