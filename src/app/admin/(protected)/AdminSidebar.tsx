"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gift, LogOut, Send, Users } from "lucide-react";

const navItems = [
  { href: "/admin/subscribers", label: "Subscribers", icon: Users },
  { href: "/admin/broadcasts", label: "Broadcasts", icon: Send },
  { href: "/admin/giveaways", label: "Giveaways", icon: Gift },
];

export default function AdminSidebar({
  adminName,
  logoutAction,
}: {
  adminName: string;
  logoutAction: () => Promise<void>;
}) {
  const pathname = usePathname();

  const initials = adminName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <aside className="bg-white p-6 shadow-md border-t-4 border-[#0066cc] border-r border-b border-l border-[#e0e0e0]">
      <div className="flex items-center gap-3 pb-6 border-b-2 border-[#e0e0e0]">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#0066cc] text-base font-bold text-white">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-black">{adminName}</p>
          <p className="text-xs text-[#666] uppercase tracking-wider">Administrator</p>
        </div>
      </div>

      <h2 className="text-lg font-bold text-black mt-6 mb-4 uppercase tracking-wide">Newsletter HQ</h2>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-all duration-150 border-l-4 ${
                isActive
                  ? "bg-[#e3f2fd] border-[#0066cc] text-black"
                  : "border-transparent text-[#666] hover:bg-[#f5f5f5] hover:text-black hover:border-[#ccc]"
              }`}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <form action={logoutAction} className="mt-8">
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 border-2 border-[#d1d5db] px-4 py-3 text-sm font-semibold text-[#666] transition-all duration-150 hover:bg-[#f5f5f5] hover:text-black hover:border-[#999]"
        >
          <LogOut className="h-4 w-4" />
          Log Out
        </button>
      </form>
    </aside>
  );
}
