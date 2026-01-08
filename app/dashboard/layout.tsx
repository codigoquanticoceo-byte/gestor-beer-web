'use client';

import { Sidebar } from '@/app/components/Sidebar';
import { Header } from '@/app/components/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />
      <Header />
      <main className="ml-64 mt-20 p-8">
        {children}
      </main>
    </div>
  );
}
