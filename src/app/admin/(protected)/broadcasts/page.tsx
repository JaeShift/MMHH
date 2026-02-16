import BroadcastsList from "@/app/admin/broadcasts/BroadcastsList";
import { getBroadcastsAction } from "@/domains/broadcast/actions/BroadcastActions";

export default async function AdminBroadcastsPage() {
  const result = await getBroadcastsAction();
  const broadcasts = result.success ? result.data : [];

  return (
    <div>
      <div className="mb-8 pb-6 border-b-2 border-[#e0e0e0]">
        <h1 className="text-3xl font-bold text-black uppercase tracking-wide">Broadcasts</h1>
      </div>
      <BroadcastsList broadcasts={broadcasts} />
    </div>
  );
}
