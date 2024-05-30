export default function ModuleMessageHandler(payload, { setModulePopupState, addNewModule, editModule }, { addAlert, removeAlert }){
    console.log(payload)
    switch (payload.action) {
        case "MOD_CONN": {
            addNewModule({
                module: payload.productID,
                status: payload.action,
                slot: payload.slot,
                slot_file: payload.slotFile,
                serialID: null,
                firmwareRevision: null,
            })
            setModulePopupState(true)
            addAlert({
                message: payload.productID + " Module Connected",
                type: "info"
            });
            setTimeout(() => {
                removeAlert(payload.productID + " Module Connected");
            }, 30000);
            break;
        }
        case "MOD_INIT": {
            editModule({
                module: payload.productID,
                status: payload.action,
                slot: payload.slot,
                slot_file: payload.slotFile,
                serialID: payload.serialID,
                firmwareRevision: payload.firmwareRevision,
            })
            addAlert({
                message: payload.productID + " Module Initialised",
                type: "info"
            });
            removeAlert(payload.productID + " Module Connected");
            setTimeout(() => {
                removeAlert(payload.productID + " Module Initialised");
            }, 30000);
            break
        }
    }
}



