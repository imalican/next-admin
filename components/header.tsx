import { Breadcrumbs } from "@/components/breadcrumbs";

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <div className="flex h-16 items-center px-6">
        <Breadcrumbs />
      </div>
    </header>
  );
}