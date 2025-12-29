
'use client';

import Link from 'next/link';
import { BookOpenCheck, LogOut, UserCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/context/auth-context';
import { Button } from '../ui/button';

export default function Header() {
  const navItems = ['智慧课堂', '助学提升', '学情监测'];
  const { user, logout } = useAuth();

  return (
    <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <BookOpenCheck className="h-7 w-7 text-accent" />
          <span className="font-headline">AI助学系统</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map(item => (
            <Link
              key={item}
              href="#"
              className={`relative py-2 text-sm font-medium transition-colors hover:text-white ${
                item === '智慧课堂' ? 'text-white after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-accent' : 'text-primary-foreground/80'
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex cursor-pointer items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.photoURL} alt={user.username} />
                    <AvatarFallback>
                      <UserCircle className="h-full w-full" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden items-baseline gap-2 md:flex">
                    <span className="text-sm font-medium leading-none">{user.username}</span>
                    <span className="text-xs text-primary-foreground/70">({user.role})</span>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className='font-normal'>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.username}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.role}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>登出</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="secondary">
               <Link href="/login">登录</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

    