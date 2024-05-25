"use client"

import { Inter as FontSans } from "next/font/google"
import "./globals.css";


// UI Components Imports
import ThemeProvider from "@/components/theme-provider"
import ModulePopup from "@/components/blocks/ModulePopup";
import TopBar from "@/components/blocks/TopBar";
import SideBar from "@/components/blocks/SideBar";
import {ModuleStore} from "@/context/ModuleContext";
import {useEffect} from "react";
import {invoke} from "@tauri-apps/api";
import {listen} from "@tauri-apps/api/event";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})


export default function RootLayout({ children }) {
    const { setModulePopupState, addNewModule } = ModuleStore(state => state);

    // Initialise Module Manager Thread.
    useEffect(() => {
        invoke('init_module_manager');
        const unlisten = listen('module-message', (event) => {
            let [module, message] = event.payload.message.split(" ")
            if(message === "MODULE_CONN") {
                addNewModule({
                    module: module,
                    status: message
                })
                setModulePopupState(true)
            }
            else if(message === "MODULE_DISCONN") {
                setModulePopupState(false)
            }
        });

        return () => {
            unlisten.then(f => f());
        };

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
