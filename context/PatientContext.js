import create from "zustand";
import { invoke } from '@tauri-apps/api/tauri';

const PatientStore = create((set) => ({
    patientInfo: {
        exists: false,
        lastName: "",
        firstName: "",
        middleName: "",
        mrn: "",
        category: "",
        paced: false,
        dob: null,
        height: "",
        weight: "",
        bsa: "",
        gender: "",
        notes: ""
    },
    updatePatientInfo: async (info) => {
        set({patientInfo: info})
        await invoke('update_patient_info', { info });
    },
    createPatient: async (info) => {
        set({patientInfo: info})
        await invoke('update_patient_info', { info });
    }
}));

export default PatientStore;
