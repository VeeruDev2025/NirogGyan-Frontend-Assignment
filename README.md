# MyAppointments Component

This file explains how the `MyAppointments` React component works and how to use it in your healthcare appointment booking app.

---

## 1. What is MyAppointments?

`MyAppointments` is a React component that shows a list of all appointments booked by the user. It allows users to:

- View appointment details
- Cancel appointments
- See patient and doctor information

---

## 2. How Does It Work?

### a. **Imports**

- React and icons from `lucide-react`
- `useApp` from your app context (for appointments and actions)
- CSS for styling

### b. **Getting Data**

- Uses `useApp()` to get:
  - `appointments`: Array of all booked appointments
  - `cancelAppointment`: Function to cancel an appointment

### c. **Helper Functions**

- `handleCancelAppointment`: Asks for confirmation, then cancels the appointment
- `formatDate`: Makes the booking date easy to read
- `formatTime`: Makes the appointment time easy to read

### d. **No Appointments?**

- If there are no appointments, shows a message and a button to browse doctors

### e. **Showing Appointments**

- For each appointment, shows:
  - Doctor name, specialization, and status
  - Cancel button
  - Appointment details (date, time, location, reason)
  - Patient info (name, email, phone, fee)
  - When the appointment was booked

---

## 3. How To Use

1. **Add to your routes**  
   Example:

   ```jsx
   <Route path="/appointments" element={<MyAppointments />} />
   ```

2. **Make sure your context provides:**

   - `appointments` (array)
   - `cancelAppointment` (function)

3. **Customize styles**  
   Edit `MyAppoinment.css` for your own look.

---

## 4. Features

- **View all appointments:** See every appointment you have booked.
- **Cancel:** Remove an appointment with a single click (with confirmation).
- **Details:** See all info about the doctor, patient, and appointment.
- **Responsive:** Works on all screen sizes (if CSS supports it).

---

## 5. Example Appointment Object

```js
{
  id: "1",
  doctorName: "Dr. Smith",
  doctorSpecialization: "Cardiologist",
  status: "Confirmed",
  selectedDay: "Monday, August 1, 2025",
  selectedTime: "10:30",
  location: "Room 101",
  reason: "Regular checkup",
  patientName: "John Doe",
  email: "john@example.com",
  phone: "123-456-7890",
  consultationFee: 100,
  bookedAt: "2025-07-25T14:00:00Z"
}
```

---

## 6. File Structure

- **MyAppointments.jsx** – This component file
- **MyAppoinment.css** – Styles for the component

---

## 7. Customization

- Change icons or text as needed
- Add more appointment fields if your data has them
- Adjust CSS for your brand

---

## 8. Troubleshooting

- If appointments do not show, check your context/provider
- If cancel does not work, check the `cancelAppointment` function

---

**Summary:**  
This component is a simple, beginner-friendly way to show and manage user appointments in
