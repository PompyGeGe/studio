'use client';
import AuthForm from '@/components/auth/auth-form';
import { BookOpenCheck } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="mb-8 flex items-center gap-3 text-3xl font-bold text-primary">
        <BookOpenCheck className="h-9 w-9 text-accent" />
        <span className="font-headline">AI助学系统</span>
      </div>
      <AuthForm />
    </div>
  );
}
