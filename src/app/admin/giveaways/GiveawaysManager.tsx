"use client";

import Link from "next/link";
import { Loader2, Plus, Trash2 } from "lucide-react";
import { useState, useTransition } from "react";
import {
  createGiveawayAction,
  deleteGiveawayAction,
  toggleGiveawayActiveAction,
} from "@/domains/giveaway/actions/GiveawayActions";

type GiveawayItem = {
  id: string;
  title: string;
  slug: string;
  isActive: boolean;
  winnerEntryId: string | null;
  entries: Array<{ id: string }>;
  winnerEntry?: { email: string; firstName: string } | null;
  createdAt: Date;
};

export default function GiveawaysManager({ giveaways }: { giveaways: GiveawayItem[] }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  function onCreate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    startTransition(async () => {
      const result = await createGiveawayAction({ title, description });
      if (!result.success) {
        setMessage(result.error || "Failed to create giveaway.");
        return;
      }
      setTitle("");
      setDescription("");
      window.location.reload();
    });
  }

  function onToggle(id: string, isActive: boolean) {
    startTransition(async () => {
      await toggleGiveawayActiveAction({ id, isActive });
      window.location.reload();
    });
  }

  function onDelete(id: string) {
    if (!window.confirm("Delete this giveaway and all entries?")) {
      return;
    }
    startTransition(async () => {
      await deleteGiveawayAction({ id });
      window.location.reload();
    });
  }

  return (
    <div className="space-y-6">
      {/* Create Form */}
      <div className="relative overflow-hidden rounded-2xl border border-[#E2D9CD] bg-[#FCF8F0] p-6 shadow-sm">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#75866D]" />
        <h2 className="font-heading italic font-light text-2xl md:text-3xl text-black mt-2">Create Giveaway</h2>
        <form onSubmit={onCreate} className="mt-5">
          <div className="grid gap-3 md:grid-cols-2">
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              placeholder="Giveaway title"
              className="rounded-xl border border-[#E2D9CD] bg-white px-4 py-3 outline-none transition focus:border-[#75866D] focus:ring-2 focus:ring-[#75866D]/20"
            />
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Description (optional)"
              className="rounded-xl border border-[#E2D9CD] bg-white px-4 py-3 outline-none transition focus:border-[#75866D] focus:ring-2 focus:ring-[#75866D]/20"
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#75866D] px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#677560] hover:shadow-lg disabled:opacity-60"
          >
            {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
            {isPending ? "Saving..." : "Create Giveaway"}
          </button>
          {message ? <p className="mt-3 text-sm text-[#6B5B4D]">{message}</p> : null}
        </form>
      </div>

      {/* Giveaways Table */}
      <div className="overflow-x-auto rounded-xl border border-[#E2D9CD]">
        <table className="min-w-full divide-y divide-[#E2D9CD] text-sm">
          <thead className="bg-[#F5F1E9] text-left">
            <tr>
              <th className="px-4 py-3.5 font-semibold text-black">Title</th>
              <th className="px-4 py-3.5 font-semibold text-black">Status</th>
              <th className="px-4 py-3.5 font-semibold text-black">Entries</th>
              <th className="px-4 py-3.5 font-semibold text-black">Winner</th>
              <th className="px-4 py-3.5 font-semibold text-black">Created</th>
              <th className="px-4 py-3.5 font-semibold text-black">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0E8DD] bg-white">
            {giveaways.map((giveaway, index) => (
              <tr key={giveaway.id} className={`transition-colors hover:bg-[#FCF8F0] ${index % 2 === 1 ? "bg-[#FDFBF6]" : ""}`}>
                <td className="px-4 py-3.5">
                  <Link href={`/admin/giveaways/${giveaway.id}`} className="font-medium text-[#75866D] underline-offset-2 hover:underline">
                    {giveaway.title}
                  </Link>
                </td>
                <td className="px-4 py-3.5">
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                      giveaway.isActive
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-[#E2D9CD] bg-[#F5F1E9] text-[#6B5B4D]"
                    }`}
                  >
                    {giveaway.isActive ? "Active" : "Closed"}
                  </span>
                </td>
                <td className="px-4 py-3.5 text-[#6B5B4D]">{giveaway.entries.length}</td>
                <td className="px-4 py-3.5 text-[#6B5B4D]">{giveaway.winnerEntry?.email || "-"}</td>
                <td className="px-4 py-3.5 text-[#6B5B4D]">{new Date(giveaway.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-3.5">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onToggle(giveaway.id, !giveaway.isActive)}
                      className="rounded-lg border border-[#E2D9CD] px-2.5 py-1.5 text-xs text-black transition-colors hover:bg-[#F5F1E9]"
                    >
                      {giveaway.isActive ? "Close" : "Reopen"}
                    </button>
                    <button
                      onClick={() => onDelete(giveaway.id)}
                      className="flex items-center gap-1.5 rounded-lg border border-red-200 px-2.5 py-1.5 text-xs text-red-700 transition-colors hover:bg-red-50"
                    >
                      <Trash2 className="h-3 w-3" />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {!giveaways.length ? (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-[#6B5B4D]">
                  No giveaways yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
