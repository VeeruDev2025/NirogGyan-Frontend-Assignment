import React from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Clock, DollarSign } from "lucide-react";
import "./DoctorCrD.css";

export default function DoctorCard({ doctor }) {
  return (
    <div className="doctorcard">
      <div className="doctorcard-imgwrap">
        <img src={doctor.image} alt={doctor.name} className="doctorcard-img" />
        <div
          className={`doctorcard-status ${
            doctor.isAvailable
              ? "doctorcard-status-available"
              : "doctorcard-status-unavailable"
          }`}
        >
          {doctor.isAvailable ? "Available" : "Unavailable"}
        </div>
      </div>

      <div className="doctorcard-body">
        <div className="doctorcard-header">
          <h3 className="doctorcard-name">{doctor.name}</h3>
          <div className="doctorcard-rating">
            <Star className="doctorcard-star" />
            <span className="doctorcard-rating-value">{doctor.rating}</span>
          </div>
        </div>

        <p className="doctorcard-specialization">{doctor.specialization}</p>

        <div className="doctorcard-info">
          <div className="doctorcard-info-row">
            <MapPin className="doctorcard-info-icon" />
            <span>{doctor.location}</span>
          </div>
          <div className="doctorcard-info-row">
            <Clock className="doctorcard-info-icon" />
            <span>{doctor.experience} years experience</span>
          </div>
          <div className="doctorcard-info-row">
            <DollarSign className="doctorcard-info-icon" />
            <span>${doctor.consultationFee} consultation</span>
          </div>
        </div>

        <Link to={`/doctor/${doctor.id}`} className="doctorcard-btn">
          View Profile
        </Link>
      </div>
    </div>
  );
}
