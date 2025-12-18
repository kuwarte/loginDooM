import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === "g7" && password === "dg7") {
    return okWithCookie(4, { next: "/challenges/logic/logfive" }, "logic");
  }

  return hint(401, "D + 3 = G. 4th prime = 7. Password is D+G+7.");
}