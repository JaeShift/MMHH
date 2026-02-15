import { Users } from "lucide-react";
import SubscribersTable from "@/app/admin/subscribers/SubscribersTable";
import { getSubscribersAction } from "@/domains/newsletter/actions/NewsletterActions";

export default async function AdminSubscribersPage() {
  const result = await getSubscribersAction();
  const subscribers = result.success ? result.data.subscribers : [];
  const total = result.success ? result.data.total : 0;

  return (
    <div>
      <div className="mb-8">
        <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] font-semibold">Newsletter</p>
        <h1 className="font-heading italic font-light text-4xl sm:text-5xl text-black mt-3">Subscribers</h1>
        <div className="flex items-center gap-3 mt-4">
          <div className="h-px w-12 bg-[#8B9D7F]/30" />
          <div className="w-2 h-2 rounded-full bg-[#8B9D7F]" />
          <div className="h-px w-12 bg-[#8B9D7F]/30" />
        </div>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#EBE4D6] px-4 py-1.5 text-sm font-medium text-black">
          <Users className="h-4 w-4 text-[#75866D]" />
          {total} total subscribers
        </div>
      </div>
      <SubscribersTable subscribers={subscribers} />
    </div>
  );
}
