import Link from "next/link";
import { LineChart, Settings, Users2, UserPlus, UserMinus, Monitor, BookUser, BellMinus, BellOff } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator} from "@/components/ui/separator";
export default function SideBar() {
    return (
        <aside className="flex flex-col items-center justify-center w-24 space-y-2 p-4 bg-background">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-300 text-accent transition-colors hover:text-foreground md:h-9 md:w-9"
                            >
                                <BellMinus className="h-5 w-5"/>
                                <span className="sr-only">Acknowledge Alarm</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Acknowledge Alarm</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>

                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-300 text-muted transition-colors hover:text-foreground md:h-9 md:w-9"
                            >
                                <BellOff className="h-5 w-5"/>
                                <span className="sr-only">Mute Alarms</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Devices</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <Separator />
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-9"
                            >
                                <BookUser className="h-5 w-5"/>
                                <span className="sr-only">Healthcare Professionals</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Healthcare Professionals</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-9 md:w-9"
                            >
                                <LineChart className="h-5 w-5"/>
                                <span className="sr-only">Analytics</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Analytics</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <Separator />
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/add-patient"
                                className="flex h-16 w-16 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-9"
                            >
                                <UserPlus className="h-5 w-5"/>
                                <span className="sr-only">Admit Patient</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Admit Patient</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/add-patient"
                                className="flex h-16 w-16 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-9"
                            >
                                <UserMinus className="h-5 w-5"/>
                                <span className="sr-only">Discharge</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Discharge Patient</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
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