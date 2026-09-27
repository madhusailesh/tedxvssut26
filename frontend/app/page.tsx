export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center px-5 text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-red-500 sm:text-sm sm:tracking-[0.3em]">
        TEDxVSSUT 2026
      </p>

      <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Dialectics of Discovery
      </h1>

      <p className="mt-5 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
        Welcome to TEDxVSSUT 2026
      </p>

      <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <a
          href="/passes"
          className="rounded-full bg-red-600 px-7 py-3 text-sm font-medium transition hover:bg-red-700"
        >
          Get Passes
        </a>

        <a
          href="/about"
          className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium transition hover:bg-white/10"
        >
          Explore TEDxVSSUT
        </a>
      </div>
    </main>
  );
}