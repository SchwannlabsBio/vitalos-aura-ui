import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { Server } from "lucide-react"
import { GuardianStore } from "@/context/GuardianContext"
import { cn } from "@/lib/utils"

const randomColours = ["bg-green-300", "bg-yellow-300", "bg-red-300", "bg-indigo-300"]
export default function ServerStatus() {
    const {guardian} = GuardianStore(state => state);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Server className="h-6 w-6">Server Status</Server>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Server Status</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <div className="grid gap-4 p-4">
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Connection Status</div>
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            {guardian.connected ? (<div className="h-2 w-2 rounded-full bg-green-500"/>) : (
                                <div className="h-2 w-2 rounded-full bg-red-500"/>)}
                            <span>{guardian.connected ? " Connected" : " Disconnected"}</span>
                        </div>
                    </div>
                    {!guardian.connected ? null : (
                        <>
                            <div className="flex items-center justify-between">
                                <div className="text-sm font-medium">Server:</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{guardian.address}</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm font-medium">Ping</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{guardian.ping} ms</div>
                            </div>
                            <DropdownMenuSeparator/>
                            <div className="flex items-center justify-between">
                                <div className="text-sm font-medium">Connected Users:</div>
                                {guardian && guardian.connectedClients.map((user, index) => (
                                    <div key={index} className="flex items-center justify-between text-black">
                                        <div
                                            className={cn("w-6 h-6 flex justify-center rounded-full", randomColours[Math.floor(Math.random() * randomColours.length)])}>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger>{user[0]}</TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{user}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}