import { MdPrivacyTip, MdStorage, MdSecurity } from "react-icons/md";
import { RiShieldCheckFill } from "react-icons/ri";

export const metadata = { title: "Privacy Notice" };

export default async function Page() {
  return (
    <main className="space-y-4 sm:space-y-8">
      {/* Deconstructed Header */}
      <div className="relative mb-6 sm:mb-12">
        <div className="deconstructed-border bg-gray-900 text-white p-4 sm:p-8 mb-4 transform -rotate-2">
          <h1 className="postmodern-text text-2xl sm:text-4xl md:text-6xl glitch-text" data-text="PRIVACY NOTICE">
            PRIVACY NOTICE
          </h1>
        </div>
        <div className="deconstructed-border bg-gray-100 text-black p-3 sm:p-4 transform rotate-1 translate-x-4 sm:translate-x-8">
          <p className="postmodern-text text-lg sm:text-xl">
            data protection protocol
          </p>
        </div>
      </div>

      {/* Privacy Content */}
      <div className="deconstructed-border bg-gray-50 text-black p-4 sm:p-8 transform rotate-1">
        <div className="deconstructed-border bg-gray-800 text-white p-4 sm:p-6 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4 transform -rotate-2">
          <MdPrivacyTip className="w-6 h-6 sm:w-10 sm:h-10 transform rotate-45 flex-shrink-0" />
          <h2 className="postmodern-text text-lg sm:text-2xl">Data Collection</h2>
        </div>
        
        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg font-medium">
          <div className="deconstructed-border bg-gray-700 text-white p-4 sm:p-6 transform rotate-1 translate-x-1 sm:translate-x-2">
            <div className="flex gap-3 sm:gap-6 items-start">
              <MdStorage className="w-6 h-6 sm:w-8 sm:h-8 transform -rotate-12 flex-shrink-0" />
              <span>This website does <strong className="postmodern-text">NOT COLLECT</strong> or store any personal information on a server or database.</span>
            </div>
          </div>
          
          <div className="deconstructed-border bg-gray-200 text-black p-4 sm:p-6 transform -rotate-1 -translate-x-1 sm:-translate-x-2">
            <div className="flex gap-3 sm:gap-6 items-start">
              <RiShieldCheckFill className="w-6 h-6 sm:w-8 sm:h-8 transform rotate-45 flex-shrink-0" />
              <span>All user progress, answers, and settings are saved <em className="postmodern-text">LOCALLY</em> in your browser's storage.</span>
            </div>
          </div>
          
          <div className="deconstructed-border bg-gray-600 text-white p-4 sm:p-6 transform rotate-1 translate-x-1 sm:translate-x-2">
            <div className="flex gap-3 sm:gap-6 items-start">
              <MdSecurity className="w-6 h-6 sm:w-8 sm:h-8 transform -rotate-90 flex-shrink-0" />
              <span>Your data is <strong className="postmodern-text">NEVER TRANSMITTED</strong> to or shared with any third party.</span>
            </div>
          </div>
        </div>

        <div className="deconstructed-border bg-gray-700 text-white p-4 sm:p-6 mt-6 sm:mt-8 transform rotate-2">
          <p className="postmodern-text text-base sm:text-lg mb-4">Quick Tip:</p>
          <div className="deconstructed-border bg-gray-200 text-black px-3 py-2 sm:px-6 sm:py-3 postmodern-text text-sm sm:text-base transform -rotate-3">
            Clear browser cookies to restart progress
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="deconstructed-border bg-gray-800 text-white p-4 sm:p-6 transform -rotate-0.5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <RiShieldCheckFill className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse transform rotate-12 flex-shrink-0" />
            <span className="postmodern-text text-lg sm:text-xl">Privacy Secured</span>
          </div>
          <span className="postmodern-text text-lg sm:text-xl text-white">Zero Data Collection</span>
        </div>
      </div>
    </main>
  );
}