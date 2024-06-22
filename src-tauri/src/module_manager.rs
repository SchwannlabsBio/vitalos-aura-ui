use std::collections::HashMap;
use std::thread;
use tauri::Window;
use redis::{Client, Commands, PubSubCommands};
use serde::{Deserialize, Serialize};

#[derive(Clone, Deserialize, Serialize, Debug)]
struct Payload {
    action: String,
    product_id: String,
    slot: String,
    slot_file: String,
    serial_id: Option<String>,
    firmware_revision: Option<String>,
}

#[derive(Clone, Deserialize, Serialize, Debug)]
struct ModulePayload {
    event: String,
    module: Module,
}

#[derive(Clone, Deserialize, Serialize, Debug)]
struct Module {
    name: String,
    slot: String,
    serial_number: String,
    firmware_revision: String,
    status: String,
    ports: String,
}

#[tauri::command]
pub async fn init_module_manager(window: Window) {
    let client = Client::open("redis://127.0.0.1/").expect("Failed to open Redis connection");
    let window_clone = window.clone();
    thread::spawn(move || {
        let mut con = client.get_connection().expect("Failed to get Redis connection");
        let mut pubsub = con.as_pubsub();
        pubsub.subscribe("MOD_MESS").expect("Failed to subscribe to module_updates");

        loop {
            let msg = pubsub.get_message().expect("Failed to get message");
            let payload: String = msg.get_payload().expect("Failed to get payload");
            let module_payload: ModulePayload = serde_json::from_str(&payload).expect("Failed to parse module payload");
            window_clone.emit("module-message", module_payload).expect("Failed to emit module message");
        }
    });
}
