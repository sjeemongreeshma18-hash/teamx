import type { Metadata } from "next";
import { getAppOrigin } from "@/lib/app-origin";

export const metadata: Metadata = {
  title: "Health",
};

export const dynamic = "force-dynamic";

type CheckResult = {
  label: string;
  url: string;
  ok: boolean;
  status: number;
  latencyMs: number;
  body?: unknown;
  error?: string;
};

async function runCheck(label: string, url: string): Promise<CheckResult> {
  const started = Date.now();

  try {
    const response = await fetch(url, { cache: "no-store" });
    const latencyMs = Date.now() - started;
    const text = await response.text();
    let body: unknown = text;

    try {
      body = JSON.parse(text) as unknown;
    } catch {
      body = text;
    }

    return {
      label,
      url,
      ok: response.ok,
      status: response.status,
      latencyMs,
      body,
    };
  } catch (error) {
    return {
      label,
      url,
      ok: false,
      status: 0,
      latencyMs: Date.now() - started,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

function StatusBadge({ ok }: { ok: boolean }) {
  return (
    <span
      className={
        ok
          ? "rounded-full bg-success/15 px-3 py-1 text-sm font-semibold text-success"
          : "rounded-full bg-danger/15 px-3 py-1 text-sm font-semibold text-danger"
      }
    >
      {ok ? "Healthy" : "Unreachable"}
    </span>
  );
}

export default async function HealthPage() {
  const origin = getAppOrigin();
  const localUrl = `${origin}/api/health`;
  const upstreamUrl = process.env.HEALTHCHECK_URL?.trim();

  const checks: CheckResult[] = [
    await runCheck("RideSync /api/health", localUrl),
  ];

  if (upstreamUrl) {
    checks.push(await runCheck("Optional HEALTHCHECK_URL", upstreamUrl));
  }

  return (
    <section className="space-y-6">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand/20">
        <h1 className="text-2xl font-semibold text-ink">Health check</h1>
        <p className="mt-3 text-ink-muted">
          Fetches the local health API. If HEALTHCHECK_URL is set, that upstream
          is checked as well. Missing optional env vars do not fail this page.
        </p>
      </div>

      {checks.map((check) => (
        <article
          key={`${check.label}-${check.url}`}
          className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand/20"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-ink">{check.label}</h2>
            <StatusBadge ok={check.ok} />
          </div>
          <p className="mt-2 break-all text-sm text-ink-muted">{check.url}</p>
          <dl className="mt-4 grid gap-2 text-sm text-ink">
            <div>
              <dt className="inline font-medium">HTTP status: </dt>
              <dd className="inline">{check.status || "n/a"}</dd>
            </div>
            <div>
              <dt className="inline font-medium">Latency: </dt>
              <dd className="inline">{check.latencyMs} ms</dd>
            </div>
          </dl>
          {check.error ? (
            <p className="mt-4 rounded-lg bg-danger/10 p-3 text-sm text-danger">
              {check.error}
            </p>
          ) : (
            <pre className="mt-4 overflow-x-auto rounded-lg bg-surface p-4 text-sm text-ink">
              {JSON.stringify(check.body, null, 2)}
            </pre>
          )}
        </article>
      ))}
    </section>
  );
}
