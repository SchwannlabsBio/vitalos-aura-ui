import { useState, useEffect } from "react";
import create from 'zustand'

// Zustand State
export const ModuleStore = create(set => ({
    moduleInstalled: false,
    setModuleState: (newValue) => set((state) => ({ moduleInstalled: newValue })),
}))