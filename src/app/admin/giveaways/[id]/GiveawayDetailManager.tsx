"use client";

import { Copy, Loader2, Power, Send, Trophy } from "lucide-react";
import { useState, useTransition } from "react";
import { pickWinnerAction, sendWinnerEmailAction, toggleGiveawayActiveAction } from "@/domains/giveaway/actions/GiveawayActions";

type GiveawayDetail = {
  id: string;
  title: string;
  description: string | null;
  slug: string;
  isActive: boolean;
  winnerEntryId: string | null;
  winnerEntry: { id: string; firstName: string; email: string } | null;
  entries: Array<{ id: string; firstName: string; email: string; createdAt: Date }>;
};

export default function GiveawayDetailManager({ giveaway }: { giveaway: GiveawayDetail }) {
  const [subject, setSubject] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function copyUrl() {
    const publicUrl = `${window.location.origin}/giveaway/${giveaway.slug}`;
    navigator.clipboard.writeText(publicUrl);
    setMessage("Public giveaway URL copied.");
  }

  function onPickWinner() {
    if (!window.confirm("Pick a random winner now?")) {
      return;
    }
    startTransition(async () => {
      const result = await pickWinnerAction({ giveawayId: giveaway.id });
      setMessage(result.success ? "Winner selected." : result.error || "Failed to pick winner.");
      window.location.reload();
    });
  }

  function onToggle() {
    startTransition(async () => {
      await toggleGiveawayActiveAction({ id: giveaway.id, isActive: !giveaway.isActive });
      window.location.reload();
    });
  }

  function onSendWinnerEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const winner = giveaway.winnerEntry;
    if (!winner) {
      return;
    }
    startTransition(async () => {
      const result = await sendWinnerEmailAction({
        email: winner.email,
        firstName: winner.firstName,
        subject,
        bodyText,
      });
      setMessage(result.success ? "Winner email sent." : result.error || "Failed to send winner email.");
      if (result.success) {
        setSubject("");
        setBodyText("");
      }
    });
  }

  return (
    <div className="space-y-6">
      {/* Giveaway Info */}
      <div className="relative overflow-hidden rounded-2xl border border-[#E2D9CD] bg-[#FCF8F0] p-6 shadow-sm">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#75866D]" />
        <h2 className="font-heading italic font-light text-3xl text-black mt-2">{giveaway.title}</h2>
        <p className="mt-2 text-[17px] text-black font-light">{giveaway.description || "No description provided."}</p>
        <div className="mt-3">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
              giveaway.isActive
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-[#E2D9CD] bg-[#F5F1E9] text-[#6B5B4D]"
            }`}
          >
            {giveaway.isActive ? "Active" : "Closed"}
          </span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            className="inline-flex items-center gap-2 rounded-xl border border-[#E2D9CD] bg-white px-4 py-2.5 text-sm text-black transition-all hover:bg-[#F5F1E9] hover:shadow-sm"
            onClick={copyUrl}
          >
            <Copy className="h-4 w-4 text-[#75866D]" />
            Copy Public URL
          </button>
          <button
            className="inline-flex items-center gap-2 rounded-xl border border-[#E2D9CD] bg-white px-4 py-2.5 text-sm text-black transition-all hover:bg-[#F5F1E9] hover:shadow-sm"
            onClick={onToggle}
          >
            <Power className="h-4 w-4 text-[#75866D]" />
            {giveaway.isActive ? "Close Giveaway" : "Reopen Giveaway"}
          </button>
          {!giveaway.winnerEntryId ? (
            <button
              className="inline-flex items-center gap-2 rounded-xl bg-[#75866D] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#677560] hover:shadow-lg"
              onClick={onPickWinner}
            >
              <Trophy className="h-4 w-4" />
              Pick Random Winner
            </button>
          ) : null}
        </div>
      </div>

      {/* Winner Card */}
      {giveaway.winnerEntry ? (
        <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-200 bg-white p-6 shadow-sm">
          <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
          <div className="flex items-center gap-3 mt-1">
            <Trophy className="h-5 w-5 text-emerald-600" />
            <h3 className="font-heading italic font-light text-2xl text-black">Winner</h3>
          </div>
          <p className="mt-2 text-[17px] text-black font-light">
            {giveaway.winnerEntry.firstName} ({giveaway.winnerEntry.email})
          </p>

          <form onSubmit={onSendWinnerEmail} className="mt-5 border-t border-emerald-100 pt-5 space-y-3">
            <p className="uppercase tracking-[0.16em] text-xs font-semibold text-[#6B5B4D]">Send Winner Email</p>
            <input
              required
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder="Email subject"
              className="w-full rounded-xl border border-[#E2D9CD] bg-[#FCF8F0] px-4 py-3 outline-none transition focus:border-[#75866D] focus:ring-2 focus:ring-[#75866D]/20"
            />
            <textarea
              required
              rows={6}
              value={bodyText}
              onChange={(event) => setBodyText(event.target.value)}
              placeholder="Custom winner message..."
              className="w-full rounded-xl border border-[#E2D9CD] bg-[#FCF8F0] px-4 py-3 outline-none transition focus:border-[#75866D] focus:ring-2 focus:ring-[#75866D]/20"
            />
            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center gap-2 rounded-xl bg-[#75866D] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#677560] hover:shadow-lg disabled:opacity-60"
            >
              {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {isPending ? "Sending..." : "Send Winner Email"}
            </button>
          </form>
        </div>
      ) : null}

      {/* Entries Table */}
      <div className="overflow-x-auto rounded-xl border border-[#E2D9CD]">
        <table className="min-w-full divide-y divide-[#E2D9CD] text-sm">
          <thead className="bg-[#F5F1E9] text-left">
            <tr>
              <th className="px-4 py-3.5 font-semibold text-black">First Name</th>
              <th className="px-4 py-3.5 font-semibold text-black">Email</th>
              <th className="px-4 py-3.5 font-semibold text-black">Entered</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0E8DD] bg-white">
            {giveaway.entries.map((entry, index) => (
              <tr key={entry.id} className={`transition-colors hover:bg-[#FCF8F0] ${index % 2 === 1 ? "bg-[#FDFBF6]" : ""}`}>
                <td className="px-4 py-3.5 text-black">{entry.firstName}</td>
                <td className="px-4 py-3.5 text-black">{entry.email}</td>
                <td className="px-4 py-3.5 text-[#6B5B4D]">{new Date(entry.createdAt).toLocaleString()}</td>
              </tr>
            ))}
            {!giveaway.entries.length ? (
              <tr>
                <td colSpan={3} className="px-4 py-10 text-center text-[#6B5B4D]">
                  No entries yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      {message ? (
        <p className="rounded-xl border border-[#E2D9CD] bg-[#F5F1E9] px-4 py-3 text-sm text-black">{message}</p>
      ) : null}
    </div>
  );
}
