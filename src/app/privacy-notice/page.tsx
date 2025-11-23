export const metadata = { title: "Privacy Notice" };

export default async function Page() {
  return (
    <div className="bg-zinc-700">
      <h3 className="font-mono text-lg mb-3 text-emerald-400">
        Privacy Notice
      </h3>
      <p className="font-mono">
        This website does not collect or store any personal information on a
        server or database. All user progress, answers, and settings are saved
        locally in your browser’s storage (such as localStorage) and remain
        completely private to your device. Your data is never transmitted to or
        shared with any third party, ensuring that your experience is fully
        anonymous and secure.
        <br />
        <br />
        <span className="text-emerald-400">Quick Tip:</span> Clear browser
        cookies to restart progress.
      </p>
    </div>
  );
}
