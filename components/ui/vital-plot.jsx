import { forwardRef } from "react";
import { Card, CardTitle, CardHeader, CardContent} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SchwannPlot from "@/components/ui/schwann-plot";

let colours = {
    "I": "text-green-500",
    "II": "text-green-500",
    "Pleth": "text-blue-500",
    "Art": "text-red-500",
    "etCO2": "text-yellow-500"
}

// eslint-disable-next-line react/display-name
const VitalPlot = forwardRef(({ children, ...props }, ref) => {
    const {id, name} = props;
    return (
        <Card className={cn("rounded-lg shadow-md h-36 mb-3 p-0 relative")}>
            <img src={"/plot"+name.toLowerCase()+".gif"} className="absolute w-full h-full object-cover p-2"/>
            <div className={cn("relative z-10 flex items-center justify-between p-2 text-sm font-semibold",colours[id])}>
                <div className="flex space-x-4">
                    <span>{name}</span>
                    <span>X1</span>
                    <span>Diagnostic</span>
                    <span>Notch 50Hz</span>
                </div>
                <div className="flex items-center space-x-2">
                    {/*<HeartIcon className="text-red-500 h-4 w-4"/>*/}
                    <span className="bg-yellow-300 text-black px-2 py-1 rounded">**HR/PR Low Limit &lt; 80</span>
                </div>
            </div>
        </Card>

    )
})
export default VitalPlot;