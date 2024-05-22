import {useState, useEffect} from "react";
import { AlertDialogTitle, AlertDialogDescription, AlertDialogHeader, AlertDialogCancel, AlertDialogAction, AlertDialogFooter, AlertDialogContent, AlertDialog } from "@/components/ui/alert-dialog"
import Model3D from "@/components/ui/3d-module";

export default function ModuleInitialised() {
    const [moduleInstalled, setModuleInstalled] = useState(false)
    const closeAlert = () => setModuleInstalled(false);

    useEffect(() => {
        const time = Math.floor(Math.random() * 5000);
        const timeoutID = setTimeout(() => setModuleInstalled(true), time)
        return () => clearTimeout(timeoutID);
    },[])

    return (
        <AlertDialog open={moduleInstalled} onOpenChange={setModuleInstalled}>
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
