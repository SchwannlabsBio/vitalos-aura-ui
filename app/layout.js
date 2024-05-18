import { Inter as FontSans } from "next/font/google"
import ThemeProvider from "@/components/theme-provider"

import "./globals.css";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata = {
    title: "Schwannlabs Aura",
    description: "A Patient Monitoring Solution.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={fontSans.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
