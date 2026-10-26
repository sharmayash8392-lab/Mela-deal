export default {
  async fetch(request) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "https://mela-deal.anshulsukla999.workers.dev",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return Response.json(
        { ok: true, message: "Mela Deals backend ready" },
        { headers: corsHeaders }
      );
    }

    return Response.json(
      { error: "Not found" },
      { status: 404, headers: corsHeaders }
    );
  },
};
