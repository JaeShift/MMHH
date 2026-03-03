"use client";

import { Loader2, Search, Trash2, Plus, Edit2, X } from "lucide-react";
import { useMemo, useState, useTransition } from "react";
import { deleteSubscriberAction, subscribeAction, updateSubscriberAction } from "@/domains/newsletter/actions/NewsletterActions";

type Subscriber = {
  id: string;
  firstName: string | null;
  email: string;
  source: string;
  createdAt: Date;
};

const LOCATIONS = [
  "SPENGA Gahanna QR",
  "SPENGA Dublin QR",
  "SPENGA Westerville QR",
  "Website Form",
  "Manual Admin Add",
  "Other"
];

export default function SubscribersTable({ subscribers }: { subscribers: Subscriber[] }) {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [source, setSource] = useState(LOCATIONS[0]);
  const [addMessage, setAddMessage] = useState("");

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

  function onEdit(subscriber: Subscriber) {
    setEditingId(subscriber.id);
    setFirstName(subscriber.firstName || "");
    setEmail(subscriber.email);
    setSource(subscriber.source);
  }

  function onCancelEdit() {
    setEditingId(null);
    setFirstName("");
    setEmail("");
    setSource(LOCATIONS[0]);
  }

  function onSaveEdit(id: string) {
    if (!email.trim()) {
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      alert("Please enter a valid email address");
      return;
    }

    startTransition(async () => {
      const result = await updateSubscriberAction({
        id,
        firstName: firstName.trim() || undefined,
        email: email.trim(),
        source,
      });

      if (result.success) {
        setEditingId(null);
        setFirstName("");
        setEmail("");
        setSource(LOCATIONS[0]);
        window.location.reload();
      }
    });
  }

  function onAddSubscriber(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAddMessage("");

    if (!email.trim()) {
      setAddMessage("Email is required");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setAddMessage("Please enter a valid email address");
      return;
    }

    startTransition(async () => {
      const result = await subscribeAction({
        firstName: firstName.trim() || undefined,
        email: email.trim(),
        source,
      });

      if (result.success) {
        setAddMessage("Subscriber added successfully!");
        setFirstName("");
        setEmail("");
        setSource(LOCATIONS[0]);
        setTimeout(() => {
          setShowAddForm(false);
          setAddMessage("");
          window.location.reload();
        }, 1500);
      } else {
        setAddMessage(result.error || "Failed to add subscriber");
      }
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
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 bg-[#0066cc] px-4 py-3 text-sm font-bold text-white transition-all hover:bg-[#005bb5] whitespace-nowrap"
        >
          <Plus className="h-4 w-4" />
          Add Subscriber
        </button>
        {isPending ? (
          <div className="flex items-center gap-1.5 text-xs text-[#666] font-semibold">
            <Loader2 className="h-4 w-4 animate-spin" />
            Updating...
          </div>
        ) : null}
      </div>

      {showAddForm ? (
        <div className="mb-6 border-t-4 border-[#0066cc] bg-[#f9f9f9] p-6">
          <h3 className="text-lg font-bold text-black uppercase tracking-wide mb-4">Add New Subscriber</h3>
          <form onSubmit={onAddSubscriber} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name (optional)"
                className="border-2 border-[#d1d5db] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address *"
                required
                className="border-2 border-[#d1d5db] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20"
              />
              <select
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="border-2 border-[#d1d5db] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20"
              >
                {LOCATIONS.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={isPending}
                className="flex items-center gap-2 bg-[#0066cc] px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#005bb5] disabled:opacity-60"
              >
                {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
                {isPending ? "Adding..." : "Add Subscriber"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  setFirstName("");
                  setEmail("");
                  setSource(LOCATIONS[0]);
                  setAddMessage("");
                }}
                className="border-2 border-[#d1d5db] px-5 py-2.5 font-semibold text-[#666] transition-all hover:bg-[#f0f0f0]"
              >
                Cancel
              </button>
            </div>
            {addMessage ? (
              <p className={`text-sm ${addMessage.includes("success") ? "text-green-700" : "text-red-700"}`}>
                {addMessage}
              </p>
            ) : null}
          </form>
        </div>
      ) : null}

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
            {filteredSubscribers.map((subscriber, index) => {
              const isEditing = editingId === subscriber.id;
              
              return (
                <tr key={subscriber.id} className={`transition-colors hover:bg-[#f9f9f9] ${index % 2 === 1 ? "bg-[#fafafa]" : ""}`}>
                  {isEditing ? (
                    <>
                      <td className="px-4 py-4">
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="First Name"
                          className="w-full border-2 border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none transition focus:border-[#0066cc]"
                        />
                      </td>
                      <td className="px-4 py-4">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          required
                          className="w-full border-2 border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none transition focus:border-[#0066cc]"
                        />
                      </td>
                      <td className="px-4 py-4">
                        <select
                          value={source}
                          onChange={(e) => setSource(e.target.value)}
                          className="w-full border-2 border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none transition focus:border-[#0066cc]"
                        >
                          {LOCATIONS.map((location) => (
                            <option key={location} value={location}>
                              {location}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-4 text-[#666]">{new Date(subscriber.createdAt).toLocaleDateString()}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onSaveEdit(subscriber.id)}
                            disabled={isPending}
                            className="flex items-center gap-1.5 border-2 border-green-500 bg-white px-3 py-2 text-xs font-bold text-green-600 transition-colors hover:bg-green-50 disabled:opacity-60"
                          >
                            {isPending ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : "Save"}
                          </button>
                          <button
                            onClick={onCancelEdit}
                            disabled={isPending}
                            className="flex items-center gap-1.5 border-2 border-[#d1d5db] bg-white px-3 py-2 text-xs font-bold text-[#666] transition-colors hover:bg-[#f0f0f0]"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-4 py-4 text-black font-medium">{subscriber.firstName || "-"}</td>
                      <td className="px-4 py-4 text-black">{subscriber.email}</td>
                      <td className="px-4 py-4 text-[#666]">{subscriber.source}</td>
                      <td className="px-4 py-4 text-[#666]">{new Date(subscriber.createdAt).toLocaleDateString()}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onEdit(subscriber)}
                            className="flex items-center gap-1.5 border-2 border-[#0066cc] bg-white px-3 py-2 text-xs font-bold text-[#0066cc] transition-colors hover:bg-blue-50"
                          >
                            <Edit2 className="h-3.5 w-3.5" />
                            Edit
                          </button>
                          <button
                            onClick={() => onDelete(subscriber.id)}
                            className="flex items-center gap-1.5 border-2 border-red-500 bg-white px-3 py-2 text-xs font-bold text-red-600 transition-colors hover:bg-red-50"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                            Delete
                          </button>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
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
