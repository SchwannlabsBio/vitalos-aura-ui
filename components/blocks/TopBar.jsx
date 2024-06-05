import Clock from "@/components/clock";
import { WifiIcon, BatteryChargingIcon, SignalIcon } from "lucide-react";
import {AlertStore} from "@/context/AlertContext";
import ServerStatus from "@/components/bits/server-status";
import PatientContext from "@/context/PatientContext";
import PatientInfo from "@/components/bits/patient-info";

export default function TopBar() {
    const alerts = AlertStore(state => state.alerts);
    const patient = PatientContext(state => state.patientInfo);
    return (
        <div className="flex items-center sticky justify-between bg-background px-4 py-8 text-white">
            <div className="flex items-center space-x-4">
                <Clock />
                <PatientInfo />
                <span className="font-light">{patient.firstName ? patient.category : ""}</span>
            </div>
            <div className="flex items-center space-x-4 text-bold">
                {alerts.map((alert, index) => {
                    if (alert.type === 'urgent') {
                        return (
                            <div key={index} className="bg-red-500 text-white px-2 py-1 rounded-md">
                                {alert.message}
                            </div>
                        );
                    } else if (alert.type === 'warning') {
                        return (
                            <div key={index} className="bg-yellow-400 text-black px-2 py-1 rounded-md">
                                {alert.message}
                            </div>
                        );
                    } else {
                        return (
                            <div key={index} className="bg-blue-200 text-black px-2 py-1 rounded-md">
                                {alert.message}
                            </div>
                        );
                    }
                })}
            </div>
            <div className="flex items-center space-x-4">
                <ServerStatus />
                <WifiIcon className="h-6 w-6"/>
                <SignalIcon className="h-6 w-6"/>
                <BatteryChargingIcon className="h-6 w-6"/>
            </div>
        </div>
    )
}