import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-3 bg-zinc-700">
      <details className="p-3 border">
        <summary className="cursor-pointer font-medium">Context</summary>
        <ul className="list-disc pl-6 mt-2 text-sm">
          <li>You are stuck in LOGIN LOOP</li>
          <li>You are free to RESEARCH</li>
          <li>Find your way to escape this loginDooM</li>
          <li>
            Add to path if finish to that stage <br />
            <span className="font-mono bg-zinc-800 px-1 rounded-sm">
              /web/logtwo
            </span>{" "}
            OR{" "}
            <span className="font-mono bg-zinc-800 px-1 rounded-sm">
              /logic/logtwo
            </span>
          </li>
          <li>Clear browser cookies to restart progress.</li>
        </ul>
      </details>
      <p className="font-mono text-emerald-400">
        Start at Web Challenge <br />
        {">> "}
        <Link className="font-semibold" href="/challenges/web/logone">
          /logone
        </Link>{" "}
        (Desktop)
      </p>
      <p className="font-mono text-emerald-400">
        Start at Logic Challenge <br /> {">> "}
        <Link className="font-semibold" href="/challenges/logic/logone">
          /logone
        </Link>{" "}
        (Phone)
      </p>
    </main>
  );
}
