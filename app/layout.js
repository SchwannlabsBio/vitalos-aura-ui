// CSS Imports
import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import Init from "@/components/init";
import dynamic from "next/dynamic";
const ThemeProvider = dynamic(() => import('@/components/theme-provider'), { ssr: false });




const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})


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
                    <div className="flex flex-col h-screen w-full bg-muted/40">
                        <Init>
                            {children}
                        </Init>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

