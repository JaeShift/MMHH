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
      <div className="bg-[#f5f5f5] p-6 border-l-4 border-[#0066cc] border-t border-r border-b border-[#e0e0e0]">
        <h2 className="text-xl font-bold text-black uppercase tracking-wide mb-1">Create Giveaway</h2>
        <form onSubmit={onCreate} className="mt-5">
          <div className="grid gap-3 md:grid-cols-2">
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              placeholder="Giveaway title"
              className="border-2 border-[#d1d5db] bg-white px-4 py-3 outline-none transition focus:border-[#0066cc] focus:ring-0"
            />
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Description (optional)"
              className="border-2 border-[#d1d5db] bg-white px-4 py-3 outline-none transition focus:border-[#0066cc] focus:ring-0"
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="mt-4 inline-flex items-center gap-2 bg-[#0066cc] px-5 py-3 font-bold text-white transition-all duration-150 hover:bg-[#0052a3] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
            {isPending ? "Saving..." : "Create Giveaway"}
          </button>
          {message ? <p className="mt-3 text-sm text-[#666] font-semibold">{message}</p> : null}
        </form>
      </div>

      {/* Giveaways Table */}
      <div className="overflow-x-auto border-2 border-[#d1d5db]">
        <table className="min-w-full divide-y-2 divide-[#d1d5db] text-sm">
          <thead className="bg-[#f5f5f5] text-left">
            <tr>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Title</th>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Status</th>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Entries</th>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Winner</th>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Created</th>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e0e0e0] bg-white">
            {giveaways.map((giveaway, index) => (
              <tr key={giveaway.id} className={`transition-colors hover:bg-[#f9f9f9] ${index % 2 === 1 ? "bg-[#fafafa]" : ""}`}>
                <td className="px-4 py-4">
                  <Link href={`/admin/giveaways/${giveaway.id}`} className="font-bold text-[#0066cc] hover:underline">
                    {giveaway.title}
                  </Link>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 text-xs font-bold ${
                      giveaway.isActive
                        ? "border-2 border-green-500 bg-green-50 text-green-700"
                        : "border-2 border-[#d1d5db] bg-[#f5f5f5] text-[#666]"
                    }`}
                  >
                    {giveaway.isActive ? "Active" : "Closed"}
                  </span>
                </td>
                <td className="px-4 py-4 text-[#666] font-semibold">{giveaway.entries.length}</td>
                <td className="px-4 py-4 text-[#666]">{giveaway.winnerEntry?.email || "-"}</td>
                <td className="px-4 py-4 text-[#666]">{new Date(giveaway.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onToggle(giveaway.id, !giveaway.isActive)}
                      className="border-2 border-[#d1d5db] bg-white px-3 py-2 text-xs font-bold text-black transition-colors hover:bg-[#f5f5f5]"
                    >
                      {giveaway.isActive ? "Close" : "Reopen"}
                    </button>
                    <button
                      onClick={() => onDelete(giveaway.id)}
                      className="flex items-center gap-1.5 border-2 border-red-500 bg-white px-3 py-2 text-xs font-bold text-red-600 transition-colors hover:bg-red-50"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {!giveaways.length ? (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center text-[#666] font-semibold">
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
