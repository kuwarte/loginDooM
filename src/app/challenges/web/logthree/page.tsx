import LoginForm from "@/components/login-form";
import { requireUpTo } from "@/lib/progress";
import { redirect } from "next/navigation";

export const metadata = { title: "Stage 3 — elementHideAndSeek" };

export default async function Page() {
  const gate = await requireUpTo(3);
  if (!gate.ok)
    redirect(
      `/challenges/web/log${
        ["one", "two", "three", "four", "five", "six"][gate.missingAt! - 1]
      }`
    );

  return (
    <>
      <div className="isItHidden?">
        <div className="secret" style={{ display: "none" }}>
          {`username === "div" && password === "xjvndqmktyefrblsapwu"`}
        </div>
      </div>
      <LoginForm
        action="/api/web/logthree"
        title="Stage 3 — elementHideAndSeek"
        subtitle="Sometimes secrets are styled away."
        hints={["Inspect the page with dev tools.", "Look for hidden div."]}
        nextHref="/challenges/web/logfour"
      />
    </>
  );
}
