"use client";

import { Loader2, Search, Trash2 } from "lucide-react";
import { useMemo, useState, useTransition } from "react";
import { deleteSubscriberAction } from "@/domains/newsletter/actions/NewsletterActions";

type Subscriber = {
  id: string;
  firstName: string | null;
  email: string;
  source: string;
  createdAt: Date;
};

export default function SubscribersTable({ subscribers }: { subscribers: Subscriber[] }) {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const filteredSubscribers = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) {
      return subscribers;
    }
    return subscribers.filter(
      (subscriber) =>
        subscriber.email.toLowerCase().includes(value) ||
        (subscriber.firstName || "").toLowerCase().includes(value) ||
        subscriber.source.toLowerCase().includes(value),
    );
  }, [query, subscribers]);

  function onDelete(id: string) {
    const confirmed = window.confirm("Delete this subscriber?");
    if (!confirmed) {
      return;
    }

    startTransition(async () => {
      await deleteSubscriberAction({ id });
      window.location.reload();
    });
  }

  return (
    <div>
      <div className="mb-5 flex items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8B9D7F]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, email, source..."
            className="w-full rounded-xl border border-[#E2D9CD] bg-[#FCF8F0] py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#75866D] focus:ring-2 focus:ring-[#75866D]/20"
          />
        </div>
        {isPending ? (
          <div className="flex items-center gap-1.5 text-xs text-[#6B5B4D]">
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            Updating...
          </div>
        ) : null}
      </div>

      <div className="overflow-x-auto rounded-xl border border-[#E2D9CD]">
        <table className="min-w-full divide-y divide-[#E2D9CD] text-sm">
          <thead className="bg-[#F5F1E9] text-left">
            <tr>
              <th className="px-4 py-3.5 font-semibold text-black">First Name</th>
              <th className="px-4 py-3.5 font-semibold text-black">Email</th>
              <th className="px-4 py-3.5 font-semibold text-black">Source</th>
              <th className="px-4 py-3.5 font-semibold text-black">Signed Up</th>
              <th className="px-4 py-3.5 font-semibold text-black">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0E8DD] bg-white">
            {filteredSubscribers.map((subscriber, index) => (
              <tr key={subscriber.id} className={`transition-colors hover:bg-[#FCF8F0] ${index % 2 === 1 ? "bg-[#FDFBF6]" : ""}`}>
                <td className="px-4 py-3.5 text-black">{subscriber.firstName || "-"}</td>
                <td className="px-4 py-3.5 text-black">{subscriber.email}</td>
                <td className="px-4 py-3.5 text-[#6B5B4D]">{subscriber.source}</td>
                <td className="px-4 py-3.5 text-[#6B5B4D]">{new Date(subscriber.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-3.5">
                  <button
                    onClick={() => onDelete(subscriber.id)}
                    className="flex items-center gap-1.5 rounded-lg border border-red-200 px-2.5 py-1.5 text-xs text-red-700 transition-colors hover:bg-red-50"
                  >
                    <Trash2 className="h-3 w-3" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {!filteredSubscribers.length ? (
              <tr>
                <td className="px-4 py-10 text-center text-[#6B5B4D]" colSpan={5}>
                  No subscribers found.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
