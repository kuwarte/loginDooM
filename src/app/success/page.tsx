import { requireUpTo } from "@/lib/progress";
import Image from "next/image";
import { redirect } from "next/navigation";
import { MdCheckCircle, MdSecurity, MdCelebration } from "react-icons/md";
import { RiShieldCheckFill, RiComputerFill } from "react-icons/ri";
import NavLink from "../../components/nav-link";

export const metadata = { title: "Success — All Stages Cleared" };

export default async function Page() {
  const webGate = await requireUpTo(6, "web", true);
  const logicGate = await requireUpTo(6, "logic", true);

  if (!webGate.ok && !logicGate.ok) {
    redirect("/");
  }

  return (
    <main className="space-y-4 sm:space-y-8">
      {/* Victory Header */}
      <div className="relative mb-6 sm:mb-12">
        <div className="deconstructed-border bg-gray-900 text-white p-4 sm:p-8 mb-4 transform -rotate-2">
          <h1 className="postmodern-text text-2xl sm:text-4xl md:text-6xl glitch-text" data-text="SYSTEM LIBERATED">
            SYSTEM LIBERATED
          </h1>
        </div>
        <div className="deconstructed-border bg-gray-100 text-black p-3 sm:p-4 transform rotate-1 translate-x-4 sm:translate-x-8">
          <p className="postmodern-text text-lg sm:text-xl">
            login loop terminated
          </p>
        </div>
      </div>

      {/* Success Content */}
      <div className="deconstructed-border bg-gray-50 text-black p-4 sm:p-8 transform rotate-1">
        <div className="deconstructed-border bg-gray-800 text-white p-4 sm:p-6 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4 transform -rotate-2">
          <MdCelebration className="w-6 h-6 sm:w-10 sm:h-10 transform rotate-45 flex-shrink-0" />
          <h2 className="postmodern-text text-lg sm:text-2xl">Mission Complete</h2>
        </div>
        
        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg font-medium mb-6 sm:mb-8">
          <div className="deconstructed-border bg-gray-700 text-white p-4 sm:p-6 transform rotate-1 translate-x-1 sm:translate-x-2">
            <div className="flex gap-3 sm:gap-6 items-start">
              <MdCheckCircle className="w-6 h-6 sm:w-8 sm:h-8 transform -rotate-12 flex-shrink-0" />
              <span>You have successfully <strong className="postmodern-text">ESCAPED</strong> the infinite login loop.</span>
            </div>
          </div>
          
          <div className="deconstructed-border bg-gray-200 text-black p-4 sm:p-6 transform -rotate-1 -translate-x-1 sm:-translate-x-2">
            <div className="flex gap-3 sm:gap-6 items-start">
              <RiShieldCheckFill className="w-6 h-6 sm:w-8 sm:h-8 transform rotate-45 flex-shrink-0" />
              <span>All security challenges have been <em className="postmodern-text">CONQUERED</em>.</span>
            </div>
          </div>
          
          <div className="deconstructed-border bg-gray-600 text-white p-4 sm:p-6 transform rotate-1 translate-x-1 sm:translate-x-2">
            <div className="flex gap-3 sm:gap-6 items-start">
              <MdSecurity className="w-6 h-6 sm:w-8 sm:h-8 transform -rotate-90 flex-shrink-0" />
              <span>Your cybersecurity skills have been <strong className="postmodern-text">VALIDATED</strong>.</span>
            </div>
          </div>
        </div>

        {/* Success Image */}
        <div className="deconstructed-border bg-gray-800 p-4 sm:p-6 mb-6 sm:mb-8 transform -rotate-1">
          <Image
            src="/success.gif"
            alt="Mission accomplished!"
            width={480}
            height={320}
            className="w-full max-w-md mx-auto deconstructed-border"
          />
        </div>

        <div className="deconstructed-border bg-gray-700 text-white p-4 sm:p-6 transform rotate-2">
          <p className="postmodern-text text-base sm:text-lg mb-4">Return to Base:</p>
          <NavLink 
            href="/"
            className="deconstructed-border bg-gray-200 text-black px-4 py-3 sm:px-6 sm:py-3 postmodern-text text-sm sm:text-base transform -rotate-1 inline-block"
          >
            {'>> loginDOOM Terminal'}
          </NavLink>
        </div>
      </div>

      {/* Final Status */}
      <div className="deconstructed-border bg-gray-800 text-white p-4 sm:p-6 transform -rotate-0.5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <RiComputerFill className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse transform rotate-12 flex-shrink-0" />
            <span className="postmodern-text text-lg sm:text-xl">Freedom Achieved</span>
          </div>
          <span className="postmodern-text text-lg sm:text-xl text-white">Loop Terminated</span>
        </div>
      </div>
    </main>
  );
}