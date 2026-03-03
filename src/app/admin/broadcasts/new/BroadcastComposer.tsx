"use client";

import { Eye, Loader2, Send, Calendar, Upload, X, Users, CheckSquare, Square } from "lucide-react";
import { useState, useTransition, useMemo } from "react";
import { scheduleWeeklyBroadcastAction, sendBroadcastAction } from "@/domains/broadcast/actions/BroadcastActions";
import { upload } from "@vercel/blob/client";

type Subscriber = {
  id: string;
  firstName: string | null;
  email: string;
  source: string;
  createdAt: Date;
};

export default function BroadcastComposer({ subscribers }: { subscribers: Subscriber[] }) {
  const [subject, setSubject] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [weekday, setWeekday] = useState<"SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY">("MONDAY");
  const [time, setTime] = useState("09:00");
  const [statusMessage, setStatusMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfName, setPdfName] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [selectedSubscriberIds, setSelectedSubscriberIds] = useState<Set<string>>(new Set(subscribers.map(s => s.id)));
  const [showSubscriberList, setShowSubscriberList] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSubscribers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return subscribers;
    return subscribers.filter(
      (sub) =>
        sub.email.toLowerCase().includes(query) ||
        (sub.firstName || "").toLowerCase().includes(query) ||
        sub.source.toLowerCase().includes(query)
    );
  }, [searchQuery, subscribers]);

  const selectedCount = selectedSubscriberIds.size;
  const allFilteredSelected = filteredSubscribers.every(sub => selectedSubscriberIds.has(sub.id));
  const allSelected = selectedCount === subscribers.length;

  function getSendButtonText() {
    if (selectedCount === 0) return "No Subscribers Selected";
    if (selectedCount === 1) return "Send to Subscriber";
    if (allSelected) return "Send to All Subscribers";
    return "Send to Subscribers";
  }

  function toggleSelectAll() {
    if (allFilteredSelected) {
      // Deselect all filtered subscribers
      const newSet = new Set(selectedSubscriberIds);
      filteredSubscribers.forEach(sub => newSet.delete(sub.id));
      setSelectedSubscriberIds(newSet);
    } else {
      // Select all filtered subscribers
      const newSet = new Set(selectedSubscriberIds);
      filteredSubscribers.forEach(sub => newSet.add(sub.id));
      setSelectedSubscriberIds(newSet);
    }
  }

  function toggleSubscriber(id: string) {
    const newSet = new Set(selectedSubscriberIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedSubscriberIds(newSet);
  }

  async function handlePdfUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setStatusMessage("");

    try {
      console.log("Starting client-side upload:", { name: file.name, size: file.size });

      // Client-side direct upload to Vercel Blob
      const blob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/upload-pdf/upload-url",
      });

      console.log("Upload successful:", blob.url);

      setPdfUrl(blob.url);
      setPdfName(file.name);
      setStatusMessage("PDF uploaded successfully");
    } catch (error) {
      console.error("Upload exception:", error);
      const errorMsg = error instanceof Error ? error.message : "Failed to upload PDF";
      setStatusMessage(`Upload error: ${errorMsg}`);
    } finally {
      setIsUploading(false);
    }
  }

  function removePdf() {
    setPdfUrl("");
    setPdfName("");
  }

  function onSendNow(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage("");

    if (selectedCount === 0) {
      setStatusMessage("Please select at least one subscriber.");
      return;
    }

    const confirmed = window.confirm(`Send this email to ${selectedCount} selected subscriber${selectedCount === 1 ? '' : 's'}?`);
    if (!confirmed) {
      return;
    }

    startTransition(async () => {
      const result = await sendBroadcastAction({ 
        subject, 
        bodyText, 
        pdfUrl: pdfUrl || undefined, 
        pdfName: pdfName || undefined,
        subscriberIds: Array.from(selectedSubscriberIds)
      });
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

    if (selectedCount === 0) {
      setStatusMessage("Please select at least one subscriber.");
      return;
    }

    const confirmed = window.confirm(`Schedule this message to send every ${weekday.toLowerCase()} at ${time} (America/New_York) to ${selectedCount} subscriber${selectedCount === 1 ? '' : 's'}?`);
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
        pdfUrl: pdfUrl || undefined,
        pdfName: pdfName || undefined,
        subscriberIds: Array.from(selectedSubscriberIds)
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
      <div className="bg-white p-6 shadow-md border-t-4 border-[#0066cc] border-r border-b border-l border-[#e0e0e0]">
        {/* Recipient Selection */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => setShowSubscriberList(!showSubscriberList)}
            className="w-full inline-flex items-center justify-between gap-2 bg-[#e3f2fd] border-l-4 border-[#0066cc] px-4 py-2.5 text-xs font-bold text-black transition-colors hover:bg-[#d1e9fc]"
          >
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{selectedCount} of {subscribers.length} Recipients Selected</span>
            </div>
            <span className="text-[10px]">{showSubscriberList ? "▼ Hide" : "▶ Show"}</span>
          </button>

          {showSubscriberList && (
            <div className="mt-2 border-2 border-[#d1d5db] bg-[#fafafa] max-h-80 overflow-y-auto">
              <div className="sticky top-0 bg-white border-b-2 border-[#d1d5db] p-3 space-y-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search subscribers..."
                  className="w-full border-2 border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none transition focus:border-[#0066cc]"
                />
                <button
                  type="button"
                  onClick={toggleSelectAll}
                  className="flex items-center gap-2 text-xs font-bold text-[#0066cc] hover:text-[#005bb5] transition-colors"
                >
                  {allFilteredSelected ? (
                    <>
                      <CheckSquare className="h-4 w-4" />
                      Deselect All {searchQuery ? "Filtered" : ""}
                    </>
                  ) : (
                    <>
                      <Square className="h-4 w-4" />
                      Select All {searchQuery ? "Filtered" : ""}
                    </>
                  )}
                </button>
              </div>
              <div className="divide-y divide-[#e0e0e0]">
                {filteredSubscribers.map((subscriber) => {
                  const isSelected = selectedSubscriberIds.has(subscriber.id);
                  return (
                    <label
                      key={subscriber.id}
                      className={`flex items-start gap-3 p-3 cursor-pointer transition-colors ${
                        isSelected ? "bg-[#e3f2fd]" : "hover:bg-white"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSubscriber(subscriber.id)}
                        className="mt-1 h-4 w-4 cursor-pointer accent-[#0066cc]"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-black truncate">
                          {subscriber.firstName || "No Name"} 
                        </div>
                        <div className="text-xs text-[#666] truncate">{subscriber.email}</div>
                        <div className="text-[10px] text-[#999] mt-0.5">{subscriber.source}</div>
                      </div>
                    </label>
                  );
                })}
                {filteredSubscribers.length === 0 && (
                  <div className="p-6 text-center text-sm text-[#666]">
                    No subscribers match your search.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <input
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required
            placeholder="Email subject"
            className="w-full border-2 border-[#d1d5db] bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[#0066cc] focus:ring-0"
          />
          <textarea
            value={bodyText}
            onChange={(event) => setBodyText(event.target.value)}
            required
            rows={14}
            placeholder="Write your newsletter message..."
            className="w-full border-2 border-[#d1d5db] bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[#0066cc] focus:ring-0"
          />

          {/* PDF Attachment */}
          <div>
            <label className="block text-xs font-bold text-black uppercase tracking-wide mb-2">
              PDF Attachment (Optional)
            </label>
            {!pdfUrl ? (
              <label className="flex items-center justify-center gap-2 border-2 border-dashed border-[#d1d5db] bg-[#f5f5f5] px-4 py-6 text-sm font-semibold text-[#666] transition-all duration-150 hover:border-[#0066cc] hover:bg-white cursor-pointer">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handlePdfUpload}
                  disabled={isUploading}
                  className="hidden"
                />
                {isUploading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4" />
                    Click to Upload PDF (Max 4MB)
                  </>
                )}
              </label>
            ) : (
              <div className="flex items-center justify-between border-2 border-[#d1d5db] bg-white px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-black">📎 {pdfName}</span>
                </div>
                <button
                  type="button"
                  onClick={removePdf}
                  className="flex items-center gap-1 text-xs font-bold text-red-600 transition-colors hover:text-red-700"
                >
                  <X className="h-4 w-4" />
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Send Now */}
        <form onSubmit={onSendNow} className="mt-6 border-t-2 border-[#e0e0e0] pt-6">
          <p className="uppercase tracking-wider text-[10px] font-bold text-[#666] mb-3">Send Now</p>
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center gap-2 bg-[#0066cc] px-5 py-3 text-sm font-bold text-white transition-all duration-150 hover:bg-[#0052a3] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {isPending ? "Sending..." : getSendButtonText()}
          </button>
        </form>

        {/* Schedule Weekly */}
        <form onSubmit={onScheduleWeekly} className="mt-6 border-t-2 border-[#e0e0e0] pt-6">
          <p className="uppercase tracking-wider text-[10px] font-bold text-[#666] mb-3">Schedule Weekly</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-xs font-bold text-black uppercase tracking-wide">Day</span>
              <select
                value={weekday}
                onChange={(event) =>
                  setWeekday(event.target.value as "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY")
                }
                className="w-full border-2 border-[#d1d5db] bg-white px-4 py-2.5 text-[15px] outline-none transition focus:border-[#0066cc] focus:ring-0"
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
            <label className="space-y-2">
              <span className="text-xs font-bold text-black uppercase tracking-wide">Time (ET)</span>
              <input
                type="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                required
                className="w-full border-2 border-[#d1d5db] bg-white px-4 py-2.5 text-[15px] outline-none transition focus:border-[#0066cc] focus:ring-0"
              />
            </label>
          </div>
          <p className="mt-3 text-xs text-[#666] font-semibold">Timezone: America/New_York (Eastern Time)</p>
          <button
            type="submit"
            disabled={isPending}
            className="mt-4 inline-flex items-center gap-2 border-2 border-[#d1d5db] bg-white px-5 py-3 text-sm font-bold text-black transition-all duration-150 hover:bg-[#f5f5f5] hover:border-[#999] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Calendar className="h-4 w-4" />}
            {isPending ? "Working..." : "Schedule Weekly Broadcast"}
          </button>
        </form>

        {statusMessage ? (
          <p className="mt-4 border-l-4 border-[#0066cc] bg-[#e3f2fd] px-4 py-3 text-sm font-semibold text-black">{statusMessage}</p>
        ) : null}
      </div>

      {/* Preview Panel */}
      <div className="bg-[#f5f5f5] p-6 shadow-md border-t-4 border-[#666] border-r border-b border-l border-[#e0e0e0]">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#666] mb-6">
          <Eye className="h-4 w-4" />
          Email Preview
        </div>

        <div className="border-2 border-[#d1d5db] bg-white p-6">
          <div className="mb-5 h-1 w-20 bg-[#0066cc]" />
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#666] mb-2">Modern Mental Health &amp; Hormones</p>
          <h2 className="text-2xl font-bold text-black">{subject || "Your Subject Line"}</h2>
          <div className="mt-4 whitespace-pre-line text-[15px] leading-relaxed text-black">
            {bodyText || "Your custom message will render here in the branded template."}
          </div>
          {pdfUrl && (
            <div className="mt-6 pt-6 border-t border-[#e0e0e0]">
              <div className="flex items-center gap-2 text-sm text-[#666]">
                <span className="text-lg">📎</span>
                <span className="font-semibold">{pdfName}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
