import { redirect } from "next/navigation";
import { auth, signOut } from "@/lib/auth";
import AdminSidebar from "./AdminSidebar";

export default async function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) {
    redirect("/admin/login");
  }

  async function logoutAction() {
    "use server";
    await signOut({ redirectTo: "/admin/login" });
  }

  return (
    <main className="min-h-screen bg-[#FCF8F0] text-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-[260px_1fr]">
        <AdminSidebar adminName={session.user.name || "Admin"} logoutAction={logoutAction} />
        <section className="relative overflow-hidden rounded-2xl border border-[#E2D9CD] bg-white p-8 shadow-sm">
          {children}
        </section>
      </div>
    </main>
  );
}
