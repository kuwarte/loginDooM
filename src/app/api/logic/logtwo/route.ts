import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  
  if (username === "g7" && password === "77") {
    return okWithCookie(2, { next: "/challenges/logic/logthree" }, "logic");
  }
  
  return hint(401, "3 + 4 = 7 -> G. Username is G+7, password is 77.");
}