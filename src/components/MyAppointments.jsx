import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  User,
  Trash2,
  CheckCircle,
} from "lucide-react";
import { useApp } from "../context/AppContext";
import "./MyAppoinment.css";

export default function MyAppointments() {
  const { appointments, cancelAppointment } = useApp();

  const handleCancelAppointment = (appointmentId) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      cancelAppointment(appointmentId);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (appointments.length === 0) {
    return (
      <div className="myapp-fullscreen">
        <div className="myapp-container">
          <h1 className="myapp-title">My Appointments</h1>
          <div className="myapp-empty-card">
            <Calendar className="myapp-empty-icon" />
            <h2 className="myapp-empty-title">No Appointments Yet</h2>
            <p className="myapp-empty-desc">
              You haven't booked any appointments yet. Browse our doctors and
              schedule your consultation.
            </p>
            <Link to="/" className="myapp-btn myapp-btn-primary">
              Browse Doctors
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="myapp-fullscreen">
      <div className="myapp-container">
        <div className="myapp-header-row">
          <h1 className="myapp-title">My Appointments</h1>
          <Link to="/" className="myapp-btn myapp-btn-primary myapp-btn-small">
            Book New Appointment
          </Link>
        </div>

        <div className="myapp-list">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="myapp-card">
              <div className="myapp-card-body">
                <div className="myapp-card-header">
                  <div className="myapp-card-header-left">
                    <div className="myapp-status-icon">
                      <CheckCircle className="myapp-status-check" />
                    </div>
                    <div>
                      <h3 className="myapp-doctor-name">
                        {appointment.doctorName}
                      </h3>
                      <p className="myapp-doctor-spec">
                        {appointment.doctorSpecialization}
                      </p>
                      <span className="myapp-status-label">
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCancelAppointment(appointment.id)}
                    className="myapp-cancel-btn"
                    title="Cancel Appointment"
                  >
                    <Trash2 className="myapp-cancel-icon" />
                  </button>
                </div>

                <div className="myapp-details-grid">
                  {/* Appointment Details */}
                  <div className="myapp-details-section">
                    <h4 className="myapp-details-title">Appointment Details</h4>
                    <div className="myapp-detail-row">
                      <Calendar className="myapp-detail-icon" />
                      <span>{appointment.selectedDay}</span>
                    </div>
                    <div className="myapp-detail-row">
                      <Clock className="myapp-detail-icon" />
                      <span>{formatTime(appointment.selectedTime)}</span>
                    </div>
                    <div className="myapp-detail-row">
                      <MapPin className="myapp-detail-icon" />
                      <span>{appointment.location}</span>
                    </div>
                    <div className="myapp-detail-box">
                      <p className="myapp-detail-box-text">
                        <strong>Reason:</strong> {appointment.reason}
                      </p>
                    </div>
                  </div>

                  {/* Patient Details */}
                  <div className="myapp-details-section">
                    <h4 className="myapp-details-title">Patient Information</h4>
                    <div className="myapp-detail-row">
                      <User className="myapp-detail-icon" />
                      <span>{appointment.patientName}</span>
                    </div>
                    <div className="myapp-detail-row">
                      <Mail className="myapp-detail-icon" />
                      <span>{appointment.email}</span>
                    </div>
                    <div className="myapp-detail-row">
                      <Phone className="myapp-detail-icon" />
                      <span>{appointment.phone}</span>
                    </div>
                    <div className="myapp-detail-box myapp-detail-box-blue">
                      <p className="myapp-detail-box-text-blue">
                        <strong>Consultation Fee:</strong> $
                        {appointment.consultationFee}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="myapp-booked-row">
                  <p className="myapp-booked-text">
                    Booked on {formatDate(appointment.bookedAt)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
