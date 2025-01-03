'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Users, FolderTree, Gamepad2, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';

const menuItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/users', label: 'Kullanıcılar', icon: Users },
  { href: '/categories', label: 'Kategoriler', icon: FolderTree },
  { href: '/games', label: 'Oyunlar', icon: Gamepad2 },
];

export function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <div className='pb-12 min-h-screen'>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold'>Admin Panel</h2>
          <div className='space-y-1'>
            {menuItems.map(item => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? 'secondary' : 'ghost'}
                  className={cn('w-full justify-start')}
                >
                  <item.icon className='mr-2 h-4 w-4' />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='px-3 py-2'>
        <Button
          variant='ghost'
          className='w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-100'
          onClick={logout}
        >
          <LogOut className='mr-2 h-4 w-4' />
          Çıkış Yap
        </Button>
      </div>
    </div>
  );
}
