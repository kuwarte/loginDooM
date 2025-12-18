import LoginForm from "@/components/login-form";
import { requireUpTo } from "@/lib/progress";
import { redirect } from "next/navigation";

export const metadata = { title: "Stage 3 — wordPattern" };

export default async function Page() {
  const gate = await requireUpTo(3, "logic");
  if (!gate.ok)
    redirect(
      `/challenges/logic/log${
        ["one", "two", "three", "four", "five", "six"][gate.missingAt! - 1]
      }`
    );

  return (
    <>
      <LoginForm
        action="/api/logic/logthree"
        title="Stage 3 — wordPattern"
        subtitle="Extract letters from strategic positions."
        hints={[
          "Take the word 'COMPUTER' and extract letters at positions 1, 3, 5 (1-based indexing).",
          "Combine those three letters to form a new sequence.",
          "Username = those letters in lowercase; password = the length of 'COMPUTER' + those same letters.",
        ]}
        nextHref="/challenges/logic/logfour"
      />
    </>
  );
}