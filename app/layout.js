"use client"

// CSS Imports
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
import {GuardianStore} from "@/context/GuardianContext";
import PatientStore from "@/context/PatientContext";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})


export default function RootLayout({ children }) {
    const moduleStore = ModuleStore(state => state);
    const alertStore = AlertStore(state => state);
    const guardianStore = GuardianStore(state => state);
    const patientStore = PatientStore(state => state);

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

    useEffect(() => {
        const fetchData = async () => {
            const info = await invoke('get_patient');
            if(info) {
                await patientStore.createPatient(info);
            }
        };

        fetchData();
    }, []);

    // Initialise Guardian Link Thread.
    useEffect(() => {
        invoke('init_guardian_manager');
        const unlisten = listen('guardian-message', (event) => {
            let data = event.payload
            guardianStore.updateGuardian(data);
        });

        return () => {
            unlisten.then(f => f());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Initialise Alarm Engine Thread.
    useEffect(() => {
        invoke('init_alarm_manager');
        const unlisten = listen('alarm-message', (event) => {
            let data = event.payload
            alertStore.addAlert(data);
        });

        return () => {
            unlisten.then(f => f());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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

