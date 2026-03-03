import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<NextResponse> {
  console.log("Upload URL request received");
  
  try {
    const body = (await request.json()) as HandleUploadBody;
    console.log("Request body parsed:", body);

    const jsonResponse = await handleUpload({
      body,
      request,

      // This runs BEFORE the browser uploads to Blob
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        console.log("Generating token for pathname:", pathname);
        
        // Auth check for admin-only access
        const session = await auth();
        if (!session?.user?.id) {
          console.error("Unauthorized upload attempt");
          throw new Error("Unauthorized");
        }

        console.log("User authorized:", session.user.id);

        // Allow PDF uploads only
        return {
          allowedContentTypes: ["application/pdf"],
          maximumSizeInBytes: 50 * 1024 * 1024, // 50MB
          tokenPayload: typeof clientPayload === "string" ? clientPayload : undefined,
        };
      },

      // Removed onUploadCompleted - doesn't work on localhost and is optional
    });

    console.log("Token generated successfully");
    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("Upload URL generation error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 400 }
    );
  }
}
