import { Users } from "lucide-react";
import SubscribersTable from "@/app/admin/subscribers/SubscribersTable";
import { getSubscribersAction } from "@/domains/newsletter/actions/NewsletterActions";

export default async function AdminSubscribersPage() {
  const result = await getSubscribersAction();
  const subscribers = result.success ? result.data.subscribers : [];
  const total = result.success ? result.data.total : 0;

  return (
    <div>
      <div className="mb-8 pb-6 border-b-2 border-[#e0e0e0]">
        <h1 className="text-3xl font-bold text-black uppercase tracking-wide">Subscribers</h1>
        <div className="mt-4 inline-flex items-center gap-2 bg-[#e3f2fd] border-l-4 border-[#0066cc] px-4 py-2.5 text-sm font-bold text-black">
          <Users className="h-5 w-5 text-[#0066cc]" />
          {total} Total
        </div>
      </div>
      <SubscribersTable subscribers={subscribers} />
    </div>
  );
}
