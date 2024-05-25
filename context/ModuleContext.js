import { useState, useEffect } from "react";
import { create } from 'zustand'

// Zustand State
export const ModuleStore = create(set => ({
    // Popup State
    moduleInstalledPopup: false,
    setModulePopupState: (newValue) => set(() => ({ moduleInstalledPopup: newValue })),

    //Modules State
    activeModules: [],
    addNewModule: (newModule) => set((state) => ({
        activeModules: [...state.activeModules, newModule]
    }))
}))