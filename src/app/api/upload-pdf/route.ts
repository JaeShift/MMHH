import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    if (file.type !== "application/pdf") {
      return NextResponse.json({ success: false, error: "Only PDF files are allowed" }, { status: 400 });
    }

    // Validate file size (10MB max)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json({ success: false, error: "File size must be less than 10MB" }, { status: 400 });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const fileName = `newsletter-${timestamp}-${sanitizedName}`;

    // Ensure uploads directory exists
    const uploadsDir = path.join(process.cwd(), "public", "uploads", "newsletters");
    await mkdir(uploadsDir, { recursive: true });

    // Save file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(uploadsDir, fileName);
    await writeFile(filePath, buffer);

    // Return public URL
    const publicUrl = `/uploads/newsletters/${fileName}`;

    return NextResponse.json({
      success: true,
      data: {
        url: publicUrl,
        name: file.name,
        size: file.size,
      },
    });
  } catch (error) {
    console.error("PDF upload error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to upload PDF" },
      { status: 500 }
    );
  }
}

