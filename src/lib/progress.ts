import { cookies } from "next/headers";

export async function hasStage(n: number, type: "web" | "logic") {
  const c = await cookies();
  return c.get(`${type}-stage${n}`)?.value === "1";
}

export async function requireUpTo(
  stage: number,
  type: "web" | "logic" = "web",
  inclusive = false
): Promise<{ ok: boolean; missingAt: number | null }> {
  const end = inclusive ? stage : Math.max(1, stage - 1);
  for (let i = 1; i <= end; i++) {
    if (!(await hasStage(i, type))) return { ok: false, missingAt: i };
  }
  return { ok: true, missingAt: null };
}
