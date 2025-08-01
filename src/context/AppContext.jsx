import React, { createContext, useContext, useReducer } from "react";
import { doctorsData } from "../data/doctorsData";

const AppContext = createContext();

const initialState = {
  doctors: doctorsData,
  filteredDoctors: doctorsData,
  searchQuery: "",
  selectedSpecialization: "All Specializations",
  selectedAvailability: "All",
  appointments: JSON.parse(localStorage.getItem("appointments")) || [],
};

function appReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_SPECIALIZATION":
      return { ...state, selectedSpecialization: action.payload };
    case "SET_AVAILABILITY":
      return { ...state, selectedAvailability: action.payload };
    case "SET_FILTERED_DOCTORS":
      return { ...state, filteredDoctors: action.payload };
    case "ADD_APPOINTMENT": {
      const newAppointments = [...state.appointments, action.payload];
      localStorage.setItem("appointments", JSON.stringify(newAppointments));
      return { ...state, appointments: newAppointments };
    }
    case "CANCEL_APPOINTMENT": {
      const updatedAppointments = state.appointments.filter(
        (apt) => apt.id !== action.payload
      );
      localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
      return { ...state, appointments: updatedAppointments };
    }
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const filterDoctors = () => {
    let filtered = state.doctors;

    // Filter by search query
    if (state.searchQuery) {
      filtered = filtered.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          doctor.specialization
            .toLowerCase()
            .includes(state.searchQuery.toLowerCase())
      );
    }

    // Filter by specialization
    if (state.selectedSpecialization !== "All Specializations") {
      filtered = filtered.filter(
        (doctor) => doctor.specialization === state.selectedSpecialization
      );
    }

    // Filter by availability
    if (state.selectedAvailability === "Available") {
      filtered = filtered.filter((doctor) => doctor.isAvailable);
    } else if (state.selectedAvailability === "Unavailable") {
      filtered = filtered.filter((doctor) => !doctor.isAvailable);
    }

    dispatch({ type: "SET_FILTERED_DOCTORS", payload: filtered });
  };

  const addAppointment = (appointmentData) => {
    const appointment = {
      id: Date.now(),
      ...appointmentData,
      bookedAt: new Date().toISOString(),
      status: "confirmed",
    };
    dispatch({ type: "ADD_APPOINTMENT", payload: appointment });
  };

  const cancelAppointment = (appointmentId) => {
    dispatch({ type: "CANCEL_APPOINTMENT", payload: appointmentId });
  };

  const value = {
    ...state,
    dispatch,
    filterDoctors,
    addAppointment,
    cancelAppointment,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
