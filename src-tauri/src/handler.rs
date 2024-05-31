// use tauri::Window;
// use prost::Message;
// use serde_json::json;
// use crate::{ModuleData, Payload};
//
// pub fn handle_mod_conn(module_data_bytes: Vec<u8>, window: &Window) {
//     match ModuleData::decode(&*module_data_bytes) {
//         Ok(module_data) => {
//             if let Some(module_data::Data::ConnData(conn_data)) = module_data.data {
//                 let payload = json!({
//                     "message": "MOD_CONN",
//                     "slot": conn_data.slot,
//                     "module_type": format!("{:?}", module_data.module_type),
//                     "slot_file": conn_data.slot_file,
//                 });
//                 window.emit("module-message", Payload { message: payload.to_string() }).unwrap();
//             } else {
//                 eprintln!("ModuleData does not contain ConnData");
//             }
//         }
//         Err(e) => eprintln!("Failed to deserialize ModuleData: {:?}", e),
//     }
// }
//
// // Implement other handlers...
