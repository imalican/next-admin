import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Sidebar } from '@/components/sidebar';
import { SidebarProvider } from '@/components/providers/sidebar-provider';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className='flex h-screen'>
        <Sidebar />
        <div className='flex-1 flex flex-col'>
          <Header />
          <main className='flex-1 overflow-y-auto p-6 bg-gray-50'>
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
