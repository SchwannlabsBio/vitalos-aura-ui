// Context Imports
import { ModuleStore } from "@/context/ModuleContext";

// UI Component Imports
import { AlertDialogTitle, AlertDialogDescription, AlertDialogHeader, AlertDialogCancel, AlertDialogAction, AlertDialogFooter, AlertDialogContent, AlertDialog } from "@/components/ui/alert-dialog"
import Model3D from "@/components/ui/3d-module";
import Link from "next/link";

export default function ModulePopup() {
    const popupState = ModuleStore(state => state.moduleInstalledPopup);
    const setPopupState = ModuleStore(state => state.setModulePopupState);
    const connectedModules = ModuleStore(state => state.activeModules)
    const newModule = connectedModules[connectedModules.length - 1]
    console.log(connectedModules)
    const closeAlert = () => setPopupState(false);

    return (
        <AlertDialog open={popupState} onOpenChange={setPopupState}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{(newModule && newModule.module) || ""} Installed.</AlertDialogTitle>
                    <AlertDialogDescription className="h-96">
                        {(newModule && newModule.module) || ""} Module has been successfully installed and is currently being calibrated.
                        <Model3D />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeAlert}>Close</AlertDialogCancel>
                    <AlertDialogAction>
                        <Link href="/settings/etco2" onClick={closeAlert}>
                            Setup
                        </Link>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
