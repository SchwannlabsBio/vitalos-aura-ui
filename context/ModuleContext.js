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
    })),
    removeModule: (module) => set((state) => ({
        activeModules: state.activeModules.filter((m) => m.module !== module)
    })),
    editModule: (module) => set((state) => {
        const moduleIndex = state.activeModules.findIndex(
            (activeModule) => activeModule.name === module.name
        );

        if (moduleIndex !== -1) {
            const updatedModules = [...state.activeModules];
            updatedModules[moduleIndex] = module;
            return { activeModules: updatedModules };
        } else {
            console.log("Module does not exist");
            // you might want to handle this case differently
            return state;
        }
    })
}))