"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { PARADIGM_TONES } from "@/lib/marketing/paradigm-tones";
import type { MarketingCardItem } from "@/components/marketing/MarketingCardSection";

interface ParadigmSynergySectionProps {
  title: string;
  intro: string;
  items: readonly MarketingCardItem[];
}

/** Full-width/height circuit: History → Capability → Opportunity → Reach → History */
const SYMBIOSIS_PATH = "M 0 0 L 100 0 L 100 100 L 0 100 Z";

export function ParadigmSynergySection({
  title,
  intro,
  items,
}: ParadigmSynergySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const pathStrokeRef = useRef<SVGPathElement>(null);
  const dot1Ref = useRef<HTMLDivElement>(null);
  const dot2Ref = useRef<HTMLDivElement>(null);
  const dot3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const pathStroke = pathStrokeRef.current;
    const container = containerRef.current;
    const dot1 = dot1Ref.current;
    const dot2 = dot2Ref.current;
    const dot3 = dot3Ref.current;
    if (!path || !dot1 || !dot2 || !dot3 || !container) return;

    const length = path.getTotalLength();
    if (pathStroke) {
      gsap.set(pathStroke, { strokeDashoffset: 0 });
      gsap.to(pathStroke, {
        strokeDashoffset: -6,
        duration: 3.6,
        repeat: -1,
        ease: "none",
      });
    }

    const updateDotPosition = (dot: HTMLDivElement, progress: number) => {
      const p = path.getPointAtLength((progress % 1) * length);
      const rect = container.getBoundingClientRect();
      const x = (p.x / 100) * rect.width - 8;
      const y = (p.y / 100) * rect.height - 8;
      gsap.set(dot, { x, y });
    };

    const obj = { t: 0 };
    const tick = () => {
      updateDotPosition(dot1, obj.t);
      updateDotPosition(dot2, (obj.t + 0.33) % 1);
      updateDotPosition(dot3, (obj.t + 0.66) % 1);
    };
    tick();
    gsap.to(obj, {
      t: 1,
      duration: 9.6,
      repeat: -1,
      ease: "none",
      onUpdate: tick,
    });
  }, []);

  return (
    <MarketingSection>
      <MarketingPageHeader as="h2" title={title} intro={intro} />
      <div
        ref={containerRef}
        className="relative mt-12 grid gap-6 md:grid-cols-2"
      >
        {items.map((item, index) => {
          const tone = PARADIGM_TONES[index % PARADIGM_TONES.length];
          return (
            <div
              key={item.title}
              className={`relative overflow-hidden rounded-xl border bg-bb-dark-elevated/80 p-6 ${tone.ring}`}
            >
              <div
                className={`-mx-6 -mt-6 h-1 bg-gradient-to-r ${tone.accent}`}
              />
              <h3 className={`mt-5 text-lg font-semibold tracking-tight ${tone.eyebrow}`}>
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300">{item.body}</p>
            </div>
          );
        })}

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient
              id="symbiosis-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--bb-powder-blue)" stopOpacity="0.25" />
              <stop offset="50%" stopColor="var(--bb-coral)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--bb-powder-blue)" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <path
            ref={pathRef}
            d={SYMBIOSIS_PATH}
            fill="none"
            stroke="none"
          />
          <path
            ref={pathStrokeRef}
            d={SYMBIOSIS_PATH}
            fill="none"
            stroke="url(#symbiosis-gradient)"
            strokeWidth="0.15"
            strokeDasharray="1.5 2.5"
            strokeLinecap="butt"
            strokeDashoffset="0"
            opacity="0.4"
          />
        </svg>
        <div
          ref={dot1Ref}
          className="pointer-events-none absolute left-0 top-0 h-4 w-4 rounded-[3px] bg-[var(--bb-powder-blue)] opacity-70"
          aria-hidden
        />
        <div
          ref={dot2Ref}
          className="pointer-events-none absolute left-0 top-0 h-4 w-4 rounded-[3px] bg-[var(--bb-coral)] opacity-70"
          aria-hidden
        />
        <div
          ref={dot3Ref}
          className="pointer-events-none absolute left-0 top-0 h-4 w-4 rounded-[3px] bg-[var(--bb-orange)] opacity-70"
          aria-hidden
        />
      </div>
    </MarketingSection>
  );
}
