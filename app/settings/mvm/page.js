"use client"
import EcgSettings from "@/components/blocks/ecgSettings";


export default function Page() {
    const connectedModules = ModuleStore(state => state.activeModules)
    const activeMVM = connectedModules.find(module => module.module === "mvm")
    console.log(connectedModules, activeMVM)
    return (
        <>
        <div className="grid gap-6 col-span-5 pt-2">
            <MVMTabs/>
        </div>
        <div className="col-span-2 pt-2 mr-2">
            <div className="space-y-2">
                <span> Module Info </span>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Serial ID</span>
                    <span className="text-sm font-medium">{(activeMVM && activeMVM.serialID) || ""}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Firmware Revision</span>
                    <span className="text-sm font-medium">{(activeMVM && activeMVM.firmwareRevision) || ""}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Slot</span>
                    <span className="text-sm font-medium">{(activeMVM && activeMVM.slot) || ""}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Warranty Status</span>
                    <span className="text-sm font-medium text-green-500">Active</span>
                </div>
            </div>
        </div>
        </>
    )
}

import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {ModuleStore} from "@/context/ModuleContext";

export function MVMTabs() {
    return (
        <Tabs defaultValue="ecg" className="w-auto">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="ecg">ECG</TabsTrigger>
                <TabsTrigger value="nibp">NIBP</TabsTrigger>
                <TabsTrigger value="spo2">SpO2</TabsTrigger>
                <TabsTrigger value="temp">Temperature</TabsTrigger>
            </TabsList>
            <TabsContent value="ecg">
                <EcgSettings />
            </TabsContent>
            <TabsContent value="nibp">
                <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="spo2">
                <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="temp">
                <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
