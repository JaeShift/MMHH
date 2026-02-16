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
      <div className="mb-6 flex items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#666]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, email, source..."
            className="w-full border-2 border-[#d1d5db] bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#0066cc] focus:ring-0"
          />
        </div>
        {isPending ? (
          <div className="flex items-center gap-1.5 text-xs text-[#666] font-semibold">
            <Loader2 className="h-4 w-4 animate-spin" />
            Updating...
          </div>
        ) : null}
      </div>

      <div className="overflow-x-auto border-2 border-[#d1d5db]">
        <table className="min-w-full divide-y-2 divide-[#d1d5db] text-sm">
          <thead className="bg-[#f5f5f5] text-left">
            <tr>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">First Name</th>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Email</th>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Source</th>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Signed Up</th>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e0e0e0] bg-white">
            {filteredSubscribers.map((subscriber, index) => (
              <tr key={subscriber.id} className={`transition-colors hover:bg-[#f9f9f9] ${index % 2 === 1 ? "bg-[#fafafa]" : ""}`}>
                <td className="px-4 py-4 text-black font-medium">{subscriber.firstName || "-"}</td>
                <td className="px-4 py-4 text-black">{subscriber.email}</td>
                <td className="px-4 py-4 text-[#666]">{subscriber.source}</td>
                <td className="px-4 py-4 text-[#666]">{new Date(subscriber.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-4">
                  <button
                    onClick={() => onDelete(subscriber.id)}
                    className="flex items-center gap-1.5 border-2 border-red-500 bg-white px-3 py-2 text-xs font-bold text-red-600 transition-colors hover:bg-red-50"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {!filteredSubscribers.length ? (
              <tr>
                <td className="px-4 py-12 text-center text-[#666] font-semibold" colSpan={5}>
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
