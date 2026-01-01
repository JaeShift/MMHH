import type { NextRequest } from "next/server";
import { readFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  try {
    // Path to the PDF file
    const pdfPath = process.env.CHALLENGE_PDF_PATH 
      ? process.env.CHALLENGE_PDF_PATH 
      : path.join(process.cwd(), 'public', '7-Day-Challenge-Workbook.pdf');

    console.log('Attempting to read PDF from:', pdfPath);
    console.log('Current working directory:', process.cwd());
    console.log('PDF exists:', existsSync(pdfPath));

    // Check if file exists
    if (!existsSync(pdfPath)) {
      console.error('PDF file not found at:', pdfPath);
      return new Response(
        JSON.stringify({ error: 'PDF not found', path: pdfPath }), 
        { 
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Read the PDF file
    const pdfBuffer = await readFile(pdfPath);
    console.log('PDF read successfully, size:', pdfBuffer.length);

    // Return the PDF with proper headers
    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="7-Day-Challenge-Workbook.pdf"',
        'Content-Length': pdfBuffer.length.toString(),
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: 'Failed to serve PDF', details: errorMessage }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}



