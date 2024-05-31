mod handler;

use std::thread;
use tauri::{Window};
use zmq::{Context, SUB};
use prost::Message;
use serde_json::json;

#[derive(Clone, serde::Deserialize, serde::Serialize, Debug)]
struct Payload {
  action: String,
  productID: String,
  slot: String,
  slotFile: String,
  serialID: Option<String>,
  firmwareRevision: Option<String>,
}

fn main() {
  tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![init_module_manager])
      .run(tauri::generate_context!())
      .expect("failed to run app");
}

#[tauri::command]
async fn init_module_manager(window: Window) {
  let context = Context::new();
  let subscriber = context.socket(SUB).expect("Failed to create SUB socket");

  subscriber.connect("tcp://localhost:5555").expect("Failed to connect to the publisher");
  subscriber.set_subscribe(b"").expect("Failed to subscribe to all topics");

  thread::spawn(move || {
    loop {
      let mut message_payload = subscriber.recv_multipart(0).expect("Failed to receive message");
      let json_data = String::from_utf8(message_payload[1].clone()).expect("Cannot convert to String");
      let payload: Payload = serde_json::from_str(&json_data).expect("Cannot parse json");
      window.emit("module-message", payload).unwrap();
    }
  });
}

