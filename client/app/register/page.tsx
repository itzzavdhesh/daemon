'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { api } from '@/lib/api';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsSubmitting(true);

    try {
      await api.post('/api/v1/auth/register', { email, password });
      router.push('/login');
    } catch (requestError) {
      const axiosError = requestError as AxiosError<{ error?: string }>;
      setError(axiosError.response?.data?.error || 'Unable to create account');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <section className="w-full max-w-md rounded-lg border border-daemon-line bg-daemon-panel p-8 shadow-glow">
        <Link href="/" className="mb-8 inline-flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-md border border-daemon-line text-base font-bold text-daemon-accent">
            D
          </div>
          <span className="text-lg font-semibold">Daemon</span>
        </Link>

        <h1 className="text-3xl font-bold tracking-normal">Create account</h1>
        <p className="mt-2 text-sm text-daemon-muted">Start drawing logic and exporting working code.</p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-sm font-medium text-daemon-muted">Email</span>
            <input
              className="mt-2 w-full rounded-md border border-daemon-line bg-daemon-bg px-4 py-3 text-daemon-text outline-none transition focus:border-daemon-accent"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-daemon-muted">Password</span>
            <input
              className="mt-2 w-full rounded-md border border-daemon-line bg-daemon-bg px-4 py-3 text-daemon-text outline-none transition focus:border-daemon-accent"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              minLength={8}
              autoComplete="new-password"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-daemon-muted">Confirm password</span>
            <input
              className="mt-2 w-full rounded-md border border-daemon-line bg-daemon-bg px-4 py-3 text-daemon-text outline-none transition focus:border-daemon-accent"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
              minLength={8}
              autoComplete="new-password"
            />
          </label>

          {error ? <p className="rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p> : null}

          <button
            className="w-full rounded-md bg-daemon-accent px-4 py-3 font-semibold text-daemon-bg transition hover:bg-daemon-accentDark hover:text-daemon-text disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating account...' : 'Register'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-daemon-muted">
          Already have an account?{' '}
          <Link className="font-semibold text-daemon-accent" href="/login">
            Sign in
          </Link>
        </p>
      </section>
    </main>
  );
}
