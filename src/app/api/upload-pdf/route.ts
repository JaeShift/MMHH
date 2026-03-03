import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export const runtime = "nodejs";

// Increase body size limit for this route
export const maxDuration = 60; // 60 seconds max execution time
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    // Check authentication
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ success: false, error: "No file uploaded" }, { status: 400 });
    }

    console.log("Uploading PDF:", { name: file.name, size: file.size, type: file.type });

    // Validate file type
    if (file.type !== "application/pdf") {
      return NextResponse.json({ success: false, error: "Only PDF files allowed" }, { status: 400 });
    }

    // Validate file size (10MB max - Vercel has limits on body size)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json({ success: false, error: "File size must be less than 10MB" }, { status: 400 });
    }

    const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    const key = `newsletters/${Date.now()}-${safeName}`;

    const blob = await put(key, file, {
      access: "public",
      contentType: "application/pdf",
      addRandomSuffix: false,
    });

    console.log("Upload successful:", blob.url);

    // Return in the format the frontend expects
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

