import Link from "next/link";
import "./globals.css";
import { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineForum, MdPrivacyTip } from "react-icons/md";
import { RiTerminalBoxFill } from "react-icons/ri";
import NavLink from "../components/nav-link";

export const metadata = {
  title: "loginDooM",
  description: "Escape this login DOOM right now!",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-black relative">
        <div className="min-h-screen p-2 sm:p-4 md:p-8">
          <div className="w-full max-w-7xl mx-auto">

            <div className="relative mb-6 sm:mb-12">
              <div className="deconstructed-border bg-gray-900 text-white p-3 sm:p-6 md:p-12 transform -rotate-1">
                <div className="flex flex-col items-center gap-3 sm:gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2 md:gap-6 order-2 md:order-1">
                    <div className="w-3 h-6 sm:w-4 sm:h-8 bg-gray-800 transform rotate-12"></div>
                    <div className="w-6 h-3 sm:w-8 sm:h-4 bg-gray-200 border-2 border-gray-700 transform -rotate-6"></div>
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-600 transform rotate-45"></div>
                  </div>
                  <NavLink
                    href="/"
                    className="postmodern-text text-2xl sm:text-4xl md:text-6xl hover:text-white transition-colors glitch-text order-1 md:order-2"
                  >
                    <span data-text="loginDooM">login<span className="text-white">DooM</span></span>
                  </NavLink>
                  <div className="deconstructed-border bg-gray-200 text-black px-3 py-2 sm:px-6 sm:py-3 transform rotate-3 order-3">
                    <RiTerminalBoxFill className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
              </div>
            </div>
            

            <div className="deconstructed-border bg-gray-50 p-2 sm:p-4 md:p-12 min-h-[400px] sm:min-h-[600px] transform rotate-0.5">
              <div className="bg-white p-3 sm:p-6 md:p-12 h-full transform -rotate-0.5">
                {children}
              </div>
            </div>
          </div>
        </div>


        <div className="sm:hidden mt-8 p-4">
          <div className="deconstructed-border bg-gray-800 text-white p-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <NavLink 
                href="/privacy-notice" 
                className="asymmetric-button bg-gray-200 text-black px-3 py-2 postmodern-text text-xs"
              >
                Privacy
              </NavLink>
              <Link
                href="https://github.com/kuwarte/loginDooM"
                className="asymmetric-button bg-gray-700 text-white px-3 py-2 postmodern-text text-xs"
              >
                GitHub
              </Link>
              <Link 
                href="https://typecircle.vercel.app" 
                className="asymmetric-button bg-gray-600 text-white px-3 py-2 postmodern-text text-xs"
              >
                Discuss
              </Link>
            </div>
          </div>
        </div>


        <div className="hidden sm:flex fixed bottom-2 right-2 sm:bottom-4 sm:right-4 flex-col gap-2 sm:gap-3 z-20">
          <NavLink 
            href="/privacy-notice" 
            className="asymmetric-button bg-gray-200 text-black px-2 py-2 sm:px-4 sm:py-3 postmodern-text text-xs sm:text-sm"
          >
            Privacy
          </NavLink>
          <Link
            href="https://github.com/kuwarte/loginDooM"
            className="asymmetric-button bg-gray-800 text-white px-2 py-2 sm:px-4 sm:py-3 postmodern-text text-xs sm:text-sm transform translate-x-2 sm:translate-x-4"
          >
            GitHub
          </Link>
          <Link 
            href="https://typecircle.vercel.app" 
            className="asymmetric-button bg-gray-700 text-white px-2 py-2 sm:px-4 sm:py-3 postmodern-text text-xs sm:text-sm transform -translate-x-1 sm:-translate-x-2"
          >
            Discuss
          </Link>
        </div>
      </body>
    </html>
  );
}
