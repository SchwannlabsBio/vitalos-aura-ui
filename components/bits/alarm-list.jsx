import {AlertStore} from "@/context/AlertContext";

export default function AlarmList() {
    const alerts = AlertStore(state => state.alerts);
    return (
        <div className="flex items-center space-x-4 text-bold">
            {alerts.map((alert, index) => {
                if (alert.kind === 'urgent') {
                    return (
                        <div key={index} className={`text-white px-2 py-1 rounded-md ${alert.level > 8.5 ? "animate-blink" : "bg-red-500"}`}>
                            {alert.message}
                        </div>
                    );
                } else if (alert.kind === 'warning') {
                    return (
                        <div key={index} className="bg-yellow-400 text-black px-2 py-1 rounded-md">
                            {alert.message}
                        </div>
                    );
                } else {
                    return (
                        <div key={index} className="bg-blue-200 text-black px-2 py-1 rounded-md">
                            {alert.message}
                        </div>
                    );
                }
            })}
        </div>
    )
}