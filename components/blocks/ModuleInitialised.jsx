import { useState, useEffect } from "react";
import { ModuleStore } from "@/context/ModuleContext";
import { AlertDialogTitle, AlertDialogDescription, AlertDialogHeader, AlertDialogCancel, AlertDialogAction, AlertDialogFooter, AlertDialogContent, AlertDialog } from "@/components/ui/alert-dialog"
import Model3D from "@/components/ui/3d-module";

export default function ModuleInitialised() {
    const moduleInstalled = ModuleStore(state => state.moduleInstalled);
    const setModuleState = ModuleStore(state => state.setModuleState);
    const closeAlert = () => setModuleState(false);

    return (
        <AlertDialog open={moduleInstalled} onOpenChange={setModuleState}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>etCO2 Module Installed.</AlertDialogTitle>
                    <AlertDialogDescription className="h-96">
                        etCO2 Module has been successfully installed and is currently being calibrated.
                        <Model3D />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeAlert}>Close</AlertDialogCancel>
                    <AlertDialogAction>Setup</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
