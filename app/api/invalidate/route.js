import { revalidatePath } from "next/cache";

export function GET() {
  revalidatePath("/projects/[slug]", "page");
  return new Response("OK");
}
