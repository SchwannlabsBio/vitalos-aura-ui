import Link from "next/link";
import {Separator} from "@/components/ui/separator";

export default function Layout({children}) {
    return (
        <main className="flex w-full flex-col bg-muted/40 p-4 gap-8 p-10">
            <div className="grid w-full max-w-6xl gap-2">
                <h1 className="text-3xl font-bold">Settings</h1>
            </div>
            <div className="grid w-full max-w-6xl items-start gap-6 grid-cols-6">
                <nav className="grid gap-1 col-span-1 text-sm text-muted-foreground">
                    <div className="grid gap-1">
                        <h1 class="text-xs font-bold text-primary uppercase px-3 py-2">Device Settings</h1>
                        <Link className="flex items-center text-primary px-3 py-2 rounded-lg transition-muted-all bg-muted hover:text-primary" href="/settings">General</Link>
                        <Link className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary" href="/settings">Network</Link>
                        <Link className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary" href="/settings">Cellular</Link>
                        <Link className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary" href="/settings">Display</Link>
                        <Link className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary" href="/settings">Battery</Link>
                    </div>
                    <Separator />
                    <div className="grid gap-1">
                        <h1 class="text-xs font-bold text-primary uppercase px-3 py-2">Guardian Settings</h1>
                        <Link className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary" href="/settings">Account</Link>
                        <Link className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary" href="/settings">Server Options</Link>
                        <Link className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary" href="/settings">Permissions</Link>
                        <Link className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary" href="/settings">Billing</Link>
                    </div>
                    <Separator />
                    <div className="grid gap-1">
                        <h1 class="text-xs font-bold text-primary uppercase px-3 py-2">Alarm Settings</h1>
                        <Link className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary" href="/settings">Thresholds</Link>
                        <Link className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary" href="/settings">Volume</Link>
                        <Link className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary" href="/settings">Lamp</Link>
                    </div>
                    <Separator />
                    <div className="grid gap-1">
                        <h1 class="text-xs font-bold text-primary uppercase px-3 py-2">Module Settings</h1>
                        <Link
                            className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary"
                            href="/settings/mvm">Multi Vitals Module</Link>
                        <Link
                            className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary"
                            href="/settings/etco2">etCO2 Module</Link>
                        <Link
                            className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary"
                            href="/settings/co">CO Module</Link>
                        <Link
                            className="flex items-center px-3 py-2 rounded-lg transition-muted-foreground hover:text-primary"
                            href="/settings/bis">BIS Module</Link>
                    </div>
                    <Separator/>
                </nav>
                <div className="grid gap-6">
                    {children}
                </div>
            </div>
        </main>
    )

}