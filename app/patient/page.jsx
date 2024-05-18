"use client"

import TopBar from "@/components/blocks/TopBar";
import SideBar from "@/components/blocks/SideBar";

export default function Page() {
    return (
        <div className="flex flex-col h-screen w-full bg-muted/40">
            <TopBar />
            <div className="flex h-full">
                <SideBar />
            </div>
        </div>
    )
}