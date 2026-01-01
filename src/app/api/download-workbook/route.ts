import type { NextRequest } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET(req: NextRequest) {
  try {
    // Path to the PDF file
    const pdfPath = process.env.CHALLENGE_PDF_PATH 
      ? process.env.CHALLENGE_PDF_PATH 
      : path.join(process.cwd(), 'public', '7-Day-Challenge-Workbook.pdf');

    // Read the PDF file
    const pdfBuffer = await readFile(pdfPath);

    // Return the PDF with proper headers
    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="7-Day-Challenge-Workbook.pdf"',
        'Content-Length': pdfBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new Response('PDF not found', { status: 404 });
  }
}


