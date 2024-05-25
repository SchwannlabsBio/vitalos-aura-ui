// import { invoke } from "@tauri-apps/api";
// import { listen } from "@tauri-apps/api/event";
// import { ModuleStore } from "@/context/ModuleContext";
//
// export function ModuleManager() {
//     const moduleManagerState = ModuleStore(state => state);
//
//     invoke('init_module_manager');
//
//     const unlisten = listen('module-message', (event) => {
//         let message = event.payload.message.split(" ");
//         let moduleName = message[0];
//         let moduleMessage = message[1];
//         console.log(moduleManagerState)
//         switch (moduleMessage) {
//             case "MODULE_CONN":
//                 moduleManagerState.addNewModule({
//                     module: moduleName,
//                     status: moduleMessage
//                 })
//                 moduleManagerState.setModulePopupState(true)
//                 break;
//         }
//
//     });
//     return () => {
//         unlisten.then(f => f());
//     };
// }