import GiveawaysManager from "@/app/admin/giveaways/GiveawaysManager";
import { getGiveawaysAction } from "@/domains/giveaway/actions/GiveawayActions";

export default async function AdminGiveawaysPage() {
  const result = await getGiveawaysAction();
  const giveaways = result.success ? result.data : [];

  return (
    <div>
      <div className="mb-8">
        <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] font-semibold">Promotions</p>
        <h1 className="font-heading italic font-light text-4xl sm:text-5xl text-black mt-3">Giveaways</h1>
        <div className="flex items-center gap-3 mt-4">
          <div className="h-px w-12 bg-[#8B9D7F]/30" />
          <div className="w-2 h-2 rounded-full bg-[#8B9D7F]" />
          <div className="h-px w-12 bg-[#8B9D7F]/30" />
        </div>
        <p className="mt-4 text-[17px] text-black font-light">Create campaign URLs, collect entries, and pick a random winner.</p>
      </div>
      <GiveawaysManager giveaways={giveaways} />
    </div>
  );
}
