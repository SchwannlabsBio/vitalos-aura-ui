mod handler;

use std::thread;
use tauri::{Window,Manager};
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
      .setup(|app| {
        let main_window = app.get_window("main").unwrap();
        main_window.with_webview(|webview| {
          #[cfg(windows)]
          unsafe {
            // see https://docs.rs/webview2-com/0.19.1/webview2_com/Microsoft/Web/WebView2/Win32/struct.ICoreWebView2Controller.html
            webview.controller().SetZoomFactor(0.8).unwrap();
          }
        });
        Ok(())
      })
      .run(tauri::generate_context!())
      .expect("failed to run app");
}

#[tauri::command]
async fn init_module_manager(window: Window) {
  let context = Context::new();
  let subscriber = context.socket(SUB).expect("Failed to create SUB socket");

  subscriber.connect("tcp://localhost:5555").expect("Failed to connect to the publisher");
  subscriber.set_subscribe(b"MOD-MESS").expect("Failed to subscribe to all topics");

  thread::spawn(move || {
    loop {
      let mut message_payload = subscriber.recv_multipart(0).expect("Failed to receive message");
      let json_data = String::from_utf8(message_payload[1].clone()).expect("Cannot convert to String");
      let payload: Payload = serde_json::from_str(&json_data).expect("Cannot parse json");
      window.emit("module-message", payload).unwrap();
    }
  });
}
#[tauri::command]
async fn init_guardian_manager(window: Window) {
  let context = Context::new();
  let subscriber = context.socket(SUB).expect("Failed to create SUB socket");

  subscriber.connect("tcp://localhost:5555").expect("Failed to connect to the publisher");
  subscriber.set_subscribe(b"GUARD-MESS").expect("Failed to subscribe to all topics");

  thread::spawn(move || {
    loop {
      let mut message_payload = subscriber.recv_multipart(0).expect("Failed to receive message");
      let json_data = String::from_utf8(message_payload[1].clone()).expect("Cannot convert to String");
      let payload: Payload = serde_json::from_str(&json_data).expect("Cannot parse json");
      window.emit("guardian-message", payload).unwrap();
    }
  });
}

