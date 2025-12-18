import LoginForm from "@/components/login-form";
import { requireUpTo } from "@/lib/progress";
import { redirect } from "next/navigation";

export const metadata = { title: "Stage 6 — fibonacciCipher" };

export default async function Page() {
  const gate = await requireUpTo(6, "logic");
  if (!gate.ok)
    redirect(
      `/challenges/logic/log${
        ["one", "two", "three", "four", "five", "six"][gate.missingAt! - 1]
      }`
    );

  return (
    <>
      <LoginForm
        action="/api/logic/logsix"
        title="Stage 6 — fibonacciCipher"
        subtitle="The golden sequence meets ancient encryption."
        hints={[
          "Find the 7th Fibonacci number (sequence: 1,1,2,3,5,8,?).",
          "Convert that number to a 2-digit format (pad with leading zero if needed).",
          "Map each digit to letters (1=A, 3=C) and apply ROT+2 cipher to each.",
          "Username = the two cipher letters + original Fibonacci number; password = Fibonacci number reversed + cipher letters.",
        ]}
        nextHref="/success"
      />
    </>
  );
}