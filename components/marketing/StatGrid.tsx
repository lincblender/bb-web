interface StatItem {
  value: string;
  label: string;
  detail?: string;
}

interface StatGridProps {
  title?: string;
  intro?: string;
  items: readonly StatItem[];
}

export function StatGrid({ title, intro, items }: StatGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {title ? <h2 className="bb-page-title">{title}</h2> : null}
      {intro ? <p className="mt-4 max-w-3xl bb-text-muted">{intro}</p> : null}
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={`${item.value}-${item.label}`}
            className="rounded-2xl border border-gray-700/50 bg-bb-dark-elevated p-6 shadow-card"
          >
            <p className="text-3xl font-bold tracking-tight text-bb-powder-blue">{item.value}</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-gray-500">
              {item.label}
            </p>
            {item.detail ? <p className="mt-3 text-sm text-gray-400">{item.detail}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
