import { patients } from '@/lib/patients-data'
import { Patient } from '@/lib/patients-data'
import { setTimeout } from 'timers/promises'
import { create } from 'zustand'

interface PatientDataStore {
  patients: Patient[] | null
  setPatients: (patientProp: Patient[] | null) => void
  fetchPatients: () => Promise<void>
  addPatient: (newPatient: Patient) => Promise<void>
}

const usePatientDataStore = create<PatientDataStore>((set, get) => ({
  patients: null,
  setPatients: patientsProp => {
    set({ patients: patientsProp })
  },
  fetchPatients: async () => {
    try {
      const data = await new Promise<Patient[]>(resolve => {
        global.setTimeout(() => {
          // setTimeout gave typescript error. If global does not work try window.setTimeout
          resolve(patients)
        }, 690)
      })
      set({ patients: data })
    } catch (error) {
      console.error('Failed to fetch patients', error)
    }
  },
  addPatient: async newPatient => {
    try {
      await new Promise<void>(resolve => {
        global.setTimeout(() => {
          const currentPatients = get().patients || []
          const updatePatients = [...currentPatients, newPatient]
          set({ patients: updatePatients })
          resolve()
        }, 450)
      })
    } catch (error) {
      console.log(error)
    }
  }
}))

export default usePatientDataStore
