
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Link from "next/link";

export default function Page() {
    return (
        <div className="grid col-span-5 overflow-y-auto">
            <Card>
                <CardHeader className="text-center">
                    <img src="/aura.png" alt="MacBook Pro" className="mx-auto h-36 w-36 mb-4"/>
                    <CardTitle>Schwannlabs Aura</CardTitle>
                    <CardDescription className="text-gray-400">16-inch, Jun 2024</CardDescription>
                </CardHeader>
                <CardContent className="rounded-lg p-4 space-y-4">
                    <div className="flex justify-between">
                        <span>Name</span>
                        <span>ICU-4 Aura</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Serial number</span>
                        <span>C9YXWRM2F7</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Limited Warranty</span>
                        <div className="flex items-center space-x-2">
                            <span>Expires 19 Dec 2025</span>
                            <Button variant="outline" className="text-gray-400">
                                Details...
                            </Button>
                        </div>
                    </div>
                </CardContent>
                <CardContent className="space-y-4">
                    <div>
                        <CardTitle className="text-lg font-semibold">vitalOS</CardTitle>
                        <div className="rounded-lg p-4 flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <span>vitalOS Flemming</span>
                            </div>
                            <span>Version 1.6</span>
                        </div>
                    </div>
                    <div>
                        <CardTitle className="text-lg font-semibold">Storage</CardTitle>
                        <div className=" rounded-lg p-4 flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <span>Aura HD</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <span>68.01 GB available of 99.66 GB</span>
                                <Button variant="outline" className="text-gray-400">
                                    Storage Settings...
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="text-center">
                    <Button variant="outline" className="text-gray-400">
                        System Report...
                    </Button>
                </CardFooter>
                <CardFooter className="text-center text-gray-400 text-sm space-y-1">
                    <div>
                        <Link href="#" className="underline" prefetch={false}>
                            Software Licence Agreement
                        </Link>{" "}
                        -
                        <Link href="#" className="underline" prefetch={false}>
                            {" "}
                            Regulatory Certification
                        </Link>{" "}
                        -
                        <Link href="#" className="underline" prefetch={false}>
                            {" "}
                            ENERGY STAR® Compliance
                        </Link>{" "}
                        -
                        <Link href="#" className="underline" prefetch={false}>
                            {" "}
                            Licence Agreement
                        </Link>
                        <span>{"\n™ and © 2023-2024 Schwannlabs Inc. All Rights Reserved."}</span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
