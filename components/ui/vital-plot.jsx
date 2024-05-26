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
            <Card className={cn("rounded-lg shadow-md h-48")}>
                <CardContent className="h-44 p-2">
                    <iframe
                        src="/schwann-plots.html"
                        className="w-full h-full"
                        style={{
                            border: 'none',
                        }}
                    ></iframe>
                </CardContent>
            </Card>
        </div>
    )
}