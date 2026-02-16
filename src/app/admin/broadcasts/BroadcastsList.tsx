"use client";

import Link from "next/link";
import { Loader2, PenLine, Trash2 } from "lucide-react";
import { useTransition } from "react";
import { deleteBroadcastAction } from "@/domains/broadcast/actions/BroadcastActions";

type Broadcast = {
  id: string;
  subject: string;
  recipientCount: number;
  sentAt: Date | string | null;
  broadcastType?: string;
  status?: string;
  isActive?: boolean;
  weeklyDayOfWeek?: number | null;
  weeklyTime?: string | null;
  timezone?: string | null;
  nextRunAt?: Date | string | null;
  lastRunAt?: Date | string | null;
  lastRunStatus?: string | null;
};

export default function BroadcastsList({ broadcasts }: { broadcasts: Broadcast[] }) {
  const [isPending, startTransition] = useTransition();
  const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function onDelete(id: string) {
    if (!window.confirm("Delete this broadcast record?")) {
      return;
    }
    startTransition(async () => {
      await deleteBroadcastAction({ id });
      window.location.reload();
    });
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-[#666] font-semibold">Track all newsletter sends in one place.</p>
        <Link
          href="/admin/broadcasts/new"
          className="inline-flex items-center gap-2 bg-[#0066cc] px-5 py-3 text-sm font-bold text-white transition-all duration-150 hover:bg-[#0052a3]"
        >
          <PenLine className="h-4 w-4" />
          Compose New
        </Link>
      </div>

      {isPending ? (
        <div className="mb-4 flex items-center gap-1.5 text-xs text-[#666] font-semibold">
          <Loader2 className="h-4 w-4 animate-spin" />
          Updating...
        </div>
      ) : null}

      <div className="overflow-x-auto border-2 border-[#d1d5db]">
        <table className="min-w-full divide-y-2 divide-[#d1d5db] text-sm">
          <thead className="bg-[#f5f5f5] text-left">
            <tr>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Subject</th>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Type</th>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Status</th>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Recipients</th>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Sent / Next Run</th>
              <th className="px-4 py-4 font-bold text-black uppercase tracking-wide text-xs">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e0e0e0] bg-white">
            {broadcasts.map((broadcast, index) => {
              const isWeekly = broadcast.broadcastType === "WEEKLY";
              const statusLabel = isWeekly
                ? broadcast.isActive === false
                  ? "Inactive"
                  : (broadcast.status || "SCHEDULED")
                : "SENT";
              const statusColor = statusLabel === "SENT" || statusLabel === "SCHEDULED"
                ? "bg-green-50 text-green-700 border-2 border-green-500"
                : statusLabel === "Inactive" || statusLabel === "FAILED"
                  ? "bg-yellow-50 text-yellow-700 border-2 border-yellow-500"
                  : "bg-[#f5f5f5] text-[#666] border-2 border-[#d1d5db]";

              return (
                <tr key={broadcast.id} className={`transition-colors hover:bg-[#f9f9f9] ${index % 2 === 1 ? "bg-[#fafafa]" : ""}`}>
                  <td className="px-4 py-4 text-black font-medium">{broadcast.subject}</td>
                  <td className="px-4 py-4 text-[#666]">
                    {isWeekly ? "Weekly" : "Immediate"}
                    {isWeekly && broadcast.weeklyDayOfWeek !== null && broadcast.weeklyDayOfWeek !== undefined ? (
                      <span className="ml-1 text-xs">({weekdayLabels[broadcast.weeklyDayOfWeek]} {broadcast.weeklyTime || "--"})</span>
                    ) : null}
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 text-xs font-bold ${statusColor}`}>
                      {statusLabel}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-[#666] font-semibold">{broadcast.recipientCount}</td>
                  <td className="px-4 py-4 text-[#666] text-xs">
                    {isWeekly && broadcast.nextRunAt
                      ? new Date(broadcast.nextRunAt).toLocaleString()
                      : broadcast.sentAt
                        ? new Date(broadcast.sentAt).toLocaleString()
                        : "--"}
                  </td>
                  <td className="px-4 py-4">
                    <button
                      className="flex items-center gap-1.5 border-2 border-red-500 bg-white px-3 py-2 text-xs font-bold text-red-600 transition-colors hover:bg-red-50"
                      onClick={() => onDelete(broadcast.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            {!broadcasts.length ? (
              <tr>
                <td className="px-4 py-12 text-center text-[#666] font-semibold" colSpan={6}>
                  No broadcasts sent yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
