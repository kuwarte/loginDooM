import LoginForm from "@/components/login-form";
import { requireUpTo } from "@/lib/progress";
import { redirect } from "next/navigation";

export const metadata = { title: "Stage 4 — cipherShift" };

export default async function Page() {
  const gate = await requireUpTo(4, "logic");
  if (!gate.ok)
    redirect(
      `/challenges/logic/log${
        ["one", "two", "three", "four", "five", "six"][gate.missingAt! - 1]
      }`
    );

  return (
    <>
      <LoginForm
        action="/api/logic/logfour"
        title="Stage 4 — cipherShift"
        subtitle="Caesar's ancient technique holds the key."
        hints={[
          "Take the letter 'D' and apply a Caesar cipher shift of +3 positions.",
          "Find the 4th prime number (2, 3, 5, ?).",
          "Username = shifted letter + prime number; password = original letter + shifted letter + prime number.",
        ]}
        nextHref="/challenges/logic/logfive"
      />
    </>
  );
}