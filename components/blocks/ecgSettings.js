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
                        <CardTitle>Leads Settings</CardTitle>
                        <CardDescription>Settings related to the ECG leads</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Lead Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="adult">Adult</SelectItem>
                                <SelectItem value="neonatal">Neonatal</SelectItem>
                                <SelectItem value="pediatric">Pediatric</SelectItem>
                            </SelectContent>
                        </Select>
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
                        <CardTitle>Pacemaker Settings</CardTitle>
                        <CardDescription>Settings related to Pace detection</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div class="grid grid-cols-2 gap-4">
                            <Label>Paced</Label>
                            <Switch />
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <Label>Pacer Rejection</Label>
                            <Switch />
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Waveform Settings</CardTitle>
                        <CardDescription>Adjust settings related to the ECG Waveform</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="grid grid-cols-2 gap-8">
                            <div class="col-span-1 space-y-2">
                                <Label>Waveform Format</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Cabrera" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="default">Standalone</SelectItem>
                                        <SelectItem value="cabrera">Cabrera</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div class="col-span-1 space-y-2">
                                <Label>Waveform View</Label>
                                <Select className="col-span-1">
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Half Screen" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="full">Full Screen</SelectItem>
                                        <SelectItem value="half">Half Screen</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Label className="col-span-2">Gain Settings</Label>
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
                            <div className="grid grid-cols-2 gap-4">
                                <Label className="col-span-2">Speed Settings</Label>
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
                            <div class="col-span-1 space-y-2">
                                <Label>Waveform Filters</Label>
                                <Select className="col-span-1">
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Diagnostic" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="full">Monitor</SelectItem>
                                        <SelectItem value="half">Surgical</SelectItem>
                                        <SelectItem value="half">Diagnostic</SelectItem>
                                        <SelectItem value="half">Auto</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div class="col-span-1 space-y-2">
                                <div className="grid space-y-2">
                                    <Label className="pb-4">Notch Filter</Label>
                                    <Switch />
                                </div>
                            </div>
                            <div class="col-span-1 space-y-2">
                                <Label>Original</Label>
                                <img src="/ploti-setting.gif" className="object-cover h-fit w-fit"/>
                            </div>
                            <div class="col-span-1 space-y-2">
                                <Label>Filtered</Label>
                                <img src="/ploti-setting.gif" className="object-cover h-fit w-fit"/>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Analysis</CardTitle>
                        <CardDescription>Select the appropriate filter for your ECG monitoring.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid space-y-2">
                        <div className="grid space-y-2">
                            <Label className="pb-4">Smart Lead-off detection</Label>
                            <Switch/>
                        </div>
                        <div className="grid space-y-2">
                            <Label className="pb-4">Alarm Intelligence</Label>
                            <Switch/>
                        </div>
                        <div className="grid space-y-2">
                            <Label className="pb-4">Analysis Source</Label>
                            <Switch/>
                        </div>
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