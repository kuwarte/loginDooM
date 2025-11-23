import LoginForm from "@/components/login-form";

export const metadata = { title: "Stage 1 — straightMapping" };

export default function Page() {
  return (
    <LoginForm
      action="/api/logic/logone"
      title="Stage 1 — straightMapping"
      subtitle="Figure out the letter-number mapping."
      hints={[
        "Count the letters in the word seven.",
        "Turn that number into the corresponding letter in the alphabet (A=1).",
        "The username is that single letter repeated three times. The password is that letter + the number you started with.",
      ]}
      nextHref="/challenges/logic/logtwo"
    />
  );
}
