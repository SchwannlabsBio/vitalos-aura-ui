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
export default function VitalPlot({ children, ...props}) {
    return (
        <div>
            <Card className={cn("rounded-lg shadow-md p-2 mb-2")}>
                <CardContent className="h-36 p-0">
                    {props.name === `I` ? <SchwannPlot/> : <div></div>}
                </CardContent>
            </Card>
        </div>
    )
}