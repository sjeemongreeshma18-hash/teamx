import Link from "next/link";

export default function HomePage() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand/20">
      <h1 className="text-2xl font-semibold text-ink">Choose your role</h1>
      <p className="mt-3 text-ink-muted">
        Placeholder for the login screen. The working role picker still lives in
        frontend/index.html.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link
          href="/passenger"
          className="rounded-xl bg-surface px-5 py-6 font-semibold text-brand ring-1 ring-brand/20 hover:bg-surface-tint"
        >
          Passenger
        </Link>
        <Link
          href="/conductor"
          className="rounded-xl bg-surface px-5 py-6 font-semibold text-brand ring-1 ring-brand/20 hover:bg-surface-tint"
        >
          Conductor
        </Link>
      </div>
      <p className="mt-6 text-sm font-medium text-brand">
        Coming from the vanilla demo in frontend/. This route is a Phase 3
        placeholder.
      </p>
    </section>
  );
}
