import { db } from "@/drizzle/db";
import { groups } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function GET(request: Request, { params }: { params: Promise<{ groupId: string }> }) {
  const { searchParams } = new URL(request.url);
  const auth_token = searchParams.get("auth_token");
  const { groupId } = await params;

  if (!groupId) {
    return NextResponse.json({ error: "Group ID is required" }, { status: 400 });
  }

  await db.update(groups).set({ verida: auth_token }).where(eq(groups.id, parseInt(groupId))).execute();
  // Example logic based on groupId
  return NextResponse.redirect("https://t.me/moderatexbot?start=groups");
}
