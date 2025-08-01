import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import { useApp } from "../context/AppContext";
import "./DoctorProfile.css";

export default function DoctorProfile() {
  const { id } = useParams();
  const { doctors } = useApp();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="doctorprofile-fullscreen">
        <div className="doctorprofile-center">
          <h2 className="doctorprofile-title">Doctor Not Found</h2>
          <Link to="/" className="doctorprofile-link">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="doctorprofile-fullscreen doctorprofile-bg">
      <div className="doctorprofile-main">
        {/* Back Button */}
        <Link to="/" className="doctorprofile-back">
          <ArrowLeft className="doctorprofile-back-icon" />
          Back to Doctors
        </Link>

        <div className="doctorprofile-card">
          {/* Header Section */}
          <div className="doctorprofile-header-flex">
            <div className="doctorprofile-imgwrap">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="doctorprofile-img"
              />
            </div>

            <div className="doctorprofile-header-body">
              <div className="doctorprofile-header-row">
                <div>
                  <h1 className="doctorprofile-name">{doctor.name}</h1>
                  <p className="doctorprofile-specialization">
                    {doctor.specialization}
                  </p>
                </div>
                <div
                  className={`doctorprofile-status ${
                    doctor.isAvailable
                      ? "doctorprofile-status-available"
                      : "doctorprofile-status-unavailable"
                  }`}
                >
                  {doctor.isAvailable ? "Available" : "Unavailable"}
                </div>
              </div>

              <div className="doctorprofile-info-row">
                <div className="doctorprofile-rating">
                  <Star className="doctorprofile-star" />
                  <span className="doctorprofile-rating-value">
                    {doctor.rating}
                  </span>
                </div>
                <div className="doctorprofile-info">
                  <Clock className="doctorprofile-info-icon" />
                  <span>{doctor.experience} years</span>
                </div>
                <div className="doctorprofile-info">
                  <DollarSign className="doctorprofile-info-icon" />
                  <span>${doctor.consultationFee}</span>
                </div>
              </div>

              <div className="doctorprofile-location-edu">
                <div className="doctorprofile-info doctorprofile-info-mb">
                  <MapPin className="doctorprofile-info-icon" />
                  <span>{doctor.location}</span>
                </div>
                <div className="doctorprofile-info">
                  <GraduationCap className="doctorprofile-info-icon" />
                  <span>{doctor.education}</span>
                </div>
              </div>

              {doctor.isAvailable && (
                <Link
                  to={`/book/${doctor.id}`}
                  className="doctorprofile-book-btn"
                >
                  <Calendar className="doctorprofile-book-icon" />
                  Book Appointment
                </Link>
              )}
            </div>
          </div>

          {/* About Section */}
          <div className="doctorprofile-section">
            <h2 className="doctorprofile-section-title">About</h2>
            <p className="doctorprofile-about">{doctor.about}</p>
          </div>

          {/* Availability Schedule */}
          {doctor.isAvailable && (
            <div className="doctorprofile-section">
              <h2 className="doctorprofile-section-title">
                Available Time Slots
              </h2>
              <div className="doctorprofile-availability-grid">
                {doctor.availability.map((day, index) => (
                  <div key={index} className="doctorprofile-availability-day">
                    <h3 className="doctorprofile-availability-day-title">
                      {day.day}
                    </h3>
                    <div className="doctorprofile-availability-slots">
                      {day.slots.map((slot, slotIndex) => (
                        <span key={slotIndex} className="doctorprofile-slot">
                          {slot}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
