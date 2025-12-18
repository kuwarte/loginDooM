import LoginForm from "@/components/login-form";

export const metadata = { title: "Stage 1 — caesarCipher" };

export default function Page() {
  return (
    <LoginForm
      action="/api/web/logone"
      title="Stage 1 — caesarCipher"
      subtitle="Decrypt the password."
      hints={[
        "The password is encrypted using Caesar cipher: jsadhkadjkhoweknsnsjcj",
        "Caesar cipher shifts letters by 3 positions. Try both forward (+3) and backward (-3) shifts.",
        "Look for clues about the username in the page source or network requests.",
      ]}
      nextHref="/challenges/web/logtwo"
    />
  );
}
