"use client";
import { RiComputerFill } from "react-icons/ri";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex items-center justify-center">
      <div className="deconstructed-border bg-gray-800 text-white p-6 sm:p-8 transform rotate-1">
        <div className="flex items-center gap-4">
          <RiComputerFill className="w-8 h-8 sm:w-12 sm:h-12 animate-pulse transform rotate-12" />
          <span className="postmodern-text text-xl sm:text-2xl">Loading...</span>
        </div>
      </div>
    </div>
  );
}