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
    return (
        <div ref={ref}>
            <Card className={cn("rounded-lg shadow-md pb-2 mb-2")}>
                <CardContent className="h-40 p-1">
                    <SchwannPlot />
                    {children}
                </CardContent>
            </Card>
        </div>
    )
})
export default VitalPlot;