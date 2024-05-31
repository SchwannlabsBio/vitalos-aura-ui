"use client"

import { Inter as FontSans } from "next/font/google"
import "./globals.css";


// UI Components Imports
import ThemeProvider from "@/components/theme-provider"
import ModulePopup from "@/components/blocks/ModulePopup";
import TopBar from "@/components/blocks/TopBar";
import SideBar from "@/components/blocks/SideBar";

//Framework Imports
import { useEffect } from "react";
import { invoke } from "@tauri-apps/api";
import { listen } from "@tauri-apps/api/event";

//Library Imports
import ModuleMessageHandler from "@/lib/module-manager";
import { ModuleStore } from "@/context/ModuleContext";
import { AlertStore } from "@/context/AlertContext";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})


export default function RootLayout({ children }) {
    const moduleStore = ModuleStore(state => state);
    const alertStore = AlertStore(state => state);

    // Initialise Module Manager Thread.
    useEffect(() => {
        invoke('init_module_manager');
        const unlisten = listen('module-message', (event) => {
            let data = event.payload
            console.log(data)
            ModuleMessageHandler(data, moduleStore, alertStore)
        });

        return () => {
            unlisten.then(f => f());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <html lang="en">
            <body className={fontSans.className}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <div className="flex flex-col h-screen w-full bg-muted/40">
                    <ModulePopup />
                    <TopBar />
                    <div className="flex h-full">
                        <SideBar />
                        {children}
                    </div>
                </div>
            </ThemeProvider>
            </body>
        </html>
    );
}

