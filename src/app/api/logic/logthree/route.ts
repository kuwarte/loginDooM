import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === "ant" && password === "7ant") {
    return okWithCookie(3, { next: "/challenges/logic/logfour" }, "logic");
  }

  return hint(401, "Think! It is an insect’.");
}
