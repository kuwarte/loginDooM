import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === "ce13" && password === "31ce") {
    return okWithCookie(6, { next: "/success" }, "logic");
  }

  return hint(401, "7th Fibonacci = 13. 1->A+2=C, 3->C+2=E. Reverse 13 = 31.");
}