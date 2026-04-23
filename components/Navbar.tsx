"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="w-full border-b bg-white/50 backdrop-blur-sm dark:bg-black/50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold text-lg">
            Your Name
          </Link>
          <Link href="#projects" className="text-sm text-zinc-600 dark:text-zinc-300">Projects</Link>
          <Link href="/dashboard" className="text-sm text-zinc-600 dark:text-zinc-300">Dashboard</Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            {mounted && (theme === "dark" ? <Sun size={16} /> : <Moon size={16} />)}
          </button>

          {session ? (
            <>
              <span className="text-sm mr-2 hidden sm:inline">{session.user?.name ?? session.user?.email}</span>
              <button onClick={() => signOut()} className="px-3 py-1 border rounded">Sign out</button>
            </>
          ) : (
            <button onClick={() => signIn()} className="px-3 py-1 border rounded">Sign in</button>
          )}
        </div>
      </div>
    </nav>
  );
}
