import { create } from 'zustand';

export const GuardianStore = create(set => ({
    guardian: {
        connected: true,
        ping: 34,
        address: "guardian.schwannlabs.bio",
        connectedClients: ["Ziyad Hameed", "Abhinav Phukan", "Jayant Chhilar"],
    },
    updateGuardian: data => set(state => ({
        guardian: { ...state.guardian, ...data }
    }))
}));