import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  if (!username || !password) return hint(400, "Provide username and password");

  if (username === "eee" && password === "e5") {
    return okWithCookie(1, { next: "/challenges/logic/logtwo" }, "logic");
  }

  return hint(401, "HELLO has 5 letters -> E. Username is three E's, password is E+5.");
}