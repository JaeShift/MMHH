import { notFound } from "next/navigation";
import GiveawayDetailManager from "@/app/admin/giveaways/[id]/GiveawayDetailManager";
import { getGiveawayByIdAction } from "@/domains/giveaway/actions/GiveawayActions";

export default async function GiveawayDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const result = await getGiveawayByIdAction(id);
  const giveaway = result.success ? result.data : null;

  if (!giveaway) {
    notFound();
  }

  return (
    <div>
      <div className="mb-8">
        <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] font-semibold">Promotions</p>
        <h1 className="font-heading italic font-light text-4xl sm:text-5xl text-black mt-3">Giveaway Detail</h1>
        <div className="flex items-center gap-3 mt-4">
          <div className="h-px w-12 bg-[#8B9D7F]/30" />
          <div className="w-2 h-2 rounded-full bg-[#8B9D7F]" />
          <div className="h-px w-12 bg-[#8B9D7F]/30" />
        </div>
        <p className="mt-4 text-sm text-[#6B5B4D]">Public URL: /giveaway/{giveaway.slug}</p>
      </div>
      <GiveawayDetailManager giveaway={giveaway} />
    </div>
  );
}
