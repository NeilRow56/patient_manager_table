import { nanoid } from 'nanoid'

// Define diagnosid=s types as a union of string literals

type Diagnosis =
  | 'Hypertension'
  | 'Diabetes'
  | 'Asthma'
  | 'Heart Disease'
  | 'Arthritis'
  | 'Allergies'

//Define the Patient type

export interface Patient {
  id: string
  firstName: string
  lastName: string
  diagnosis: Diagnosis
  gender: 'Male' | 'Female'
  appointmentDate: string
  lastVisit: string
}

export const patients: Patient[] = [
  {
    id: nanoid(),
    firstName: 'John',
    lastName: 'Doe',
    diagnosis: 'Hypertension',
    gender: 'Male',
    appointmentDate: '20-11-2024',
    lastVisit: '15-10-2024'
  },
  {
    id: nanoid(),
    firstName: 'Jane',
    lastName: 'Smith',
    diagnosis: 'Diabetes',
    gender: 'Female',
    appointmentDate: '10-12-2024',
    lastVisit: '01-11-2024'
  },
  {
    id: nanoid(),
    firstName: 'Susan',
    lastName: 'Calman',
    diagnosis: 'Diabetes',
    gender: 'Female',
    appointmentDate: '10-10-2024',
    lastVisit: '01-07-2024'
  },
  {
    id: nanoid(),
    firstName: 'Alison',
    lastName: 'Johnson',
    diagnosis: 'Asthma',
    gender: 'Female',
    appointmentDate: '08-10-2024',
    lastVisit: '09-07-2024'
  },
  {
    id: nanoid(),
    firstName: 'Bob',
    lastName: 'Williams',
    diagnosis: 'Heart Disease',
    gender: 'Male',
    appointmentDate: '08-05-2024',
    lastVisit: '09-04-2024'
  },
  {
    id: nanoid(),
    firstName: 'Sam',
    lastName: 'Smith',
    diagnosis: 'Allergies',
    gender: 'Male',
    appointmentDate: '08-05-2024',
    lastVisit: '09-04-2024'
  },
  {
    id: nanoid(),
    firstName: 'Brian',
    lastName: 'Cox',
    diagnosis: 'Diabetes',
    gender: 'Male',
    appointmentDate: '08-05-2024',
    lastVisit: '09-04-2024'
  }
]
