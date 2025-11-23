import LoginForm from "@/components/login-form";
import { requireUpTo } from "@/lib/progress";
import { redirect } from "next/navigation";

export const metadata = { title: "Stage 2 — caesarPlusPosition" };

export default async function Page() {
  const gate = await requireUpTo(2, "logic");
  if (!gate.ok)
    redirect(
      `/challenges/logic/log${
        ["one", "two", "three", "four"][gate.missingAt! - 1]
      }`
    );

  return (
    <>
      <LoginForm
        action="/api/logic/logtwo"
        title="Stage 2 — caesarPlusPosition"
        subtitle="Letters and numbers hold the key."
        hints={[
          "Start with the 2nd prime number.",
          "Map that number into a letter (A=1), then shift it forward by 2 letters (wrap Z→A).",
          "Username = that shifted letter followed by the original prime number; password is the prime number repeated twice.",
        ]}
        nextHref="/challenges/logic/logthree"
      />
    </>
  );
}
