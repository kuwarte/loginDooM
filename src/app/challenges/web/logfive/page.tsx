import LoginForm from "@/components/login-form";
import { requireUpTo } from "@/lib/progress";
import { redirect } from "next/navigation";

export const metadata = { title: "Stage 5 — localStorage" };

export default async function Page() {
  const gate = await requireUpTo(5);
  if (!gate.ok)
    redirect(
      `/challenges/web/log${
        ["one", "two", "three", "four", "five", "six"][gate.missingAt! - 1]
      }`
    );

  const script = `
    localStorage.setItem("stage5user", "finalboss");
    localStorage.setItem("stage5pass", "xjvndqmktyefrblsapwu");
  `;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <LoginForm
        action="/api/web/logfive"
        title="Stage 5 — localStorage"
        subtitle="Find the stored data."
        hints={[
          "Open browser dev tools.",
          "Look in Application tab → Local Storage.",
        ]}
        nextHref="/challenges/web/logsix"
      />
    </>
  );
}
