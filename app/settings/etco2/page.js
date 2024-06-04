"use client"
import {ModuleStore} from "@/context/ModuleContext";

export default function Page() {
    const connectedModules = ModuleStore(state => state.activeModules)
    const activeMVM = connectedModules.find(module => module.module === "bis")
    console.log(connectedModules, activeMVM)
    return (
        <>
            <div className="grid gap-6 col-span-5 pt-2">
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