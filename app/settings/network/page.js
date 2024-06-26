"use client"
import { useState } from "react";
import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion";
import { CardContent, CardHeader, CardTitle, Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {Lock} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";

export default function Page() {
    const [isWifiConnected, setWifiConnection] = useState(false);
    const [isEthernetConnected, setEthernetConnection] = useState(false);
    const wifiNetworks = [{
        name: "Hospital 2"
    },{
        name: "Hospital Guest"
    },{
        name: "Hospital Staff"
    }]

    const toggleSwitch = () => {
        setWifiConnection(!isWifiConnected);
    }
    const toggleEthernet = () => {
        setEthernetConnection(!isEthernetConnected);
    }

    return (
        <div className="grid gap-4 col-span-5 pt-2 overflow-y-auto w-full">
            <Card>
                <CardHeader className="flex">
                    <div class="flex flex-row justify-between">
                        <CardTitle className="flex gap-2">
                            <WifiIcon className="h-6 w-6 text-blue-500"/>
                            Wifi
                        </CardTitle>
                        <Switch checked={isWifiConnected} onCheckedChange={toggleSwitch} className="data-[state=checked]:bg-green-500"/>
                    </div>
                    <div className={`flex items-center space-x-1 text-sm text-gray-400`}>
                        <span className={`text-${isWifiConnected ? 'green' : 'red'}-500`}>●</span>
                        <span>{ isWifiConnected ? '' : 'Disconnected' }</span>
                        <span>{ isWifiConnected ? 'Hospital Wi-fi' : '' }</span>
                    </div>
                </CardHeader>
                {isWifiConnected && <CardContent>
                    <Accordion collapsible type="single">
                        <AccordionItem value="wifi">
                            <AccordionTrigger>
                                <span>Available Wi-Fi Networks</span>
                            </AccordionTrigger>
                            <AccordionContent className="p-4">
                                <div class="flex flex-col gap-4">
                                    {wifiNetworks.map((network, index) => (
                                        <>
                                            <div key={index} className="flex items-center justify-between space-x-2">
                                                <div>
                                                    <div className="font-semibold">{network.name}</div>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <WifiIcon className="h-4 h-4 text-blue-500"/>
                                                    <Lock className="h-4 h-4"/>
                                                    <Button variant="outline">Join</Button>
                                                </div>
                                            </div>
                                            <Separator/>
                                        </>
                                        ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>}
            </Card>
            <Card>
                <CardHeader className="flex">
                    <div class="flex flex-row justify-between">
                        <CardTitle className="flex gap-2">
                            <NetworkIcon className="h-6 w-6 text-blue-500"/>
                            Ethernet
                        </CardTitle>
                        <Switch checked={isEthernetConnected} onCheckedChange={toggleEthernet} className="data-[state=checked]:bg-green-500"/>
                    </div>
                    <div className={`flex items-center space-x-1 text-sm text-gray-400`}>
                        <span className={`text-${isEthernetConnected ? 'green' : 'red'}-500`}>●</span>
                        <span>{ isEthernetConnected ? '' : 'Disconnected' }</span>
                        <span>{ isEthernetConnected ? 'Hospital LAN | 10.86.32.186' : '' }</span>
                    </div>
                </CardHeader>
                {false && <CardContent>
                    <Accordion collapsible type="single">
                        <AccordionItem value="ethernet">
                            <AccordionTrigger>
                                <span>Available Wi-Fi Networks</span>
                            </AccordionTrigger>
                            <AccordionContent className="p-4">
                                <div class="flex flex-col gap-4">
                                    {wifiNetworks.map((network, index) => (
                                        <>
                                            <div key={index} className="flex items-center justify-between space-x-2">
                                                <div>
                                                    <div className="font-semibold">{network.name}</div>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <WifiIcon className="h-4 h-4 text-blue-500"/>
                                                    <Lock className="h-4 h-4"/>
                                                    <Button variant="outline">Join</Button>
                                                </div>
                                            </div>
                                            <Separator/>
                                        </>
                                        ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>}
            </Card>
        </div>
    )
}

function WifiIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 20h.01"/>
            <path d="M2 8.82a15 15 0 0 1 20 0" />
            <path d="M5 12.859a10 10 0 0 1 14 0" />
            <path d="M8.5 16.429a5 5 0 0 1 7 0" />
        </svg>
    )
}

function NetworkIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="16" y="16" width="6" height="6" rx="1" />
            <rect x="2" y="16" width="6" height="6" rx="1" />
            <rect x="9" y="2" width="6" height="6" rx="1" />
            <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
            <path d="M12 12V8" />
        </svg>
    )
}