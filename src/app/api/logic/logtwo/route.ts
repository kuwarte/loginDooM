import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  if (username === "e3" && password === "33") {
    return okWithCookie(2, { next: "/challenges/logic/logthree" }, "logic");
  }
  return hint(
    401,
    "2nd prime = 3 -> C. Shift +2 -> E. Username begins with E and ends with 3."
  );
}
