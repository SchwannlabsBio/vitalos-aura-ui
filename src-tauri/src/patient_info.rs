use redis::Commands;

#[derive(serde::Deserialize, serde::Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PatientInfo {
    exists: bool,
    last_name: String,
    first_name: String,
    middle_name: String,
    mrn: String,
    category: String,
    paced: bool,
    dob: Option<String>,
    height: String,
    weight: String,
    bsa: String,
    gender: String,
    notes: String,
}

#[tauri::command]
pub async fn update_patient_info(info: PatientInfo) -> Result<(), String> {
    let client = redis::Client::open("redis://127.0.0.1/").map_err(|e| e.to_string())?;
    let mut con = client.get_connection().map_err(|e| e.to_string())?;

    let key = format!("patient:{}", info.mrn);
    let _: () = con.set(key, serde_json::to_string(&info).map_err(|e| e.to_string())?).map_err(|e| e.to_string())?;

    Ok(())
}
#[tauri::command]
pub async fn get_patient() -> Result<Option<PatientInfo>, String> {
    let client = redis::Client::open("redis://127.0.0.1/").map_err(|e| e.to_string())?;
    let mut con = client.get_connection().map_err(|e| e.to_string())?;

    let keys: Vec<String> = con.keys("patient:*").map_err(|e| e.to_string())?;
    if let Some(first_key) = keys.first() {
        let patient_data: String = con.get(first_key).map_err(|e| e.to_string())?;
        let patient_info: PatientInfo = serde_json::from_str(&patient_data).map_err(|e| e.to_string())?;
        Ok(Some(patient_info))
    } else {
        Ok(None)
    }
}