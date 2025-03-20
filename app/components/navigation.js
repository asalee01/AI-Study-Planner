"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const NavigationHeader = () => {
    const pathName = usePathname();
    return (
        <nav className="flex justify-right items-center p-4">
            <Link href="/" className={pathName === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                Home</Link>
            <Link href="/dashboard" className={pathName === "/dashboard" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                Dashboard</Link>
            <Link href="/about" className={pathName === "/about" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                About Us</Link>
            <Link href="/settings" className={pathName === "/settings" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                Settings</Link>
        </nav>
    )
}

export const NavigationFooter = () => {
    return (
        <nav className="flex justify-end items-center p-2 gap-4 w-full mix-blend-lighten">
            <Link href="https://github.com/asalee01" target="_blank" rel="noopener noreferrer">
                <Image src="/gitHublogo.jpeg"
                    alt="GitHub"
                    width={40}
                    height={40}
                    className="rounded-lg shadow-lg hover:opacity-80" />
            </Link>
            <Link href="https://www.linkedin.com/in/athif-saleem-a76747274/" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedInlogo.png" width={40} height = {40} alt="Description" className="w-10 h-10 rounded-lg shadow-lg hover:opacity-80" />
            </Link>
        </nav>
    )
}