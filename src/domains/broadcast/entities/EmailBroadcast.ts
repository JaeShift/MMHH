type EmailBroadcast = {
  id: string;
  subject: string;
  bodyText: string;
  recipientCount: number;
  sentAt: Date | null;
  broadcastType: "IMMEDIATE" | "WEEKLY";
  status: "SENT" | "SCHEDULED" | "FAILED";
  isActive: boolean;
  timezone: string | null;
  weeklyDayOfWeek: number | null;
  weeklyTime: string | null;
  nextRunAt: Date | null;
  lastRunAt: Date | null;
  lastRunStatus: "SUCCESS" | "FAILED" | null;
  lastError: string | null;
  adminId: string;
  createdAt: Date;
};

export type { EmailBroadcast };
