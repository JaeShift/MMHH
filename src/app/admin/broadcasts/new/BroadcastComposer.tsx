"use client";

import { Eye, Loader2, Send, Calendar } from "lucide-react";
import { useState, useTransition } from "react";
import { scheduleWeeklyBroadcastAction, sendBroadcastAction } from "@/domains/broadcast/actions/BroadcastActions";

export default function BroadcastComposer({ subscriberCount }: { subscriberCount: number }) {
  const [subject, setSubject] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [weekday, setWeekday] = useState<"SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY">("MONDAY");
  const [time, setTime] = useState("09:00");
  const [statusMessage, setStatusMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function onSendNow(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage("");

    const confirmed = window.confirm(`Send this email to ${subscriberCount} subscribers?`);
    if (!confirmed) {
      return;
    }

    startTransition(async () => {
      const result = await sendBroadcastAction({ subject, bodyText });
      if (!result.success) {
        setStatusMessage(result.error || "Failed to send broadcast.");
        return;
      }
      setStatusMessage(`Sent successfully to ${result.data?.recipientCount || 0} subscribers.`);
    });
  }

  function onScheduleWeekly(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage("");

    const confirmed = window.confirm(`Schedule this message to send every ${weekday.toLowerCase()} at ${time} (America/New_York)?`);
    if (!confirmed) {
      return;
    }

    startTransition(async () => {
      const result = await scheduleWeeklyBroadcastAction({
        subject,
        bodyText,
        weekday,
        time,
        timezone: "America/New_York",
      });

      if (!result.success) {
        setStatusMessage(result.error || "Failed to schedule weekly broadcast.");
        return;
      }

      const nextRunAt = result.data?.nextRunAt ? new Date(result.data.nextRunAt).toLocaleString() : "scheduled";
      setStatusMessage(`Weekly broadcast scheduled. Next run: ${nextRunAt}`);
    });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Editor Panel */}
      <div className="relative overflow-hidden rounded-2xl border border-[#E2D9CD] bg-white p-6 shadow-md">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#75866D]" />

        <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#EBE4D6] px-3 py-1 text-xs font-medium text-black">
          {subscriberCount} recipients
        </div>

        <div className="mt-5 space-y-4">
          <input
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required
            placeholder="Email subject"
            className="w-full rounded-xl border border-[#E2D9CD] bg-[#FCF8F0] px-4 py-3 outline-none transition focus:border-[#75866D] focus:ring-2 focus:ring-[#75866D]/20"
          />
          <textarea
            value={bodyText}
            onChange={(event) => setBodyText(event.target.value)}
            required
            rows={14}
            placeholder="Write your newsletter message..."
            className="w-full rounded-xl border border-[#E2D9CD] bg-[#FCF8F0] px-4 py-3 outline-none transition focus:border-[#75866D] focus:ring-2 focus:ring-[#75866D]/20"
          />
        </div>

        {/* Send Now */}
        <form onSubmit={onSendNow} className="mt-6 border-t border-[#EFE7DA] pt-5">
          <p className="uppercase tracking-[0.16em] text-xs font-semibold text-[#6B5B4D] mb-3">Send Now</p>
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center gap-2 rounded-xl bg-[#75866D] px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#677560] hover:shadow-lg disabled:opacity-60"
          >
            {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {isPending ? "Sending..." : "Send to all subscribers"}
          </button>
        </form>

        {/* Schedule Weekly */}
        <form onSubmit={onScheduleWeekly} className="mt-6 border-t border-[#EFE7DA] pt-5">
          <p className="uppercase tracking-[0.16em] text-xs font-semibold text-[#6B5B4D] mb-3">Schedule Weekly</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="space-y-1">
              <span className="text-xs text-[#6B5B4D]">Day</span>
              <select
                value={weekday}
                onChange={(event) =>
                  setWeekday(event.target.value as "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY")
                }
                className="w-full rounded-xl border border-[#E2D9CD] bg-[#FCF8F0] px-4 py-2.5 outline-none transition focus:border-[#75866D] focus:ring-2 focus:ring-[#75866D]/20"
              >
                <option value="SUNDAY">Sunday</option>
                <option value="MONDAY">Monday</option>
                <option value="TUESDAY">Tuesday</option>
                <option value="WEDNESDAY">Wednesday</option>
                <option value="THURSDAY">Thursday</option>
                <option value="FRIDAY">Friday</option>
                <option value="SATURDAY">Saturday</option>
              </select>
            </label>
            <label className="space-y-1">
              <span className="text-xs text-[#6B5B4D]">Time</span>
              <input
                type="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                required
                className="w-full rounded-xl border border-[#E2D9CD] bg-[#FCF8F0] px-4 py-2.5 outline-none transition focus:border-[#75866D] focus:ring-2 focus:ring-[#75866D]/20"
              />
            </label>
          </div>
          <p className="mt-2 text-xs text-[#6B5B4D]">Timezone: America/New_York</p>
          <button
            type="submit"
            disabled={isPending}
            className="mt-3 inline-flex items-center gap-2 rounded-xl border border-[#75866D] bg-white px-5 py-2.5 font-semibold text-black transition-all duration-300 hover:bg-[#F8F4EC] disabled:opacity-60"
          >
            {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Calendar className="h-4 w-4 text-[#75866D]" />}
            {isPending ? "Working..." : "Schedule weekly broadcast"}
          </button>
        </form>

        {statusMessage ? (
          <p className="mt-4 rounded-xl border border-[#E2D9CD] bg-[#F5F1E9] px-4 py-3 text-sm text-black">{statusMessage}</p>
        ) : null}
      </div>

      {/* Preview Panel */}
      <div className="relative overflow-hidden rounded-2xl border border-[#E2D9CD] bg-[#FCF8F0] p-6 shadow-md">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#8B9D7F]" />

        <div className="mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B5B4D]">
          <Eye className="h-4 w-4" />
          Live Preview
        </div>

        <div className="mt-4 rounded-xl border border-[#E2D9CD] bg-white p-6">
          <div className="mb-5 h-1 w-20 rounded-full bg-[#75866D]" />
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6B5B4D] mb-2">Modern Mental Health &amp; Hormones</p>
          <h2 className="font-heading italic font-light text-3xl text-black">{subject || "Your Subject Line"}</h2>
          <div className="mt-4 whitespace-pre-line text-[17px] leading-relaxed text-black font-light">
            {bodyText || "Your custom message will render here in the branded template."}
          </div>
        </div>
      </div>
    </div>
  );
}
