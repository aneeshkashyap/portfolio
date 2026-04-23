import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions as any);
  if (!session) redirect("/signin");

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-4">Welcome, {session.user?.name ?? session.user?.email}</p>
    </main>
  );
}
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions as any);
  if (!session) redirect("/signin");

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-2">Signed in as {session?.user?.name ?? session?.user?.email}</p>
      <pre className="bg-slate-100 p-4 rounded">{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
}
