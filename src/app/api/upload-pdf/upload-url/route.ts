import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,

      // This runs BEFORE the browser uploads to Blob
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        // Auth check for admin-only access
        const session = await auth();
        if (!session?.user?.id) {
          throw new Error("Unauthorized");
        }

        // Allow PDF uploads only
        return {
          allowedContentTypes: ["application/pdf"],
          maximumSizeInBytes: 50 * 1024 * 1024, // 50MB
          tokenPayload: typeof clientPayload === "string" ? clientPayload : undefined,
        };
      },

      // This runs AFTER upload completes (callback/webhook from Blob)
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // Optional: update DB here if you want (e.g., attach blob.url to a broadcast)
        // NOTE: this callback does NOT work on localhost without a public URL (ngrok, etc.)
        console.log("Upload completed:", blob.url, tokenPayload);
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 400 }
    );
  }
}
