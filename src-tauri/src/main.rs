use std::thread;

use tauri::{LogicalPosition, LogicalSize, Manager, Position, Size, Window, WindowUrl};
use zmq::{Context, SUB};

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
            if let Ok(Some(monitor)) = main_window.current_monitor() {
                let screen_size = monitor.size();
                let scale_factor = monitor.scale_factor() as u32;
                println!("Screen size: {:?}, Scale factor: {:?}", screen_size, scale_factor);

                // Calculate the logical size with scale factor 1.0
                let logical_width = screen_size.width / scale_factor;
                let logical_height = screen_size.height / scale_factor;
                main_window.set_size(Size::Logical(LogicalSize {
                    width: logical_width.into(),
                    height: logical_height.into(),
                })).unwrap();

                main_window.set_position(Position::Logical(LogicalPosition {
                    x: 0.0,
                    y: 0.0,
                })).unwrap();
            }
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

#[tauri::command]
fn plot_information(handle: tauri::AppHandle, data: serde_json::Value) {

    // Convert to HashMap
    if let Some(map) = data.as_object() {
        for (key, value) in map.iter() {
            if let Some(obj) = value.as_object() {
                let left = obj.get("left").and_then(|v| v.as_f64()).unwrap_or_default();
                let top = obj.get("top").and_then(|v| v.as_f64()).unwrap_or_default();
                let width = obj.get("width").and_then(|v| v.as_f64()).unwrap_or_default();
                let height = obj.get("height").and_then(|v| v.as_f64()).unwrap_or_default();

                let _ = tauri::WindowBuilder::new(
                  &handle,
                  key, /* the unique window label */
                    WindowUrl::External("https://tauri.app/".parse().unwrap()),
                )
                    .inner_size(width, height)
                    .position(left, top)
                    .decorations(false)
                    .always_on_top(true)
                    .build()
                    .unwrap();
            }
        }
    }
}

