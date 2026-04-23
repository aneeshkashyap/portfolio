import { getProviders, signIn } from "next-auth/react";

export default async function SignInPage() {
  const providers = await getProviders();

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl mb-4">Sign in</h1>
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
        </div>
      </div>
    </main>
  );
}
