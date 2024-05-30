import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronsUpDownIcon } from "lucide-react"
import { Switch } from "@/components/ui/switch";


export default function EcgSettings() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 gap-4 w-full">
                <Card>
                    <CardHeader>
                        <CardTitle>Primary Leads</CardTitle>
                        <CardDescription>Select the primary leads used for ECG derivation.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select primary I" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="lead1">Lead I</SelectItem>
                                <SelectItem value="lead2">Lead II</SelectItem>
                                <SelectItem value="lead3">Lead III</SelectItem>
                                <SelectItem value="avr">aVR</SelectItem>
                                <SelectItem value="avl">aVL</SelectItem>
                                <SelectItem value="avf">aVF</SelectItem>
                                <SelectItem value="v1">V1</SelectItem>
                                <SelectItem value="v2">V2</SelectItem>
                                <SelectItem value="v3">V3</SelectItem>
                                <SelectItem value="v4">V4</SelectItem>
                                <SelectItem value="v5">V5</SelectItem>
                                <SelectItem value="v6">V6</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select primary II" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="lead1">Lead I</SelectItem>
                                <SelectItem value="lead2">Lead II</SelectItem>
                                <SelectItem value="lead3">Lead III</SelectItem>
                                <SelectItem value="avr">aVR</SelectItem>
                                <SelectItem value="avl">aVL</SelectItem>
                                <SelectItem value="avf">aVF</SelectItem>
                                <SelectItem value="v1">V1</SelectItem>
                                <SelectItem value="v2">V2</SelectItem>
                                <SelectItem value="v3">V3</SelectItem>
                                <SelectItem value="v4">V4</SelectItem>
                                <SelectItem value="v5">V5</SelectItem>
                                <SelectItem value="v6">V6</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>ECG Leads</CardTitle>
                        <CardDescription>Adjust the zoom level for each ECG lead.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid grid-cols-2 gap-2">
                                <Label>Lead I</Label>
                                <Slider defaultValue={[50]} id="lead1" max={100} />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <Label>Lead II</Label>
                                <Slider defaultValue={[50]} id="lead1" max={100} />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <Label>Lead III</Label>
                                <Slider defaultValue={[50]} id="lead1" max={100} />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <Label>Lead aVL</Label>
                                <Slider defaultValue={[50]} id="lead1" max={100} />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <Label>Lead aVF</Label>
                                <Slider defaultValue={[50]} id="lead1" max={100} />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <Label>Lead aVF</Label>
                                <Slider defaultValue={[50]} id="lead1" max={100} />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <Label>Lead V1</Label>
                                <Slider defaultValue={[50]} id="lead1" max={100} />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <Label>Lead V2</Label>
                                <Slider defaultValue={[50]} id="lead1" max={100} />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <Label>Lead V3</Label>
                                <Slider defaultValue={[50]} id="lead1" max={100} />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <Label>Lead V4</Label>
                                <Slider defaultValue={[50]} id="lead1" max={100} />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <Label>Lead V5</Label>
                                <Slider defaultValue={[50]} id="lead1" max={100} />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <Label>Lead V6</Label>
                                <Slider defaultValue={[50]} id="lead1" max={100} />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>ECG Filters</CardTitle>
                        <CardDescription>Select the appropriate filter for your ECG monitoring.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2">
                        <DropdownMenu className="col-span-2">
                            <DropdownMenuTrigger asChild>
                                <Button className="w-full justify-between" variant="outline">
                                    <span>ECG Filter</span>
                                    <ChevronsUpDownIcon className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem value="monitor">Monitor</DropdownMenuItem>
                                <DropdownMenuItem value="surgical">Surgical</DropdownMenuItem>
                                <DropdownMenuItem value="diagnostic">Diagnostic</DropdownMenuItem>
                                <DropdownMenuItem defaultChecked value="auto">
                                    Auto
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>AC Filter</CardTitle>
                        <CardDescription>Enable or disable the 50/60 Hz filter for ECG.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2">
                            <Switch />
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Button className="mt-4 mr-4">Save</Button>
            <Button className="mt-4 mr-4">Load Defaults</Button>
        </div>
    )
}