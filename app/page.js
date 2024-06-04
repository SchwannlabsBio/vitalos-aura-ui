"use client"
// UI Imports
import { useEffect, useRef, useState } from 'react';
import VitalPlot from "@/components/ui/vital-plot";
import VitalTrend from "@/components/ui/vital-trend";
import { invoke } from "@tauri-apps/api";



export default function Page() {
    const plotRefI = useRef(null);
    const plotRefII = useRef(null);
    const plotRefPleth = useRef(null);
    const plotRefArt = useRef(null);
    const plotRefCO2 = useRef(null);

    const [dimensions, setDimensions] = useState({});

    useEffect(() => {
        const dimensions = {}
        console.log(plotRefI)
        if(plotRefI.current) {
            dimensions['I'] = plotRefI.current.getBoundingClientRect();
        }
        if(plotRefII.current) {
            dimensions['II'] = plotRefII.current.getBoundingClientRect();
        }
        if(plotRefPleth.current) {
            dimensions['Pleth'] = plotRefPleth.current.getBoundingClientRect();
        }
        if(plotRefArt.current) {
            dimensions['Art'] = plotRefArt.current.getBoundingClientRect();
        }
        if(plotRefCO2.current) {
            dimensions['etCO2'] = plotRefCO2.current.getBoundingClientRect();
        }
        setDimensions(dimensions);
        console.log(dimensions['I'])
        invoke('plot_information', {data: dimensions})
            .then(r => console.log(r))
            .catch(e => console.error(e))
    }, []);

    return (
        <div className="flex-1 grid grid-cols-4 gap-2 p-4">
            <div className="col-span-3">
                <VitalPlot id="I" name="I" ref={plotRefI}/>
                <VitalPlot id="II" name="II" ref={plotRefII}/>
                <VitalPlot id="Pleth" name="Pleth" ref={plotRefPleth}/>
                <VitalPlot id="Art" name="Art" ref={plotRefArt}/>
                <VitalPlot id="etCO2" name="etCO2" ref={plotRefCO2}/>
            </div>
            <div className="col-span-1">
                <VitalTrend name="ECG"/>
                <VitalTrend name="II"/>
                <VitalTrend name="Pleth"/>
                <VitalTrend name="Art"/>
                <VitalTrend name="etCO2"/>
            </div>
        </div>
    )
}