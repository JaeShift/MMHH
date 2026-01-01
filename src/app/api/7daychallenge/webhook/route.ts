import type { NextRequest } from "next/server";

// This endpoint can be used by Zapier to fetch recent signups
// You'll need to implement a database or storage solution to track signups
// For now, this is a placeholder that returns the structure Zapier expects

export async function GET(req: NextRequest) {
  // Add authentication/API key check here for security
  const apiKey = req.headers.get("x-api-key");
  const expectedKey = process.env.ZAPIER_API_KEY;

  if (expectedKey && apiKey !== expectedKey) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { 
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // TODO: Replace this with actual database query
  // For now, return empty array - you'll need to store signups in a database
  // and query them here
  const signups: Array<{
    email: string;
    name: string;
    signupDate: string;
  }> = [];

  return new Response(JSON.stringify({ signups }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}



