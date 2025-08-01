import React from "react";
import SearchBar from "./SearchBar";
import DoctorCard from "./DoctorCard";
import { useApp } from "../context/AppContext";
import "./Home.css";

export default function Home() {
  const { filteredDoctors } = useApp();

  return (
    <div className="home-fullscreen">
      <div className="home-container">
        {/* Hero Section */}
        <div className="home-hero">
          <h1 className="home-hero-title">Find Your Perfect Doctor</h1>
          <p className="home-hero-desc">
            Connect with experienced healthcare professionals and book
            appointments that fit your schedule. Quality healthcare is just a
            click away.
          </p>
        </div>

        {/* Search Section */}
        <SearchBar />

        {/* Results Section */}
        <div className="home-results">
          <h2 className="home-results-title">
            Available Doctors ({filteredDoctors.length})
          </h2>
          <p className="home-results-desc">
            Choose from our network of qualified healthcare professionals
          </p>
        </div>

        {/* Doctors Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="home-grid">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <div className="home-empty">
            <div className="home-empty-card">
              <h3 className="home-empty-title">No Doctors Found</h3>
              <p className="home-empty-desc">
                Try adjusting your search criteria to find more doctors.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
