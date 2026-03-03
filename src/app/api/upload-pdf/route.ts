import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export const runtime = "nodejs";
export const maxDuration = 60;
export const dynamic = "force-dynamic";

// Vercel's body size limit configuration
export const config = {
  api: {
    bodyParser: false, // Disable default body parsing
  },
};

export async function POST(req: Request) {
  try {
    console.log("Upload request received");
    
    // Check authentication
    const session = await auth();
    if (!session?.user?.id) {
      console.error("Unauthorized upload attempt");
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    console.log("User authenticated:", session.user.id);

    // Get content length to check size before parsing
    const contentLength = req.headers.get("content-length");
    console.log("Content length:", contentLength);
    
    if (contentLength && parseInt(contentLength) > 10 * 1024 * 1024) {
      return NextResponse.json({ success: false, error: "File too large (max 10MB)" }, { status: 413 });
    }

    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ success: false, error: "No file uploaded" }, { status: 400 });
    }

    console.log("File received:", { name: file.name, size: file.size, type: file.type });

    // Validate file type
    if (file.type !== "application/pdf") {
      return NextResponse.json({ success: false, error: "Only PDF files allowed" }, { status: 400 });
    }

    // Validate file size
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json({ success: false, error: "File size must be less than 10MB" }, { status: 400 });
    }

    const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    const key = `newsletters/${Date.now()}-${safeName}`;

    console.log("Uploading to Vercel Blob:", key);
    
    const blob = await put(key, file, {
      access: "public",
      contentType: "application/pdf",
      addRandomSuffix: false,
    });

    console.log("Upload successful:", blob.url);

    return NextResponse.json({
      success: true,
      data: {
        url: blob.url,
        name: file.name,
        size: file.size,
      },
    });
  } catch (err) {
    console.error("Upload failed:", err);
    const errorMessage = err instanceof Error ? err.message : "Upload failed";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

