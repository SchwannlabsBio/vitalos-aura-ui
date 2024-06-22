import Clock from "@/components/clock";
import { WifiIcon, BatteryChargingIcon, SignalIcon } from "lucide-react";
import {AlertStore} from "@/context/AlertContext";
import ServerStatus from "@/components/bits/server-status";
import PatientStore from "@/context/PatientContext";
import PatientInfo from "@/components/bits/patient-info";
import AlarmList from "@/components/bits/alarm-list";
import {Separator} from "@/components/ui/separator";

export default function TopBar() {
    const patient = PatientStore(state => state.patientInfo);
    return (
        <div className="flex items-center sticky justify-between bg-background px-4 py-8 text-white">
            <div className="flex items-center space-x-4 h-10">
                <Clock/>
                {patient.exists && <>
                    <Separator orientation="vertical"/>
                    <PatientInfo/>
                    <Separator orientation="vertical"/>
                    <span className="font-light">
                        {patient.category}
                    </span>
                </>}
            </div>
            <AlarmList/>
            <div className="flex items-center space-x-4">
                <ServerStatus/>
                <WifiIcon className="h-6 w-6"/>
                <SignalIcon className="h-6 w-6"/>
                <BatteryChargingIcon className="h-6 w-6"/>
            </div>
        </div>
    )
}