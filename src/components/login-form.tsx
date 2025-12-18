"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdLock, MdPerson, MdKey, MdLightbulb, MdCheckCircle, MdError } from "react-icons/md";
import { RiShieldCheckFill } from "react-icons/ri";

export default function LoginForm({
  action,
  title,
  subtitle,
  hints,
  fields = ["username", "password"],
  nextHref,
}: {
  action: string;
  title: string;
  subtitle?: string;
  hints?: string[];
  fields?: ("username" | "password" | "code" | "answer")[];
  nextHref: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);

  const getFieldIcon = (field: string) => {
    switch (field) {
      case "username": return <MdPerson className="w-4 h-4" />;
      case "password": return <MdLock className="w-4 h-4" />;
      case "code": return <MdKey className="w-4 h-4" />;
      case "answer": return <MdLightbulb className="w-4 h-4" />;
      default: return <MdKey className="w-4 h-4" />;
    }
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    const form = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    for (const [k, v] of form.entries()) payload[k] = String(v);

    const res = await fetch(action, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (res.ok && data.ok) {
      setMsg("[BREACH SUCCESSFUL] >> GATEWAY UNLOCKED >> ADVANCING...");
      setTimeout(() => router.push(nextHref), 1000);
    } else {
      setAttempts(prev => prev + 1);
      setMsg(data.message ?? "Access denied. Try again.");
    }
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-2xl space-y-4 sm:space-y-8">

      <div className="relative mb-6 sm:mb-12">
        <div className="deconstructed-border bg-gray-900 text-white p-4 sm:p-8 mb-4 transform -rotate-1">
          <h1 className="postmodern-text text-xl sm:text-3xl md:text-4xl glitch-text" data-text={title}>{title}</h1>
        </div>
        {subtitle && (
          <div className="deconstructed-border bg-gray-100 text-black p-3 sm:p-4 transform rotate-2 translate-x-3 sm:translate-x-6">
            <p className="text-lg sm:text-xl font-medium">{subtitle}</p>
          </div>
        )}
        {attempts > 0 && (
          <div className="deconstructed-border bg-gray-800 text-white p-3 sm:p-4 mt-4 sm:mt-6 transform -rotate-1 -translate-x-2 sm:-translate-x-4">
            <span className="postmodern-text text-base sm:text-lg">Failed Attempts: {attempts}</span>
          </div>
        )}
      </div>


      {hints?.length ? (
        <div className="relative mb-8 sm:mb-16">
          <div className="deconstructed-border bg-gray-50 text-black p-4 sm:p-8 transform rotate-1">
            <div className="deconstructed-border bg-gray-800 text-white p-4 sm:p-6 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4 transform -rotate-2">
              <MdLightbulb className="w-6 h-6 sm:w-10 sm:h-10 transform rotate-45 flex-shrink-0" />
              <h2 className="postmodern-text text-lg sm:text-2xl">Intelligence</h2>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {hints.map((hint, i) => (
                <div key={i} className={`deconstructed-border ${i % 2 === 0 ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} p-4 sm:p-6 transform ${
                  i % 2 === 0 ? 'rotate-1 translate-x-1 sm:translate-x-2' : '-rotate-1 -translate-x-1 sm:-translate-x-2'
                }`}>
                  <div className="flex gap-3 sm:gap-6 items-start">
                    <span className="postmodern-text text-lg sm:text-2xl flex-shrink-0">{i + 1}.</span>
                    <span className="text-base sm:text-lg leading-relaxed">{hint}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}


      <div className="deconstructed-border bg-gray-900 text-white p-4 sm:p-8 transform rotate-0.5">
        <div className="deconstructed-border bg-gray-100 text-black p-4 sm:p-6 mb-6 sm:mb-10 flex items-center gap-3 sm:gap-4 transform -rotate-1">
          <RiShieldCheckFill className="w-6 h-6 sm:w-10 sm:h-10 transform rotate-180 flex-shrink-0" />
          <span className="postmodern-text text-lg sm:text-2xl">Authentication</span>
        </div>
        
        <form onSubmit={onSubmit} className="space-y-6 sm:space-y-10">
          {fields.map((field, index) => (
            <div key={field} className={`transform ${
              index % 2 === 0 ? 'rotate-1 translate-x-2 sm:translate-x-4' : '-rotate-1 -translate-x-2 sm:-translate-x-4'
            }`}>
              <div className="deconstructed-border bg-gray-200 text-black p-3 sm:p-4 mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
                <div className="transform rotate-45 flex-shrink-0">{getFieldIcon(field)}</div>
                <label className="postmodern-text text-lg sm:text-xl">
                  {field}
                </label>
              </div>
              <input
                name={field}
                placeholder={`Enter ${field}...`}
                type={field === "password" ? "password" : "text"}
                className="w-full deconstructed-border bg-gray-50 text-black p-4 sm:p-6 text-lg sm:text-xl placeholder-gray-500 focus:outline-none transform -rotate-0.5"
                required
              />
            </div>
          ))}
          
          <button
            disabled={loading}
            className="asymmetric-button w-full bg-gray-200 text-black p-4 sm:p-6 postmodern-text text-lg sm:text-2xl disabled:opacity-50"
          >
            {loading ? "Processing..." : "Execute"}
          </button>
        </form>
        

        {msg && (
          <div className={`deconstructed-border mt-6 sm:mt-10 p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transform rotate-2 ${
            msg.includes("granted") 
              ? "bg-gray-100 text-black" 
              : "bg-gray-800 text-white"
          }`}>
            <div className="transform -rotate-45 flex-shrink-0">
              {msg.includes("granted") ? <MdCheckCircle className="w-6 h-6 sm:w-10 sm:h-10" /> : <MdError className="w-6 h-6 sm:w-10 sm:h-10" />}
            </div>
            <span className="postmodern-text text-base sm:text-xl">{msg}</span>
          </div>
        )}
      </div>
    </div>
  );
}