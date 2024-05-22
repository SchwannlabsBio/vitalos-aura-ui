// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::thread;
use tauri::{Window};
use zmq::{Context, SUB};

#[derive(Clone, serde::Serialize)]
struct Payload {
  message: String,
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

  subscriber.connect("tcp://localhost:5556").expect("Failed to connect to the publisher");

  let topics = vec!["MODULE_MESSAGE", "ANOTHER_TOPIC"];
  for topic in topics {
    subscriber.set_subscribe(topic.as_bytes()).expect("Failed to subscribe to topic");
  }

  thread::spawn(move || {
    loop {
      let message = subscriber.recv_string(0).expect("Failed to receive message").unwrap();
      window.emit("module-message", Payload { message: message.into() }).unwrap();
    }
  });
}