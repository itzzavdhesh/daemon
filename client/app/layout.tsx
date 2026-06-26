import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Daemon',
  description: 'Draw logic. Ship code.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
