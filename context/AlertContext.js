import { create } from 'zustand';

export const AlertStore = create(set => ({
    alerts: [{
        message: "BP High",
        type: "urgent"
    }],
    addAlert: alert => set(state => ({
        alerts: [...state.alerts, alert]
    })),
    removeAlert: message => set(state => ({
        alerts: state.alerts.filter(alert => alert.message !== message)
    }))
}));