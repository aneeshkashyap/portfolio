"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl mb-4">Sign in</h1>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => signIn("google")}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => signIn("github")}
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    </main>
  );
}
