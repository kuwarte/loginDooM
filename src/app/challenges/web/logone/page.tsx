import LoginForm from "@/components/login-form";

export const metadata = { title: "Stage 1 — caesarCipher" };

export default function Page() {
  return (
    <LoginForm
      action="/api/web/logone"
      title="Stage 1 — caesarCipher"
      subtitle="Decrypt the password."
      hints={[
        "Encrypted password: jsadhkadjkhoweknsnsjcj",
        "Classic Caesar Cipher. 3 shift but what sign?",
        "TrialAndError: Find the other hint for username",
      ]}
      nextHref="/challenges/web/logtwo"
    />
  );
}
