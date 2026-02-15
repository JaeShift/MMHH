import { execute as processDueWeeklyBroadcastsUseCase } from "@/domains/broadcast/use-cases/ProcessDueWeeklyBroadcasts";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function isAuthorized(request: NextRequest) {
  const secret = process.env.ZAPIER_BROADCAST_CRON_SECRET;
  if (!secret) {
    return false;
  }

  const headerSecret = request.headers.get("x-zapier-secret");
  const authHeader = request.headers.get("authorization");
  const bearerToken = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;

  return headerSecret === secret || bearerToken === secret;
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const result = await processDueWeeklyBroadcastsUseCase();
  if (!result.success) {
    return NextResponse.json({ success: false, error: result.error || "Failed to process broadcasts." }, { status: 500 });
  }

  return NextResponse.json({ success: true, data: result.data }, { status: 200 });
}
