import BroadcastComposer from "@/app/admin/broadcasts/new/BroadcastComposer";
import { findAll } from "@/domains/newsletter/repositories/NewsletterSubscriberRepository";

export default async function NewBroadcastPage() {
  const subscribers = await findAll();

  return (
    <div>
      <div className="mb-8 pb-6 border-b-2 border-[#e0e0e0]">
        <h1 className="text-3xl font-bold text-black uppercase tracking-wide">Compose Broadcast</h1>
        <p className="mt-2 text-sm text-[#666] font-semibold">Compose your message. The branded email styling is applied automatically.</p>
      </div>
      <BroadcastComposer subscribers={subscribers} />
    </div>
  );
}
