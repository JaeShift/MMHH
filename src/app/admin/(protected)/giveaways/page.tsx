import GiveawaysManager from "@/app/admin/giveaways/GiveawaysManager";
import { getGiveawaysAction } from "@/domains/giveaway/actions/GiveawayActions";

export default async function AdminGiveawaysPage() {
  const result = await getGiveawaysAction();
  const giveaways = result.success ? result.data : [];

  return (
    <div>
      <div className="mb-8 pb-6 border-b-2 border-[#e0e0e0]">
        <h1 className="text-3xl font-bold text-black uppercase tracking-wide">Giveaways</h1>
        <p className="mt-2 text-sm text-[#666] font-semibold">Create campaign URLs, collect entries, and pick a random winner.</p>
      </div>
      <GiveawaysManager giveaways={giveaways} />
    </div>
  );
}
