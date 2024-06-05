import create from "zustand";

const PatientContext = create((set) => ({
    patientInfo: {
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
    updatePatientInfo: (info) => set({ patientInfo: info })
}));

export default PatientContext;
