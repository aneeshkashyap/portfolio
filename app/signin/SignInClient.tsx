"use client";

import { signIn } from "next-auth/react";

export default function SignInClient({ providers }: { providers: Record<string, any> | null }) {
  return (
    <div className="flex flex-col gap-2">
      {providers &&
        Object.values(providers).map((provider: any) => (
          <button
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Sign in with {provider.name}
          </button>
        ))}
      {!providers && <p>No auth providers configured. See .env.example.</p>}
    </div>
  );
}
