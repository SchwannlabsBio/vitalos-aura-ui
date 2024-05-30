// Context Imports
import { ModuleStore } from "@/context/ModuleContext";

// UI Component Imports
import { AlertDialogTitle, AlertDialogDescription, AlertDialogHeader, AlertDialogCancel, AlertDialogAction, AlertDialogFooter, AlertDialogContent, AlertDialog } from "@/components/ui/alert-dialog"
import Model3D from "@/components/ui/3d-module";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function ModulePopup() {
    const popupState = ModuleStore(state => state.moduleInstalledPopup);
    const setPopupState = ModuleStore(state => state.setModulePopupState);
    const connectedModules = ModuleStore(state => state.activeModules)
    const newModule = connectedModules[connectedModules.length - 1]
    const closeAlert = () => setPopupState(false);

    return (
        <AlertDialog open={popupState} onOpenChange={setPopupState}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{(newModule && newModule.module) || ""} Installed.</AlertDialogTitle>
                    <AlertDialogDescription className="h-96">
                        {(newModule && newModule.module) || ""} Module has been successfully installed at Slot {(newModule && newModule.slot) || ""} and is currently being calibrated.
                        <Model3D />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button variant="outline" onClick={closeAlert}>Close</Button>
                    <Button disabled={(newModule && newModule.status === "MOD_CONN")}>
                        <Link href={"/settings/" + (newModule && newModule.module.toLocaleLowerCase()) || ""} onClick={closeAlert} >
                            {(newModule && newModule.status === "MOD_CONN") &&
                                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
                            Setup
                        </Link>
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
