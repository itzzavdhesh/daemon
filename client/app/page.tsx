import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <section className="w-full max-w-5xl">
        <div className="mb-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-md border border-daemon-line bg-daemon-panel text-lg font-bold text-daemon-accent shadow-glow">
              D
            </div>
            <span className="text-xl font-semibold tracking-normal text-daemon-text">Daemon</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-md border border-daemon-line px-4 py-2 text-sm font-medium text-daemon-text transition hover:border-daemon-accent"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-md bg-daemon-accent px-4 py-2 text-sm font-semibold text-daemon-bg transition hover:bg-daemon-accentDark hover:text-daemon-text"
            >
              Register
            </Link>
          </div>
        </div>

        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-daemon-accent">Visual state machines</p>
          <h1 className="text-5xl font-bold tracking-normal text-daemon-text sm:text-7xl">Daemon</h1>
          <p className="mt-6 text-2xl text-daemon-muted sm:text-3xl">Draw logic. Ship code.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/register"
              className="rounded-md bg-daemon-accent px-6 py-3 text-base font-semibold text-daemon-bg transition hover:bg-daemon-accentDark hover:text-daemon-text"
            >
              Start building
            </Link>
            <Link
              href="/login"
              className="rounded-md border border-daemon-line px-6 py-3 text-base font-semibold text-daemon-text transition hover:border-daemon-accent"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
