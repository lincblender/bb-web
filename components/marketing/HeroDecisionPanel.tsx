"use client";

import { heroDecisionMetrics } from "@/lib/marketing/content/home";

export function HeroDecisionPanel() {
  return (
    <div
      className="w-full max-w-sm shrink-0 rounded-2xl border border-gray-700/70 bg-bb-dark-elevated/80 p-5 shadow-2xl lg:max-w-[320px]"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500">
            Decision Engine Preview
          </p>
          <h2 className="mt-1.5 text-lg font-semibold text-gray-100">
            Bid / Research / No Bid
          </h2>
        </div>
        <span className="shrink-0 rounded-full border border-bb-orange/40 bg-bb-orange/10 px-2.5 py-0.5 text-[10px] text-bb-orange">
          Preview
        </span>
      </div>

      <div className="mt-5 space-y-2">
        {heroDecisionMetrics.map(([label, value, status, bar]) => (
          <div
            key={label}
            className="rounded-xl border border-gray-700/60 bg-bb-dark/80 px-3 py-2.5"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-medium text-gray-100">{label}</p>
              <span className="text-[10px] uppercase tracking-wider text-gray-500">
                {status}
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-800">
              <div className={bar} style={{ width: `${value}%`, height: "100%" }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-bb-orange/30 bg-bb-orange/10 p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bb-orange">
            Amber
          </p>
          <span className="rounded-full border border-gray-600 px-2.5 py-0.5 text-[10px] text-gray-300">
            Confidence 58%
          </span>
        </div>
        <p className="mt-2 text-sm font-medium text-gray-100">
          Research before committing bid effort
        </p>
        <p className="mt-1.5 line-clamp-2 text-xs text-gray-300">
            Buyer access is not yet strong enough to call this a clean bid. Confirm incumbent
          position, attend the release, and test stakeholder access before escalating.
        </p>
      </div>
    </div>
  );
}
