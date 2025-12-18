import LoginForm from "@/components/login-form";

export const metadata = { title: "Stage 1 — basicCounting" };

export default function Page() {
  return (
    <LoginForm
      action="/api/logic/logone"
      title="Stage 1 — basicCounting"
      subtitle="Count and convert to unlock the first gate."
      hints={[
        "Count the letters in the word 'HELLO'.",
        "Convert that number to its corresponding letter (A=1, B=2, C=3...).",
        "Username = that letter repeated three times (lowercase); password = that letter + the count number.",
      ]}
      nextHref="/challenges/logic/logtwo"
    />
  );
}