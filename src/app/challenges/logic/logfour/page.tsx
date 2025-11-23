import LoginForm from "@/components/login-form";
import { requireUpTo } from "@/lib/progress";
import { redirect } from "next/navigation";

export const metadata = { title: "Stage 4 — fibonacciPlusCaesarPlusSymmetry" };

export default async function Page() {
  const gate = await requireUpTo(4, "logic");
  if (!gate.ok)
    redirect(
      `/challenges/logic/log${
        ["one", "two", "three", "four"][gate.missingAt! - 1]
      }`
    );

  return (
    <>
      <LoginForm
        action="/api/logic/logfour"
        title="Stage 4 — fibonacciPlusCaesarPlusSymmetry"
        subtitle="A sequence of numbers holds the letters."
        hints={[
          "Use the 6th Fibonacci number and pad it to 3 digits",
          "Map each digit to a letter (1->A, 2->B, ..., 9->J) and then apply ROT+4 to each letter.",
          "Username = the resulting three letters followed by the first letter repeated. Password = the numeric Fibonacci number reversed.",
        ]}
        nextHref="/success"
      />
    </>
  );
}
