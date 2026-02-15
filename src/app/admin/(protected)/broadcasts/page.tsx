import BroadcastsList from "@/app/admin/broadcasts/BroadcastsList";
import { getBroadcastsAction } from "@/domains/broadcast/actions/BroadcastActions";

export default async function AdminBroadcastsPage() {
  const result = await getBroadcastsAction();
  const broadcasts = result.success ? result.data : [];

  return (
    <div>
      <div className="mb-8">
        <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] font-semibold">Newsletter</p>
        <h1 className="font-heading italic font-light text-4xl sm:text-5xl text-black mt-3">Broadcasts</h1>
        <div className="flex items-center gap-3 mt-4">
          <div className="h-px w-12 bg-[#8B9D7F]/30" />
          <div className="w-2 h-2 rounded-full bg-[#8B9D7F]" />
          <div className="h-px w-12 bg-[#8B9D7F]/30" />
        </div>
      </div>
      <BroadcastsList broadcasts={broadcasts} />
    </div>
  );
}
