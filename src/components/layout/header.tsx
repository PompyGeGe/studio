import Link from 'next/link';
import { BookOpenCheck, UserCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Header() {
  const navItems = ['智慧课堂', '助学提升', '学情监测'];
  const userAvatar = PlaceHolderImages.find(p => p.id === 'avatar-user');

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
        <Avatar className="h-9 w-9">
          <AvatarImage src={userAvatar?.imageUrl} alt="User Avatar" data-ai-hint={userAvatar?.imageHint} />
          <AvatarFallback>
            <UserCircle className="h-full w-full" />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
