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
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-[280px_1fr]">
        <AdminSidebar adminName={session.user.name || "Admin"} logoutAction={logoutAction} />
        <section className="bg-white p-8 shadow-md border border-[#e0e0e0]">
          {children}
        </section>
      </div>
    </main>
  );
}
