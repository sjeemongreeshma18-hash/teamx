export function GET() {
  return Response.json({
    ok: true,
    service: process.env.NEXT_PUBLIC_APP_NAME ?? "RideSync",
    env: process.env.NEXT_PUBLIC_APP_ENV ?? "development",
    timestamp: new Date().toISOString(),
  });
}
