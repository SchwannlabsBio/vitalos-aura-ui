/**
 * v0 by Vercel.
 * @see https://v0.dev/t/32nPx1LWLOq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
// UI Components
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"

// UI Blocks
import TopBar from "@/components/blocks/TopBar";
import SideBar from "@/components/blocks/SideBar";


export default function Component() {
    return (
        <div className="flex flex-col h-screen w-full">
            <TopBar/>
            <div className="flex h-full">
                <SideBar/>
                <Card className="w-full bg-muted/40">
                    <CardHeader>
                        <CardTitle>Patient Information</CardTitle>
                        <CardDescription>Please fill out the following information for the patient.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last Name</Label>
                                <Input id="last-name" placeholder="Enter last name"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First Name</Label>
                                <Input id="first-name" placeholder="Enter first name"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="middle-name">Middle Name</Label>
                                <Input id="middle-name" placeholder="Enter middle name" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="mrn">MRN</Label>
                            <Input id="mrn" placeholder="Enter MRN" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select id="category">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="adult">Adult</SelectItem>
                                    <SelectItem value="neonatal">Neonatal</SelectItem>
                                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Label htmlFor="paced">Paced</Label>
                            <Checkbox id="paced" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="dob">Date of Birth</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button className="w-full justify-start text-left font-normal" variant="outline">
                                        <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                                        Select date
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent align="start" className="w-auto p-0">
                                    <Calendar initialFocus mode="single" />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="height">Height</Label>
                                <Input id="height" placeholder="Enter height" type="number" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="weight">Weight</Label>
                                <Input id="weight" placeholder="Enter weight" type="number" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bsa">BSA</Label>
                                <Input id="bsa" placeholder="Enter BSA" type="number" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="gender">Gender</Label>
                            <Select id="gender">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="notes">Notes</Label>
                            <Textarea id="notes" placeholder="Enter any additional notes" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Save Patient</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>

    )
}

function CalendarDaysIcon(props) {
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
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
        </svg>
    )
}