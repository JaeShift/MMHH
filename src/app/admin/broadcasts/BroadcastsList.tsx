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
      <div className="mb-5 flex items-center justify-between">
        <p className="text-[17px] text-black font-light">Track all newsletter sends in one place.</p>
        <Link
          href="/admin/broadcasts/new"
          className="inline-flex items-center gap-2 rounded-xl bg-[#75866D] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#677560] hover:shadow-lg"
        >
          <PenLine className="h-4 w-4" />
          Compose New
        </Link>
      </div>

      {isPending ? (
        <div className="mb-3 flex items-center gap-1.5 text-xs text-[#6B5B4D]">
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
          Updating...
        </div>
      ) : null}

      <div className="overflow-x-auto rounded-xl border border-[#E2D9CD]">
        <table className="min-w-full divide-y divide-[#E2D9CD] text-sm">
          <thead className="bg-[#F5F1E9] text-left">
            <tr>
              <th className="px-4 py-3.5 font-semibold text-black">Subject</th>
              <th className="px-4 py-3.5 font-semibold text-black">Type</th>
              <th className="px-4 py-3.5 font-semibold text-black">Status</th>
              <th className="px-4 py-3.5 font-semibold text-black">Recipients</th>
              <th className="px-4 py-3.5 font-semibold text-black">Sent / Next Run</th>
              <th className="px-4 py-3.5 font-semibold text-black">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0E8DD] bg-white">
            {broadcasts.map((broadcast, index) => {
              const isWeekly = broadcast.broadcastType === "WEEKLY";
              const statusLabel = isWeekly
                ? broadcast.isActive === false
                  ? "Inactive"
                  : (broadcast.status || "SCHEDULED")
                : "SENT";
              const statusColor = statusLabel === "SENT" || statusLabel === "SCHEDULED"
                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                : statusLabel === "Inactive" || statusLabel === "FAILED"
                  ? "bg-amber-50 text-amber-700 border-amber-200"
                  : "bg-[#F5F1E9] text-[#6B5B4D] border-[#E2D9CD]";

              return (
                <tr key={broadcast.id} className={`transition-colors hover:bg-[#FCF8F0] ${index % 2 === 1 ? "bg-[#FDFBF6]" : ""}`}>
                  <td className="px-4 py-3.5 text-black font-medium">{broadcast.subject}</td>
                  <td className="px-4 py-3.5 text-[#6B5B4D]">
                    {isWeekly ? "Weekly" : "Immediate"}
                    {isWeekly && broadcast.weeklyDayOfWeek !== null && broadcast.weeklyDayOfWeek !== undefined ? (
                      <span className="ml-1 text-xs">({weekdayLabels[broadcast.weeklyDayOfWeek]} {broadcast.weeklyTime || "--"})</span>
                    ) : null}
                  </td>
                  <td className="px-4 py-3.5">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColor}`}>
                      {statusLabel}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-[#6B5B4D]">{broadcast.recipientCount}</td>
                  <td className="px-4 py-3.5 text-[#6B5B4D] text-xs">
                    {isWeekly && broadcast.nextRunAt
                      ? new Date(broadcast.nextRunAt).toLocaleString()
                      : broadcast.sentAt
                        ? new Date(broadcast.sentAt).toLocaleString()
                        : "--"}
                  </td>
                  <td className="px-4 py-3.5">
                    <button
                      className="flex items-center gap-1.5 rounded-lg border border-red-200 px-2.5 py-1.5 text-xs text-red-700 transition-colors hover:bg-red-50"
                      onClick={() => onDelete(broadcast.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            {!broadcasts.length ? (
              <tr>
                <td className="px-4 py-10 text-center text-[#6B5B4D]" colSpan={6}>
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
