"use client"
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import PatientStore from "@/context/PatientContext"; // Adjust the path accordingly

// UI Imports
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {Calendar} from "@/components/ui/calendar";
export default function Page() {
    const { updatePatientInfo } = PatientStore();
    const [formData, setFormData] = useState({
        exists: false,
        lastName: "",
        firstName: "",
        middleName: "",
        mrn: "",
        category: "",
        paced: false,
        dob: null,
        height: "",
        weight: "",
        bsa: "",
        gender: "",
        notes: ""
    });

    const handleInputChange = (field) => (e) => {
        setFormData({
            ...formData,
            [field]: e.target.value
        });
    };

    const handleSelectChange = (field) => (value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    const handleCheckboxChange = (field) => (e) => {
        setFormData({
            ...formData,
            [field]: e.target.checked
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        formData.exists = true;
        updatePatientInfo(formData);
    };

    return (
        <form className="w-full " onSubmit={handleSubmit}>
            <Card className="w-full bg-muted/40">
                <CardHeader>
                    <CardTitle>Patient Information</CardTitle>
                    <CardDescription>Please fill out the following information for the patient.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" value={formData.lastName} onChange={handleInputChange("lastName")} placeholder="Enter last name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" value={formData.firstName} onChange={handleInputChange("firstName")} placeholder="Enter first name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="middle-name">Middle Name</Label>
                            <Input id="middle-name" value={formData.middleName} onChange={handleInputChange("middleName")} placeholder="Enter middle name" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="mrn">MRN</Label>
                        <Input id="mrn" value={formData.mrn} onChange={handleInputChange("mrn")} placeholder="Enter MRN" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select id="category" value={formData.category} onValueChange={handleSelectChange("category")}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Adult">Adult</SelectItem>
                                <SelectItem value="Neonatal">Neonatal</SelectItem>
                                <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Label htmlFor="paced">Paced</Label>
                        <Checkbox id="paced" onChange={handleCheckboxChange("paced")} />
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
                                <Calendar initialFocus mode="single" selected={formData.dob} onSelect={(date) => setFormData({ ...formData, dob: date })} />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="height">Height</Label>
                            <Input id="height" value={formData.height} onChange={handleInputChange("height")} placeholder="Enter height" type="number" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="weight">Weight</Label>
                            <Input id="weight" value={formData.weight} onChange={handleInputChange("weight")} placeholder="Enter weight" type="number" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="bsa">BSA</Label>
                            <Input id="bsa" value={formData.bsa} onChange={handleInputChange("bsa")} placeholder="Enter BSA" type="number" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select id="gender" value={formData.gender} onValueChange={handleSelectChange("gender")}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Male">Male</SelectItem>
                                <SelectItem value="Female">Female</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="notes">Notes</Label>
                        <Textarea id="notes" value={formData.notes} onChange={handleInputChange("notes")} placeholder="Enter any additional notes" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit">Save Patient</Button>
                </CardFooter>
            </Card>
        </form>
    );
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
    );
}
