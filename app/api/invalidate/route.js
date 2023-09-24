import { revalidatePath, revalidateTag } from "next/cache";

export function GET() {
  // revalidatePath("/projects/[slug]", "page");
  revalidateTag("sanity");
  return new Response("OK");
}
