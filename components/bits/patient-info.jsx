import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { Server } from "lucide-react"
import { GuardianStore } from "@/context/GuardianContext"
import { cn } from "@/lib/utils"
import PatientStore from "@/context/PatientContext";

export default function PatientInfo() {
    const patient = PatientStore(state => state.patientInfo);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <span
                    className="font-light">{patient.firstName ? patient.firstName + " " + patient.lastName : ""}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Patient Information</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <div className="grid gap-4 p-4">
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Name</div>
                        <div className="text-sm font-medium">{patient.firstName ? patient.firstName + " " + patient.lastName : ""}</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Height</div>
                        <div className="text-sm font-medium">{patient.firstName ? patient.height + " cm" : ""}</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Weight</div>
                        <div className="text-sm font-medium">{patient.firstName ? patient.weight + " kg" : ""}</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Gender</div>
                        <div className="text-sm font-medium">{patient.firstName ? patient.gender : ""}</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">MRN</div>
                        <div className="text-sm font-medium">{patient.firstName ? patient.mrn : ""}</div>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}