import React, { useEffect } from "react";
import { Search } from "lucide-react";
import { useApp } from "../context/AppContext";
import { specializations } from "../data/doctorsData";
import "./SearchBar.css";

export default function SearchBar() {
  const {
    searchQuery,
    selectedSpecialization,
    selectedAvailability,
    dispatch,
    filterDoctors,
  } = useApp();

  useEffect(() => {
    filterDoctors();
  }, [searchQuery, selectedSpecialization, selectedAvailability]);

  const handleSearchChange = (e) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
  };

  const handleSpecializationChange = (e) => {
    dispatch({ type: "SET_SPECIALIZATION", payload: e.target.value });
  };

  const handleAvailabilityChange = (e) => {
    dispatch({ type: "SET_AVAILABILITY", payload: e.target.value });
  };

  return (
    <div className="searchbar-card">
      <h2 className="searchbar-title">Find Your Doctor</h2>

      <div className="searchbar-grid">
        {/* Search Input */}
        <div className="searchbar-input-wrap">
          <Search className="searchbar-input-icon" />
          <input
            type="text"
            placeholder="Search by name or specialization"
            value={searchQuery}
            onChange={handleSearchChange}
            className="searchbar-input"
          />
        </div>

        {/* Specialization Dropdown */}
        <select
          value={selectedSpecialization}
          onChange={handleSpecializationChange}
          className="searchbar-select"
        >
          {specializations.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>

        {/* Availability Dropdown */}
        <select
          value={selectedAvailability}
          onChange={handleAvailabilityChange}
          className="searchbar-select"
        >
          <option value="All">All Doctors</option>
          <option value="Available">Available Today</option>
          <option value="Unavailable">Currently Unavailable</option>
        </select>
      </div>
    </div>
  );
}
