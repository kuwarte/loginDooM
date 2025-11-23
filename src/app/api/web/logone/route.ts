import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  if (!username || !password) return hint(400, "Provide username and password");

  if (username !== username.toLowerCase()) {
    return hint(401, "Alphabets must be lowercase.");
  }

  if (username === "caesarcipher3" && password === "gpxaehxagheltbhkpkpgzg") {
    return okWithCookie(1, { next: "/challenges/web/logtwo" });
  }

  return hint(
    401,
    "More Hint Found!: username is caesarcipher + number of shift."
  );
}
