export default function ModuleMessageHandler(payload, { setModulePopupState, addNewModule, editModule }, { addAlert, removeAlert }){
    switch (payload.action) {
        case "MOD_CONN": {
            addNewModule({
                module: payload.productID,
                status: "connected",
                slot: payload.slot,
                slot_file: payload.slotFile,
                serialID: null,
                firmwareRevision: null,
            })
            setModulePopupState(true)
            addAlert({
                message: payload.productID.toUpperCase() + " Module Connected",
                type: "info"
            });
            setTimeout(() => {
                removeAlert(payload.productID.toUpperCase()  + " Module Connected");
            }, 30000);
            break;
        }
        case "MOD_INIT": {
            editModule({
                module: payload.productID,
                status: 'initialised',
                slot: payload.slot,
                slot_file: payload.slotFile,
                serialID: payload.serialID,
                firmwareRevision: payload.firmwareRevision,
            })
            setModulePopupState(true)
            addAlert({
                message: payload.productID.toUpperCase() + " Module Initialised",
                type: "info"
            });
            removeAlert(payload.productID.toUpperCase() + " Module Connected");
            setTimeout(() => {
                removeAlert(payload.productID.toUpperCase() + " Module Initialised");
            }, 30000);
            break
        }
    }
}



