export const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiology",
    rating: 4.9,
    experience: 15,
    location: "New York Medical Center",
    image:
      "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
    about:
      "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases. She specializes in preventive cardiology and advanced cardiac interventions.",
    education: "MD from Harvard Medical School, Residency at Johns Hopkins",
    availability: [
      { day: "Monday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Tuesday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Wednesday", slots: ["09:00", "10:00", "11:00"] },
      { day: "Thursday", slots: ["14:00", "15:00", "16:00"] },
      { day: "Friday", slots: ["09:00", "10:00", "11:00", "14:00"] },
    ],
    consultationFee: 200,
    isAvailable: true,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Dermatology",
    rating: 4.8,
    experience: 12,
    location: "Downtown Skin Clinic",
    image:
      "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400",
    about:
      "Dr. Michael Chen is a renowned dermatologist specializing in medical and cosmetic dermatology. He has extensive experience in treating skin conditions and aesthetic procedures.",
    education: "MD from Stanford University, Dermatology Residency at UCSF",
    availability: [
      { day: "Monday", slots: ["10:00", "11:00", "14:00", "15:00", "16:00"] },
      { day: "Tuesday", slots: ["09:00", "10:00", "11:00", "14:00"] },
      {
        day: "Wednesday",
        slots: ["09:00", "10:00", "11:00", "14:00", "15:00"],
      },
      { day: "Thursday", slots: ["10:00", "11:00", "14:00", "15:00"] },
      { day: "Friday", slots: ["09:00", "10:00", "11:00"] },
    ],
    consultationFee: 150,
    isAvailable: true,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrics",
    rating: 4.9,
    experience: 18,
    location: "Children's Healthcare Center",
    image:
      "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400",
    about:
      "Dr. Emily Rodriguez is a dedicated pediatrician with a passion for children's health. She provides comprehensive care for infants, children, and adolescents.",
    education:
      "MD from Yale School of Medicine, Pediatrics Residency at Boston Children's Hospital",
    availability: [
      { day: "Monday", slots: ["08:00", "09:00", "10:00", "11:00", "14:00"] },
      { day: "Tuesday", slots: ["08:00", "09:00", "10:00", "14:00", "15:00"] },
      { day: "Wednesday", slots: ["08:00", "09:00", "10:00", "11:00"] },
      { day: "Thursday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Friday", slots: ["08:00", "09:00", "10:00", "11:00", "14:00"] },
    ],
    consultationFee: 120,
    isAvailable: true,
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialization: "Orthopedics",
    rating: 4.7,
    experience: 20,
    location: "Orthopedic Specialists Group",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
    about:
      "Dr. James Wilson is an experienced orthopedic surgeon specializing in joint replacement and sports medicine. He has performed over 2000 successful surgeries.",
    education:
      "MD from University of Pennsylvania, Orthopedic Surgery Residency at Mayo Clinic",
    availability: [
      { day: "Monday", slots: ["13:00", "14:00", "15:00", "16:00"] },
      { day: "Tuesday", slots: ["13:00", "14:00", "15:00"] },
      { day: "Wednesday", slots: ["13:00", "14:00", "15:00", "16:00"] },
      { day: "Thursday", slots: ["13:00", "14:00", "15:00"] },
      { day: "Friday", slots: ["13:00", "14:00"] },
    ],
    consultationFee: 250,
    isAvailable: true,
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialization: "Gynecology",
    rating: 4.8,
    experience: 14,
    location: "Women's Health Center",
    image:
      "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400",
    about:
      "Dr. Lisa Thompson is a board-certified gynecologist dedicated to women's health. She provides comprehensive care including preventive services and minimally invasive procedures.",
    education: "MD from Northwestern University, OB/GYN Residency at UCLA",
    availability: [
      { day: "Monday", slots: ["09:00", "10:00", "14:00", "15:00"] },
      { day: "Tuesday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Wednesday", slots: ["09:00", "10:00", "11:00"] },
      { day: "Thursday", slots: ["14:00", "15:00", "16:00"] },
      { day: "Friday", slots: ["09:00", "10:00", "14:00"] },
    ],
    consultationFee: 180,
    isAvailable: false,
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialization: "Neurology",
    rating: 4.9,
    experience: 16,
    location: "Brain & Spine Institute",
    image:
      "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=400",
    about:
      "Dr. Robert Kim is a neurologist specializing in the diagnosis and treatment of disorders of the nervous system. He has expertise in stroke care and neurological disorders.",
    education:
      "MD from Johns Hopkins, Neurology Residency at Massachusetts General Hospital",
    availability: [
      { day: "Monday", slots: ["10:00", "11:00", "15:00", "16:00"] },
      { day: "Tuesday", slots: ["10:00", "11:00", "15:00"] },
      { day: "Wednesday", slots: ["10:00", "11:00", "15:00", "16:00"] },
      { day: "Thursday", slots: ["10:00", "11:00", "15:00"] },
      { day: "Friday", slots: ["10:00", "11:00"] },
    ],
    consultationFee: 220,
    isAvailable: true,
  },
  {
    id: 7,
    name: "Dr. Priya Patel",
    specialization: "Endocrinology",
    rating: 4.7,
    experience: 11,
    location: "Metropolitan Endocrine Center",
    image:
      "https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg?auto=compress&cs=tinysrgb&w=400",
    about:
      "Dr. Priya Patel specializes in diabetes and thyroid disorders, providing compassionate care for patients with hormonal imbalances.",
    education:
      "MD from University of Michigan, Endocrinology Fellowship at Cleveland Clinic",
    availability: [
      { day: "Monday", slots: ["09:00", "10:00", "11:00"] },
      { day: "Wednesday", slots: ["14:00", "15:00", "16:00"] },
      { day: "Friday", slots: ["09:00", "10:00", "11:00"] },
    ],
    consultationFee: 170,
    isAvailable: true,
  },
  {
    id: 8,
    name: "Dr. Ahmed Hassan",
    specialization: "Gastroenterology",
    rating: 4.8,
    experience: 13,
    location: "City Gastro Clinic",
    image:
      "https://images.pexels.com/photos/1139283/pexels-photo-1139283.jpeg?auto=compress&cs=tinysrgb&w=400",
    about:
      "Dr. Ahmed Hassan is an expert in digestive health, with a focus on minimally invasive procedures and patient education.",
    education:
      "MD from University of Toronto, Gastroenterology Fellowship at Mount Sinai",
    availability: [
      { day: "Tuesday", slots: ["10:00", "11:00", "12:00"] },
      { day: "Thursday", slots: ["14:00", "15:00"] },
    ],
    consultationFee: 190,
    isAvailable: true,
  },
  {
    id: 9,
    name: "Dr. Julia Lee",
    specialization: "Ophthalmology",
    rating: 4.9,
    experience: 10,
    location: "Vision Care Center",
    image:
      "https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=400",
    about:
      "Dr. Julia Lee provides comprehensive eye care, including cataract surgery and glaucoma management.",
    education:
      "MD from Duke University, Ophthalmology Residency at Wills Eye Hospital",
    availability: [
      { day: "Monday", slots: ["09:00", "10:00"] },
      { day: "Wednesday", slots: ["13:00", "14:00"] },
      { day: "Friday", slots: ["10:00", "11:00"] },
    ],
    consultationFee: 160,
    isAvailable: false,
  },
  {
    id: 10,
    name: "Dr. Samuel Green",
    specialization: "Psychiatry",
    rating: 4.7,
    experience: 9,
    location: "Mind Wellness Clinic",
    image:
      "https://images.pexels.com/photos/8376293/pexels-photo-8376293.jpeg?auto=compress&cs=tinysrgb&w=400",
    about:
      "Dr. Samuel Green helps patients manage mental health conditions with empathy and evidence-based therapies.",
    education: "MD from Columbia University, Psychiatry Residency at NYU",
    availability: [
      { day: "Tuesday", slots: ["09:00", "10:00", "11:00"] },
      { day: "Thursday", slots: ["14:00", "15:00"] },
    ],
    consultationFee: 140,
    isAvailable: true,
  },
];

export const specializations = [
  "All Specializations",
  "Cardiology",
  "Dermatology",
  "Pediatrics",
  "Orthopedics",
  "Gynecology",
  "Neurology",
  "Endocrinology",
  "Gastroenterology",
  "Ophthalmology",
  "Psychiatry",
];
