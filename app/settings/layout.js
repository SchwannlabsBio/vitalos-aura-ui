"use client"
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { ModuleStore } from "@/context/ModuleContext";

let activeClassName = "flex items-center text-primary px-3 py-2 rounded-lg transition-muted-all bg-muted hover:text-primary";
let inActiveClassName = "flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary"
export default function Layout({to, children}) {
    const connectedModules = ModuleStore(state => state.activeModules)
    const className = 0 ? activeClassName : inActiveClassName;
    return (
        <main className="flex flex-col w-full bg-muted/40 p-4 gap-8 p-10">
            <div className="w-full gap-2">
                <h1 className="text-3xl font-bold pl-2">Settings</h1>
            </div>
            <div className="grid grid-cols-8 w-full items-start gap-6">
                <nav className="grid gap-1 col-span-1 text-sm text-muted-foreground">
                    <div className="grid gap-1">
                        <h1 className="text-xs font-bold text-primary uppercase px-3 py-2">Device Settings</h1>
                        <Link className={className} href="/settings">General</Link>
                        <Link className={className} href="/network">Network</Link>
                        <Link className={className} href="/cellular">Cellular</Link>
                        <Link className={className} href="/display">Display</Link>
                        <Link className={className} href="/battery">Battery</Link>
                    </div>
                    <Separator />
                    <div className="grid gap-1">
                        <h1 className="text-xs font-bold text-primary uppercase px-3 py-2">Guardian Settings</h1>
                        <Link className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary" href="/settings">Account</Link>
                        <Link className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary" href="/settings">Server Options</Link>
                        <Link className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary" href="/settings">Permissions</Link>
                        <Link className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary" href="/settings">Billing</Link>
                    </div>
                    <Separator />
                    <div className="grid gap-1">
                        <h1 className="text-xs font-bold text-primary uppercase px-3 py-2">Alarm Settings</h1>
                        <Link className={className} href="/settings/alarm/thresholds">Thresholds</Link>
                        <Link className={className} href="/settings/alarm/volume">Volume</Link>
                        <Link className={className} href="/settings/alarm/lamps">Lamp</Link>
                    </div>
                    <Separator />
                    {connectedModules.length > 0 ?
                        <div className="grid gap-1">
                            <h1 className="text-xs font-bold text-primary uppercase px-3 py-2">Module Settings</h1>
                            {
                                connectedModules.map((module, index) => {
                                    return (
                                        <Link
                                            className={className}
                                            key={index}
                                            href={"/settings/" + module.module.toLowerCase()}>
                                                {module.module.toUpperCase() + " Module"}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        : null
                    }
                </nav>
                {children}
            </div>
        </main>
    )

}