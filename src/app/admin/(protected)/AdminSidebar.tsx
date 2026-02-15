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
    <aside className="relative overflow-hidden rounded-2xl border border-[#E2D9CD] bg-white p-6 shadow-md">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#75866D]" />

      <div className="mt-2 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EBE4D6] text-sm font-semibold text-[#75866D]">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-black">{adminName}</p>
          <p className="text-xs text-[#6B5B4D]">Administrator</p>
        </div>
      </div>

      <h2 className="font-heading italic font-light text-3xl text-black mt-6">Newsletter HQ</h2>

      <nav className="mt-6 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 ${
                isActive
                  ? "bg-[#EBE4D6] font-medium text-black"
                  : "text-[#6B5B4D] hover:bg-[#F5F1E9] hover:text-black"
              }`}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <form action={logoutAction} className="mt-8">
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E2D9CD] px-3 py-2.5 text-sm text-[#6B5B4D] transition-all duration-200 hover:bg-[#F5F1E9] hover:text-black"
        >
          <LogOut className="h-4 w-4" />
          Log Out
        </button>
      </form>
    </aside>
  );
}
