import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === "ddld" && password === "800") {
    return okWithCookie(4, { next: "/success" }, "logic");
  }

  return hint(401, "Padded version is: 00(6th fibonacci num).");
}
