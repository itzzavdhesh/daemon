import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type MeResponse = {
  user: {
    id: string;
    email: string;
    created_at: string;
  };
};

async function getCurrentUser() {
  const token = cookies().get('daemon_token')?.value;

  if (!token) {
    return null;
  }

  const apiUrl = process.env.SERVER_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  const response = await fetch(`${apiUrl}/api/v1/auth/me`, {
    headers: {
      Cookie: `daemon_token=${token}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as MeResponse;
  return data.user;
}

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <main className="min-h-screen px-6 py-10">
      <section className="mx-auto w-full max-w-5xl">
        <div className="mb-10 flex items-center justify-between border-b border-daemon-line pb-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-md border border-daemon-line bg-daemon-panel text-lg font-bold text-daemon-accent shadow-glow">
              D
            </div>
            <span className="text-xl font-semibold">Daemon</span>
          </div>
          <p className="text-sm text-daemon-muted">{user.email}</p>
        </div>

        <div className="rounded-lg border border-daemon-line bg-daemon-panel p-8 shadow-glow">
          <h1 className="text-3xl font-bold tracking-normal">Welcome to Daemon</h1>
          <p className="mt-3 text-daemon-muted">Signed in as {user.email}</p>
        </div>
      </section>
    </main>
  );
}
