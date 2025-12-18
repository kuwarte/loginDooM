import LoginForm from "@/components/login-form";
import { requireUpTo } from "@/lib/progress";
import { redirect } from "next/navigation";

export const metadata = { title: "Stage 5 — matrixDiagonal" };

export default async function Page() {
  const gate = await requireUpTo(5, "logic");
  if (!gate.ok)
    redirect(
      `/challenges/logic/log${
        ["one", "two", "three", "four", "five", "six"][gate.missingAt! - 1]
      }`
    );

  return (
    <>
      <LoginForm
        action="/api/logic/logfive"
        title="Stage 5 — matrixDiagonal"
        subtitle="Numbers form patterns, diagonals reveal secrets."
        hints={[
          "Create a 3x3 matrix with numbers 1-9 in row order: [1,2,3], [4,5,6], [7,8,9].",
          "Extract the main diagonal elements (top-left to bottom-right).",
          "Convert each diagonal number to letters (1=A, 5=E, 9=I).",
          "Username = those three letters in lowercase; password = sum of diagonal numbers (1+5+9).",
        ]}
        nextHref="/challenges/logic/logsix"
      />
    </>
  );
}