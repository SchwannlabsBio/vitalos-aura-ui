mod module_manager;
use module_manager::init_module_manager;
mod patient_info;
use patient_info::{update_patient_info, get_patient};

use tauri::{LogicalPosition, LogicalSize, Manager, Position, Size};

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![init_module_manager, update_patient_info, get_patient])
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

