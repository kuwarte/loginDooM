import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === "aei" && password === "15") {
    return okWithCookie(5, { next: "/challenges/logic/logsix" }, "logic");
  }

  return hint(401, "Diagonal: 1,5,9 -> A,E,I. Sum: 1+5+9=15.");
}