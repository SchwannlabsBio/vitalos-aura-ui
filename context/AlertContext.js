import {create} from 'zustand';

export const AlertStore = create(set => ({
    alerts: [{
        id: 1,
        message: 'Arrhythmia',
        source: 'MVM.ECG',
        kind: 'urgent',
        level: 9,
        timeout: 3000,
    }, {
        id: 1,
        message: 'Guardian Connected',
        source: 'MVM.ECG',
        kind: 'success',
        level: 3,
        timeout: 3000,
    }],
    addAlert: alert => set(state => ({
        alerts: [...state.alerts, alert]
    })),
    removeAlert: id => set(state => ({
        alerts: state.alerts.filter(alert => alert.id !== id)
    })),
    removeAlertByMessage: message => set(state => ({
        alerts: state.alerts.filter(alert => alert.message !== message)
    }))
}));

// Alarm Data Structure
