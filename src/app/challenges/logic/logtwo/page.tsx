import LoginForm from "@/components/login-form";
import { requireUpTo } from "@/lib/progress";
import { redirect } from "next/navigation";

export const metadata = { title: "Stage 2 — simpleArithmetic" };

export default async function Page() {
  const gate = await requireUpTo(2, "logic");
  if (!gate.ok)
    redirect(
      `/challenges/logic/log${
        ["one", "two", "three", "four", "five", "six"][gate.missingAt! - 1]
      }`
    );

  return (
    <>
      <LoginForm
        action="/api/logic/logtwo"
        title="Stage 2 — simpleArithmetic"
        subtitle="Basic math reveals the hidden pattern."
        hints={[
          "Calculate 3 + 4 = ?",
          "Convert that result to its letter equivalent (A=1, B=2...).",
          "Username = that letter + the number 7; password = the calculation result repeated twice.",
        ]}
        nextHref="/challenges/logic/logthree"
      />
    </>
  );
}