"use client"
import { Card, CardTitle, CardHeader, CardContent} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {useEffect, useState} from "react";

let colours = {
    "I": "text-green-500",
    "II": "text-green-500",
    "ECG": "text-green-500",
    "Pleth": "text-blue-500",
    "Art": "text-red-500",
    "etCO2": "text-yellow-500"
}

let bgcolours = {
    "I": "bg-green-500",
    "II": "bg-green-500",
    "ECG": "bg-green-500",
    "Pleth": "bg-blue-500",
    "Art": "bg-red-500",
    "etCO2": "bg-yellow-500"
}

let units = {
    "ECG": "bpm",
    "Pleth": "%",
    "Art": "HHmg",
    "etCO2": "%"
}
export default function VitalTrend({ children, ...props}) {
    const {id, name} = props;
    const [value, setValue] = useState(100);

    useEffect(() => {
        // Create an interval to update the value every second
        const interval = setInterval(() => {
            setValue(Math.floor(Math.random() * (100 - 90 + 1) + 90));
        }, 5000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty array indicates this effect does not depend on any prop or state
    return (
        <div>
            <Card className={cn("rounded-lg shadow-md bg-black mb-3 p-0 relative", name==="ECG" ? "h-[18.75rem]" : "h-36")}>
                <div className="absolute top-4 left-4">
                    <div className={"font-bold " + colours[name]}>{name}</div>
                    <div className="text-sm">{units[name]}</div>
                </div>
                <div className={"absolute top-1/2 left-1/4 transform -translate-y-1/2 text-center text-gray-500"}>
                    <div className="text-xs">150</div>
                    <div className="text-xs">40</div>
                </div>
                <div
                    className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center " + colours[name]}>
                    <div className="text-6xl font-bold">{value}</div>
                </div>
                <div className="absolute bottom-4 right-4 text-green-500">
                    {/*<SignalIcon className="w-6 h-6"/>*/}
                </div>
                <div className={"absolute top-0 right-0 h-full w-2 rounded-r-lg " + bgcolours[name]}    style={{
                    animation: 'heightChange 20s forwards'
                }}/>
            </Card>
        </div>
    )
}