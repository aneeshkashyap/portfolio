import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "NextAuth routes will be handled under /api/auth" });
}
