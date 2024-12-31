"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useSidebar } from "./providers/sidebar-provider";
import { UserNav } from "./user-nav";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Users, label: "Kullanıcılar", href: "/users" },
  { icon: FileText, label: "Raporlar", href: "/reports" },
  { icon: BarChart3, label: "İstatistikler", href: "/statistics" },
  { icon: Settings, label: "Ayarlar", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const { isOpen, toggle } = useSidebar();

  return (
    <div
      className={cn(
        "bg-white border-r h-screen relative transition-all duration-300",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <button
        onClick={toggle}
        className="absolute -right-3 top-6 bg-white border rounded-full p-1.5 hover:bg-gray-100"
      >
        {isOpen ? (
          <ChevronLeft className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>

      <div className="flex flex-col h-full">
        <div className="p-6">
          <h1 className={cn(
            "font-bold transition-all duration-300",
            isOpen ? "text-2xl" : "text-xl text-center"
          )}>
            {isOpen ? "Admin Panel" : "AP"}
          </h1>
        </div>
        
        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors",
                    pathname === item.href && "bg-gray-100 text-gray-900",
                    !isOpen && "justify-center"
                  )}
                  title={!isOpen ? item.label : undefined}
                >
                  <item.icon className="w-5 h-5" />
                  {isOpen && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t">
          <UserNav isCollapsed={!isOpen} />
        </div>
      </div>
    </div>
  );
}