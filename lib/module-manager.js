export default function ModuleMessageHandler({event, module}, { setModulePopupState, addNewModule, editModule }, alertContext){
    switch (event) {
        case "MOD_CONN": {
            let alertID =  Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
            addNewModule({
                module: module.name,
                status: "connected",
                slot: module.slot,
                serialID: module.serial_number,
                firmwareRevision: module.firmware_revision,
            })
            setModulePopupState(true)
            alertContext.addAlert({
                id: alertID,
                message: module.name.toUpperCase() + " Module Connected",
                type: "info",
                level: 1.5
            });
            setTimeout(() => {
                alertContext.removeAlert(alertID);
            }, 30000);
            break;
        }

        case "MOD_INIT": {
            let alertID =  Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
            editModule({
                module: module.name,
                status: 'initialised',
                slot: module.slot,
                serialID: module.serial_number,
                firmwareRevision: module.firmware_revision,
            })
            setModulePopupState(true)
            alertContext.addAlert({
                id: alertID,
                level: 2,
                message: module.name.toUpperCase() + " Module Initialised",
                type: "info"
            });
            alertContext.removeAlertByMessage(module.name.toUpperCase() + " Module Connected");
            setTimeout(() => {
                alertContext.removeAlert(alertID);
                setModulePopupState(false)
            }, 10000);
            break
        }
    }
}



