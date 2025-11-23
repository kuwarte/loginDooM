import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  if (username === "v1ews0urce" && password === "qwertyuiopasdfghjklz") {
    return okWithCookie(2, { next: "/challenges/web/logthree" });
  }
  return hint(401, "Check the page source for credentials.");
}
