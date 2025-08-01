import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  CheckCircle,
} from "lucide-react";
import { useApp } from "../context/AppContext";
import "./BookingForm.css";

export default function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { doctors, addAppointment } = useApp();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    phone: "",
    selectedDay: "",
    selectedTime: "",
    reason: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission and validation
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.patientName.trim())
      newErrors.patientName = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.selectedDay) newErrors.selectedDay = "Please select a day.";
    if (!formData.selectedTime)
      newErrors.selectedTime = "Please select a time.";
    if (!formData.reason.trim())
      newErrors.reason = "Please provide a reason for your visit.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      addAppointment({
        doctorId: doctor.id,
        doctorName: doctor.name,
        doctorSpecialization: doctor.specialization,
        doctorImage: doctor.image,
        patientName: formData.patientName,
        email: formData.email,
        phone: formData.phone,
        day: formData.selectedDay,
        time: formData.selectedTime,
        reason: formData.reason,
      });
      setIsSubmitted(true);
      setTimeout(() => {
        navigate("/appointments");
      }, 2000);
    }
  };

  if (!doctor) {
    return (
      <div className="bookingform-fullscreen">
        <div className="bookingform-center">
          <h2 className="bookingform-title">Doctor Not Found</h2>
          <Link to="/" className="bookingform-link">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="bookingform-fullscreen">
        <div className="bookingform-card bookingform-confirm">
          <CheckCircle className="bookingform-confirm-icon" />
          <h2 className="bookingform-title">Appointment Confirmed!</h2>
          <p className="bookingform-confirm-text">
            Your appointment with {doctor.name} has been successfully booked.
          </p>
          <p className="bookingform-confirm-subtext">
            Redirecting to your appointments...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bookingform-fullscreen bookingform-bg">
      <div className="bookingform-main">
        {/* Back Button */}
        <Link to={`/doctor/${doctor.id}`} className="bookingform-back">
          <ArrowLeft className="bookingform-back-icon" />
          Back to Profile
        </Link>

        <div className="bookingform-card">
          {/* Header */}
          <div className="bookingform-header">
            <h1 className="bookingform-header-title">Book Appointment</h1>
            <p className="bookingform-header-subtitle">
              Schedule your consultation with {doctor.name}
            </p>
          </div>

          {/* Doctor Info */}
          <div className="bookingform-doctorinfo">
            <div className="bookingform-doctorinfo-flex">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="bookingform-doctorimg"
              />
              <div>
                <h3 className="bookingform-doctorname">{doctor.name}</h3>
                <p className="bookingform-doctorspec">
                  {doctor.specialization}
                </p>
                <p className="bookingform-doctorfee">
                  ${doctor.consultationFee} consultation fee
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="bookingform-form">
            {/* Patient Information */}
            <div>
              <h3 className="bookingform-section-title">Patient Information</h3>

              <div className="bookingform-grid">
                <div>
                  <label className="bookingform-label">
                    <User className="bookingform-label-icon" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    className={`bookingform-input ${
                      errors.patientName ? "bookingform-input-error" : ""
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.patientName && (
                    <p className="bookingform-error">{errors.patientName}</p>
                  )}
                </div>

                <div>
                  <label className="bookingform-label">
                    <Mail className="bookingform-label-icon" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`bookingform-input ${
                      errors.email ? "bookingform-input-error" : ""
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="bookingform-error">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="bookingform-mt">
                <label className="bookingform-label">
                  <Phone className="bookingform-label-icon" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`bookingform-input ${
                    errors.phone ? "bookingform-input-error" : ""
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="bookingform-error">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Appointment Details */}
            <div>
              <h3 className="bookingform-section-title">Appointment Details</h3>

              <div className="bookingform-grid">
                <div>
                  <label className="bookingform-label">
                    <Calendar className="bookingform-label-icon" />
                    Select Day *
                  </label>
                  <select
                    name="selectedDay"
                    value={formData.selectedDay}
                    onChange={handleInputChange}
                    className={`bookingform-input ${
                      errors.selectedDay ? "bookingform-input-error" : ""
                    }`}
                  >
                    <option value="">Choose a day</option>
                    {doctor.availability.map((day, index) => (
                      <option key={index} value={day.day}>
                        {day.day}
                      </option>
                    ))}
                  </select>
                  {errors.selectedDay && (
                    <p className="bookingform-error">{errors.selectedDay}</p>
                  )}
                </div>

                <div>
                  <label className="bookingform-label">
                    <Clock className="bookingform-label-icon" />
                    Select Time *
                  </label>
                  <select
                    name="selectedTime"
                    value={formData.selectedTime}
                    onChange={handleInputChange}
                    className={`bookingform-input ${
                      errors.selectedTime ? "bookingform-input-error" : ""
                    }`}
                    disabled={!formData.selectedDay}
                  >
                    <option value="">Choose a time</option>
                    {formData.selectedDay &&
                      doctor.availability
                        .find((day) => day.day === formData.selectedDay)
                        ?.slots.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                  </select>
                  {errors.selectedTime && (
                    <p className="bookingform-error">{errors.selectedTime}</p>
                  )}
                </div>
              </div>

              <div className="bookingform-mt">
                <label className="bookingform-label">Reason for Visit *</label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  rows={3}
                  className={`bookingform-input ${
                    errors.reason ? "bookingform-input-error" : ""
                  }`}
                  placeholder="Please describe your symptoms or reason for consultation"
                />
                {errors.reason && (
                  <p className="bookingform-error">{errors.reason}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="bookingform-btnrow">
              <button
                type="submit"
                className="bookingform-btn bookingform-btn-primary"
              >
                Book Appointment
              </button>
              <Link
                to={`/doctor/${doctor.id}`}
                className="bookingform-btn bookingform-btn-secondary"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
