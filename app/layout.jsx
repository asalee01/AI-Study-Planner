import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationHeader, NavigationFooter } from "./components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white p-4 shadow-lg p-6 rounded-lg shadow-2xl backdrop-blur-md">
          <NavigationHeader />
        </header>
        <footer className="fixed h-12.1 bottom-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white p-2 shadow-lg rounded-lg shadow-2xl backdrop-blur-md">
          <NavigationFooter />
        </footer>
        {children}
      </body>
    </html>
  );
}
