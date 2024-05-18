/**
 * v0 by Vercel.
 * @see https://v0.dev/t/br9KNkQnRA5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white">
            <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
                <div className="flex items-center space-x-4">
                    <span className="font-bold">John Doe</span>
                    <span className="text-sm">Adult</span>
                    <span className="text-sm">12:34 PM</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                    <div className="bg-[#FFD119] text-gray-900 px-2 py-1 rounded-md">High BP</div>
                    <div className="bg-[#19D1E2] text-gray-900 px-2 py-1 rounded-md">Low Temp</div>
                </div>
                <div className="flex items-center space-x-2">
                    <BatteryIcon className="h-6 w-6" />
                    <WifiIcon className="h-6 w-6" />
                    <SignalIcon className="h-6 w-6" />
                </div>
            </div>
            <div className="flex h-full">
                <div className="flex flex-col items-center justify-center w-16 bg-gray-800 space-y-2 p-4">
                    <Button className="rounded-full" size="icon" variant="ghost">
                        <div className="bg-white h-6 w-6 rounded" />
                    </Button>
                    <Button className="rounded-full" size="icon" variant="ghost">
                        <div className="bg-white h-6 w-6 rounded" />
                    </Button>
                    <Button className="rounded-full" size="icon" variant="ghost">
                        <div className="bg-white h-6 w-6 rounded" />
                    </Button>
                    <Button className="rounded-full" size="icon" variant="ghost">
                        <div className="bg-white h-6 w-6 rounded" />
                    </Button>
                    <Button className="rounded-full" size="icon" variant="ghost">
                        <div className="bg-white h-6 w-6 rounded" />
                    </Button>
                    <Button className="rounded-full" size="icon" variant="ghost">
                        <div className="bg-white h-6 w-6 rounded" />
                    </Button>
                    <HomeIcon className="text-white h-6 w-6" />
                </div>
                <div className="flex-1 grid grid-cols-3 gap-4 p-4">
                    <div className="col-span-2">
                        <div className="bg-gray-800 h-32 rounded-lg mb-4" />
                        <div className="bg-gray-800 h-32 rounded-lg mb-4" />
                        <div className="bg-gray-800 h-32 rounded-lg mb-4" />
                        <div className="bg-gray-800 h-32 rounded-lg" />
                    </div>
                    <div className="space-y-4">
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[#19E28B] font-bold text-sm">ECG</span>
                                <SignalIcon className="text-[#19E28B] h-6 w-6" />
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-[#19E28B] font-bold text-6xl">120</span>
                                <span className="text-[#19E28B] text-sm">bpm</span>
                            </div>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[#19D1E2] font-bold text-sm">SpO2</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-[#19D1E2] font-bold text-6xl">98</span>
                                <span className="text-[#19D1E2] text-sm">%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-16 bg-gray-800 space-y-2 p-4">
                    <div className="bg-[#19E28B] h-10 w-10 rounded" />
                    <div className="bg-[#19D1E2] h-10 w-10 rounded" />
                    <div className="bg-[#FFD119] h-10 w-10 rounded" />
                </div>
            </div>
        </div>
    )
}

function BatteryIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
            <line x1="22" x2="22" y1="11" y2="13" />
        </svg>
    )
}


function HomeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function SignalIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 20h.01" />
            <path d="M7 20v-4" />
            <path d="M12 20v-8" />
            <path d="M17 20V8" />
            <path d="M22 4v16" />
        </svg>
    )
}


function WifiIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 20h.01" />
            <path d="M2 8.82a15 15 0 0 1 20 0" />
            <path d="M5 12.859a10 10 0 0 1 14 0" />
            <path d="M8.5 16.429a5 5 0 0 1 7 0" />
        </svg>
    )
}