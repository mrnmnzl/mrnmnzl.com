import { revalidatePath, revalidateTag } from "next/cache";

export function GET() {
  revalidatePath("/projects", "layout");
  revalidateTag("sanity");
  return new Response("OK");
}
