import Link from "next/link";
import { MdWarning, MdCheck, MdCode, MdPsychology, MdDesktopWindows, MdDevices } from "react-icons/md";
import { RiShieldCheckFill, RiComputerFill } from "react-icons/ri";
import NavLink from "../components/nav-link";

export default function Home() {
  return (
    <main className="space-y-4 sm:space-y-8">

      <div className="relative mb-6 sm:mb-12">
        <div className="deconstructed-border bg-gray-900 text-white p-4 sm:p-8 mb-4 transform -rotate-2">
          <h1 className="postmodern-text text-2xl sm:text-4xl md:text-6xl glitch-text" data-text="SYSTEM BREACH">
            SYSTEM BREACH
          </h1>
        </div>
        <div className="deconstructed-border bg-gray-100 text-black p-3 sm:p-4 transform rotate-1 translate-x-4 sm:translate-x-8">
          <p className="postmodern-text text-lg sm:text-xl">
            unauthorized access detected
          </p>
        </div>
      </div>


      <div className="relative mb-8 sm:mb-16">
        <div className="deconstructed-border bg-gray-50 text-black p-4 sm:p-8 transform rotate-1">
          <div className="deconstructed-border bg-gray-800 text-white p-4 sm:p-6 mb-6 sm:mb-8 transform -rotate-2">
            <h2 className="postmodern-text text-xl sm:text-3xl glitch-text" data-text="Mission Briefing">[!] Mission Briefing</h2>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div className="deconstructed-border bg-gray-800 text-white p-4 sm:p-6 transform rotate-1 translate-x-2 sm:translate-x-4">
              <div className="flex items-start gap-3 sm:gap-6">
                <MdWarning className="w-8 h-8 sm:w-12 sm:h-12 transform -rotate-12 flex-shrink-0 animate-pulse" />
                <div>
                  <span className="postmodern-text text-xl sm:text-2xl block mb-2">[ERROR]</span>
                  <span className="text-lg sm:text-xl">Trapped in infinite <em className="postmodern-text text-white bg-gray-700 px-2 py-1">LOGIN LOOP</em></span>
                </div>
              </div>
            </div>
            
            <div className="deconstructed-border bg-gray-200 text-black p-4 sm:p-6 transform -rotate-1 -translate-x-2 sm:-translate-x-4">
              <div className="flex items-start gap-3 sm:gap-6">
                <RiShieldCheckFill className="w-8 h-8 sm:w-12 sm:h-12 transform rotate-45 flex-shrink-0" />
                <div>
                  <span className="postmodern-text text-xl sm:text-2xl block mb-2">[CLEARANCE]</span>
                  <span className="text-lg sm:text-xl">Research <strong className="postmodern-text text-black bg-gray-300 px-2 py-1">AUTHORIZED</strong></span>
                </div>
              </div>
            </div>
            
            <div className="deconstructed-border bg-gray-700 text-white p-4 sm:p-6 transform rotate-1 translate-x-1 sm:translate-x-2">
              <div className="flex items-start gap-3 sm:gap-6">
                <MdCheck className="w-8 h-8 sm:w-12 sm:h-12 transform -rotate-90 flex-shrink-0" />
                <div>
                  <span className="postmodern-text text-xl sm:text-2xl block mb-2">[OBJECTIVE]</span>
                  <span className="text-lg sm:text-xl">Find exploits to <span className="postmodern-text text-white bg-gray-600 px-2 py-1">ESCAPE</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="deconstructed-border bg-gray-700 text-white p-4 sm:p-6 mt-6 sm:mt-8 transform rotate-2">
            <p className="postmodern-text text-base sm:text-lg mb-4">Progression Syntax:</p>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <div className="deconstructed-border bg-gray-200 text-black px-3 py-2 sm:px-6 sm:py-3 postmodern-text text-sm sm:text-base transform -rotate-3">
                /web/logtwo
              </div>
              <div className="deconstructed-border bg-gray-300 text-black px-3 py-2 sm:px-6 sm:py-3 postmodern-text text-sm sm:text-base transform rotate-1">
                /logic/logtwo
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-8 sm:mb-16">
        <div className="deconstructed-border bg-gray-900 text-white p-4 sm:p-8 transform -rotate-1">
          <div className="deconstructed-border bg-gray-100 text-black p-4 sm:p-6 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4 transform rotate-2">
            <MdCode className="w-8 h-8 sm:w-12 sm:h-12 transform -rotate-45 flex-shrink-0" />
            <h2 className="postmodern-text text-lg sm:text-2xl">Web Exploitation</h2>
          </div>
          <p className="text-base sm:text-xl mb-6 sm:mb-10 font-medium leading-relaxed">
            Browser-based security challenges requiring client-side analysis
          </p>
          <NavLink 
            className="asymmetric-button bg-gray-200 text-black p-4 sm:p-6 block text-center postmodern-text text-lg sm:text-xl mb-6 sm:mb-8" 
            href="/challenges/web/logone"
          >
            Start /logone
          </NavLink>
          <div className="deconstructed-border bg-gray-300 text-black p-3 sm:p-4 flex items-center gap-2 sm:gap-3 transform -rotate-1">
            <MdDesktopWindows className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <p className="postmodern-text text-xs sm:text-sm">Desktop Recommended</p>
          </div>
        </div>

        <div className="deconstructed-border bg-gray-100 text-black p-4 sm:p-8 transform rotate-1 sm:translate-y-8">
          <div className="deconstructed-border bg-gray-800 text-white p-4 sm:p-6 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4 transform -rotate-1">
            <MdPsychology className="w-8 h-8 sm:w-12 sm:h-12 transform rotate-180 flex-shrink-0" />
            <h2 className="postmodern-text text-lg sm:text-2xl">Logic Puzzles</h2>
          </div>
          <p className="text-base sm:text-xl mb-6 sm:mb-10 font-medium leading-relaxed">
            Algorithm-based challenges testing reasoning skills
          </p>
          <NavLink 
            className="asymmetric-button bg-gray-700 text-white p-4 sm:p-6 block text-center postmodern-text text-lg sm:text-xl mb-6 sm:mb-8" 
            href="/challenges/logic/logone"
          >
            Start /logone
          </NavLink>
          <div className="deconstructed-border bg-gray-600 text-white p-3 sm:p-4 flex items-center gap-2 sm:gap-3 transform rotate-2">
            <MdDevices className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <p className="postmodern-text text-xs sm:text-sm">Platform Agnostic</p>
          </div>
        </div>
      </div>


      <div className="deconstructed-border bg-gray-800 text-white p-4 sm:p-6 transform -rotate-0.5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <RiComputerFill className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse transform rotate-12 flex-shrink-0" />
            <span className="postmodern-text text-lg sm:text-xl">System Ready</span>
          </div>
          <span className="postmodern-text text-lg sm:text-xl text-white">Awaiting Input</span>
        </div>
      </div>
    </main>
  );
}