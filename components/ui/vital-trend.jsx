import { Card, CardTitle, CardHeader, CardContent} from "@/components/ui/card";
import { cn } from "@/lib/utils";

let colours = {
    "I": "text-green-500",
    "II": "text-green-500",
    "ECG": "text-green-500",
    "Pleth": "text-blue-500",
    "Art": "text-red-500",
    "etCO2": "text-yellow-500"
}
export default function VitalTrend({ children, ...props}) {
    return (
        <div>
            <Card className={cn("rounded-lg shadow-md p-2 mb-2")}>
                <CardContent className="h-36 p-0">
                    {/*<LineChart className="w-full h-full" />*/}
                </CardContent>
            </Card>
        </div>
    )
}