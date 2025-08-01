import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DoctorProfile from './components/DoctorProfile';
import BookingForm from './components/BookingForm';
import MyAppointments from './components/MyAppointments';
import './index.css'; // Make sure your CSS is imported

function App() {
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