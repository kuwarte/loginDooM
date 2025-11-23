import { requireUpTo } from "@/lib/progress";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata = { title: "Success — All Stages Cleared" };

export default async function Page() {
  const webGate = await requireUpTo(6, "web", true);
  const logicGate = await requireUpTo(4, "logic", true);

  if (!webGate.ok && !logicGate.ok) {
    redirect(
      `/challenges/web/log${
        ["one", "two", "three", "four", "five", "six"][webGate.missingAt! - 1]
      }`
    );
  }

  return (
    <div className="bg-zinc-700">
      <Image
        src="/success.gif"
        alt="brilliant!"
        width={480}
        height={320}
        className="shadow-[inset_4px_4px_0px_#000000] border border-zinc-900"
      />
      <p className="font-mono text-emerald-400 mt-3">
        Tap the{" "}
        <span className="font-semibold border-t-4 border-dashed">
          loginDooM
        </span>{" "}
        to return
      </p>
    </div>
  );
}
