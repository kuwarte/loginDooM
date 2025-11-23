import LoginForm from "@/components/login-form";
import { requireUpTo } from "@/lib/progress";
import { redirect } from "next/navigation";

export const metadata = { title: "Stage 3 — wordIndexes" };

export default async function Page() {
  const gate = await requireUpTo(3, "logic");
  if (!gate.ok)
    redirect(
      `/challenges/logic/log${
        ["one", "two", "three", "four"][gate.missingAt! - 1]
      }`
    );

  return (
    <>
      <LoginForm
        action="/api/logic/logthree"
        title="Stage 3 — wordIndexes"
        subtitle="Letters hide where you least expect them."
        hints={[
          "Take the word LANTERN and pick letters at positions 2, 4, 7 (1-based).",
          "Rearrange those three letters into an English word ‘an insect that carry’.",
          "Username = that short word in lowercase; password = that word with a leading digit equal to the number of letters in LANTERN.",
        ]}
        nextHref="/challenges/logic/logfour"
      />
    </>
  );
}
