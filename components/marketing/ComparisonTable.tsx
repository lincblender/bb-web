interface ComparisonColumn {
  title: string;
  description: string;
}

interface ComparisonRow {
  label: string;
  values: readonly string[];
}

interface ComparisonTableProps {
  title: string;
  intro?: string;
  columns: readonly ComparisonColumn[];
  rows: readonly ComparisonRow[];
}

export function ComparisonTable({
  title,
  intro,
  columns,
  rows,
}: ComparisonTableProps) {
  const gridTemplateColumns = `minmax(220px,1.1fr) repeat(${columns.length}, minmax(0,1fr))`;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <h2 className="bb-page-title">{title}</h2>
        {intro ? <p className="mt-4 bb-text-muted">{intro}</p> : null}
      </div>
      <div className="mt-10 overflow-hidden rounded-3xl border border-gray-700/50 bg-bb-dark-elevated shadow-card">
        <div className="grid border-b border-gray-700/50" style={{ gridTemplateColumns }}>
          <div className="p-6" />
          {columns.map((column) => (
            <div key={column.title} className="border-l border-gray-700/50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-200">
                {column.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">{column.description}</p>
            </div>
          ))}
        </div>
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid border-b border-gray-700/50 last:border-b-0"
            style={{ gridTemplateColumns }}
          >
            <div className="p-6 text-sm font-medium text-gray-100">{row.label}</div>
            {row.values.map((value, index) => (
              <div key={`${row.label}-${index}`} className="border-l border-gray-700/50 p-6 text-sm text-gray-400">
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
