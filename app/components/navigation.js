"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavigationHeader = () => {
    const pathname = usePathname();
    return (
        <nav className="fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center p-4 shadow-lg">
             <Link href = "/" className =  {pathname === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
            Home
            </Link>
            <Link href = "/about" className = {pathname === "/about" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
            About Us
            </Link>
            <Link href = "/settings" className = {pathname.startsWith("/settings") ? "font-bold mr-4" : "text-blue-500 mr-4"}>
            Settings
            </Link>
            <Link href = "/dashboard" className = {pathname.startsWith("/dashboard") ? "font-bold mr-4" : "text-blue-500 mr-4"}>
            Dashboard
            </Link>
        </nav>
    )
}

export const NavigationFooter = () => {
    return (
        <nav className="flex justify-center items-center p-4">
            <Link href = "https://github.com/asalee01">
            Github
            </Link>
            <Link href = "https://www.linkedin.com/in/athif-saleem-a76747274/">
            LinkedIn
            </Link>
        </nav>
    )
}