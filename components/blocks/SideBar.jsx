"use client"
//Framework Imports
import Link from "next/link";
import PatientStore from "@/context/PatientContext";
import {usePathname, useRouter} from "next/navigation";

//UI Component Imports
import {BellMinus, BellOff, Bell, BellDot, MonitorPause, Calculator, RotateCcw, UserPlus2, LineChart, Settings, UserMinus, UserPlus, Printer} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

export default function SideBar() {
    const patientStore = PatientStore(state => state);
    const path = usePathname()
    const router = useRouter()

    return (
        <aside className="flex flex-col sticky items-center justify-center w-24 space-y-2 p-4 bg-background">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                {NavItems["alarms"].map((item, index) => (
                    (
                        <TooltipProvider key={index}>
                            <Tooltip>
                                <TooltipTrigger
                                    className={item.baseClass}
                                    onClick={() => item.onClick(router)}
                                >
                                    <Button
                                        asChild
                                    >
                                        <item.icon/>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right">{item.name}</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )
                ))}
                <Separator/>
                {NavItems["home"].map((item, index) => (
                    (
                        <TooltipProvider key={index}>
                            <Tooltip>
                                <TooltipTrigger
                                    className={item.baseClass}
                                    onClick={() => item.onClick(router)}
                                >
                                    <Button
                                        asChild
                                    >
                                        <item.icon/>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right">{item.name}</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )
                ))}
                <Separator/>
                {NavItems["patient"].map((item, index) => (
                    (
                        <TooltipProvider key={index}>
                            <Tooltip>
                                <TooltipTrigger
                                    className={cn(item.baseClass, item.show(patientStore.patientInfo.exists))}
                                    onClick={() => item.onClick(router)}
                                >
                                    <Button
                                        asChild
                                    >
                                        <item.icon/>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right">{item.name}</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )
                ))}
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/settings"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-9"
                            >
                                <Settings className="h-5 w-5"/>
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    )
}

const NavItems = {
    "alarms": [
        {
            name: "Acknowledge Alarm",
            onClick: (router) => router.push("/settings"),
            icon: () => <BellMinus className="h-6 w-6"/>,
            baseClass: "flex items-center justify-center rounded-lg bg-yellow-300 text-accent transition-colors hover:text-foreground h-9 w-9"

        },
        {
            name: "Mute Alarm",
            onClick: (router) => router.push("/"),
            icon: () => <BellOff className="h-6 w-6"/>,
            baseClass: "flex h-9 w-9 items-center justify-center rounded-lg bg-red-300 text-muted transition-colors hover:text-foreground md:h-9 md:w-9"

        },
        {
            name: "Pause Alarm",
            onClick: (router) => router.push("/"),
            icon: () => <Bell className="h-6 w-6"/>,
            baseClass: "flex h-16 w-16 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-9"

        },
        {
            name: "Setup Alarm",
            onClick: (router) => router.push("/"),
            icon: () => <BellDot className="h-6 w-6"/>,
            baseClass: "flex h-16 w-16 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-9"

        },
    ],
    "home": [
        {
            name: "Live View",
            onClick: (router) => router.push("/"),
            icon: () => <LineChart className="h-6 w-6"/>,
            baseClass: "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground"
        },
        {
            name: "Freeze Waveform",
            onClick: (router) => router.push("/"),
            icon: () => <MonitorPause className="h-6 w-6"/>,
            baseClass: "flex h-16 w-16 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-9"
        },
        {
            name: "Calculator",
            onClick: (router) => router.push("/"),
            icon: () => <Calculator className="h-6 w-6"/>,
            baseClass: "flex h-16 w-16 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-9"
        },
        {
            name: "Print Report",
            onClick: (router) => router.push("/"),
            icon: () => <Printer className="h-6 w-6"/>,
            baseClass: "flex h-16 w-16 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-9"
        },
        {
            name: "History",
            onClick: (router) => router.push("/"),
            icon: () => <RotateCcw className="h-6 w-6"/>,
            baseClass: "flex h-16 w-16 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-9"
        },
    ],
    "patient": [
        {
            name: "Admit Patient",
            onClick: (router) => router.push("/add-patient"),
            icon: () => <UserPlus className="h-6 w-6"/>,
            show: (exists) => exists ? "hidden" : "",
            baseClass: "flex h-16 w-16 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-9"
        },
        {
            name: "Quick Admit Patient",
            onClick: (router) => router.push("/"),
            icon: () => <UserPlus2 className="h-6 w-6"/>,
            show: (exists) => exists ? "" : "hidden",
            baseClass: "flex h-16 w-16 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-9"

        },
        {
            name: "Discharge Patient",
            onClick: (router) => router.push("/"),
            icon: () => <UserMinus className="h-6 w-6"/>,
            show: (exists) => exists ? "" : "hidden",
            baseClass: "flex h-16 w-16 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-9"

        },
    ],
    "ecg": []
}
