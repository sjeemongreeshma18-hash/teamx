type PlaceholderScreenProps = {
  title: string;
  description: string;
};

export function PlaceholderScreen({ title, description }: PlaceholderScreenProps) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand/20">
      <h1 className="text-2xl font-semibold text-ink">{title}</h1>
      <p className="mt-3 text-ink-muted">{description}</p>
      <p className="mt-6 text-sm font-medium text-brand">
        Coming from the vanilla demo in frontend/. This route is a Phase 3
        placeholder.
      </p>
    </section>
  );
}
