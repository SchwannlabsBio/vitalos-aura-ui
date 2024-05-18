import { Card, CardTitle, CardHeader, CardContent} from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
                <CardHeader>
                    <CardTitle className={cn("text-sm",colours[props.name])}>
                        {props.name || "I"}
                    </CardTitle>
                </CardHeader>
                <CardContent className="h-16 p-0">
                    {/*<LineChart className="w-full h-full" />*/}
                </CardContent>
            </Card>
        </div>
    )
}