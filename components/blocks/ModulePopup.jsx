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
                    <AlertDialogTitle>Setup {(newModule && newModule.module.toUpperCase()) || ""}.</AlertDialogTitle>
                    <AlertDialogDescription className="h-96">
                        {(newModule && newModule.module.toUpperCase()) || ""} Module has been successfully {(newModule && newModule.status.toLocaleLowerCase()) || ""} at
                        <span className="text-bold"> Slot {(newModule && newModule.slot) || ""} </span>
                        and is {(newModule && newModule.status !== "initialised" ? "being calibrated" : "ready for use")}.
                        <Model3D />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button variant="outline" onClick={closeAlert}>Close</Button>
                    <Button disabled={(newModule && newModule.status !== "initialised")}>
                        <Link href={"/settings/" + (newModule && newModule.module.toLocaleLowerCase()) || ""} onClick={closeAlert} >
                            {(newModule && newModule.status !== "initialised") &&
                                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
                            Setup
                        </Link>
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
