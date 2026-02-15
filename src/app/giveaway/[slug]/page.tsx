import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GiveawayEntryForm from "./GiveawayEntryForm";
import { findBySlug } from "@/domains/giveaway/repositories/GiveawayRepository";

export default async function PublicGiveawayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const giveaway = await findBySlug(slug);

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-[#EBE4D6] to-[#FCF8F0] px-4 py-20 md:py-32">
        <div className="mx-auto max-w-2xl">
          {!giveaway || !giveaway.isActive ? (
            <div className="relative overflow-hidden rounded-2xl border border-[#E2D9CD] bg-white/50 backdrop-blur-sm p-10 md:p-14 text-center shadow-xl" style={{ boxShadow: '0 10px 40px -10px rgba(117, 134, 109, 0.15)' }}>
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#8B9D7F]/50" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#8B9D7F]/50" />

              <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] font-semibold">Giveaway</p>
              <h1 className="font-heading italic font-light text-4xl sm:text-5xl text-black mt-4">Giveaway Ended</h1>
              <div className="flex items-center justify-center gap-3 mt-5">
                <div className="h-px w-16 bg-[#8B9D7F]/30" />
                <div className="w-2 h-2 rounded-full bg-[#8B9D7F]" />
                <div className="h-px w-16 bg-[#8B9D7F]/30" />
              </div>
              <p className="mt-6 text-lg text-black font-light">This giveaway is no longer active. Follow us for future opportunities.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-[#E2D9CD] bg-[#FCF8F0] p-8 shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#75866D]" />
                <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] font-semibold mt-2">Weekly Wellness Community</p>
                <h1 className="font-heading italic font-light text-4xl sm:text-5xl text-black mt-4">{giveaway.title}</h1>
                <div className="flex items-center gap-3 mt-5">
                  <div className="h-px w-12 bg-[#8B9D7F]/30" />
                  <div className="w-2 h-2 rounded-full bg-[#8B9D7F]" />
                  <div className="h-px w-12 bg-[#8B9D7F]/30" />
                </div>
                <p className="mt-5 text-lg text-black font-light">{giveaway.description || "Join this giveaway for a chance to win."}</p>
              </div>
              <GiveawayEntryForm giveawayId={giveaway.id} title={giveaway.title} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
