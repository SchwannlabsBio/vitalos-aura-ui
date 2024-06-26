"use client"
import ModuleMessageHandler from "@/lib/module-manager";
import { ModuleStore } from "@/context/ModuleContext";
import { AlertStore } from "@/context/AlertContext";
import PatientStore from "@/context/PatientContext";


import {useEffect} from "react";
import {invoke} from "@tauri-apps/api";
import {listen} from "@tauri-apps/api/event";

import dynamic from "next/dynamic"
const ModulePopup = dynamic(() => import('@/components/blocks/ModulePopup'), { ssr: false });
const ThemeProvider = dynamic(() => import('@/components/theme-provider'), { ssr: false });
const TopBar = dynamic(() => import('@/components/blocks/TopBar'), { ssr: false });
const SideBar = dynamic(() => import('@/components/blocks/SideBar'), { ssr: false });

export default function Init({children}) {
    const moduleStore = ModuleStore(state => state);
    const alertStore = AlertStore(state => state);
    const patientStore = PatientStore(state => state);


    useEffect(() => {
        invoke('init_module_manager');
        const unlisten = listen('module-message', (event) => {
            let data = event.payload
            ModuleMessageHandler(data, moduleStore, alertStore)
        });

        return () => {
            unlisten.then(f => f());
        };
    }, []);

    // Initialise Patient Manager Thread.
    useEffect(() => {
        const fetchData = async () => {
            const info = await invoke('get_patient');
            if(info) {
                await patientStore.createPatient(info);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <ModulePopup />
            <TopBar />
            <div className="flex h-full overflow-y-auto">
                <SideBar />
                {children}
            </div>
        </>
    )
}