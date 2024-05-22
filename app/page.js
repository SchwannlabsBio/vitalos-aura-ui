"use client"

import TopBar from "@/components/blocks/TopBar";
import SideBar from "@/components/blocks/SideBar";
import VitalPlot from "@/components/ui/vital-plot";
import VitalTrend from "@/components/ui/vital-trend";
import ModuleInitialised from "@/components/blocks/ModuleInitialised";

export default function Page() {
    return (
        <div className="flex flex-col h-screen w-full bg-muted/40">
            <ModuleInitialised />
            <TopBar />
            <div className="flex h-full">
                <SideBar />
                <div className="flex-1 grid grid-cols-4 gap-2 p-4">
                    <div className="col-span-3">
                        <VitalPlot name="I"/>
                        <VitalPlot name="II"/>
                        <VitalPlot name="Pleth"/>
                        <VitalPlot name="Art"/>
                        <VitalPlot name="etCO2"/>
                    </div>
                    <div className="col-span-1">
                        <VitalTrend name="ECG"/>
                        <VitalTrend name="II"/>
                        <VitalTrend name="Pleth"/>
                        <VitalTrend name="Art"/>
                        <VitalTrend name="etCO2"/>
                    </div>
                </div>
            </div>
        </div>
    )
}