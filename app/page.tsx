import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b">
        <div className="text-lg font-semibold">
          logo
        </div>

        <div className="flex gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            Sign in
          </Link>

          <Link
            href="/signup"
            className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Sign up
          </Link>
        </div>
      </header>
    </main>
  );
}
