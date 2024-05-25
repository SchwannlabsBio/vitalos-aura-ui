import Clock from "@/components/clock";
import { WifiIcon, BatteryChargingIcon, SignalIcon } from "lucide-react";

export default function TopBar() {
    return (
        <div className="flex items-center sticky justify-between bg-background px-4 py-6 text-white">
            <div className="flex items-center space-x-4">
                <Clock />
                <span className="font-light">Ziyad Hameed</span>
                <span className="font-light">Adult</span>
            </div>
            <div className="flex items-center space-x-4 text-bold">
                <div className="bg-red-500 text-white px-2 py-1 rounded-md">High BP</div>
                <div className="bg-yellow-400 text-black px-2 py-1 rounded-md">Low Temp</div>
            </div>
            <div className="flex items-center space-x-4">
                <WifiIcon className="h-6 w-6"/>
                <SignalIcon className="h-6 w-6"/>
                <BatteryChargingIcon className="h-6 w-6"/>
            </div>
        </div>
    )
}