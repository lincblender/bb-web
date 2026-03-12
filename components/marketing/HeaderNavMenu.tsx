"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { MarketingNavGroup } from "@/lib/marketing/navigation";

interface HeaderNavMenuProps {
  group: MarketingNavGroup;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}

interface PanelLayout {
  left: number;
  width: number;
  columns: 1 | 2;
}

const VIEWPORT_MARGIN = 16;
const TWO_COLUMN_WIDTH = 512;
const SINGLE_COLUMN_WIDTH = 320;

export function HeaderNavMenu({
  group,
  isOpen,
  onToggle,
  onNavigate,
}: HeaderNavMenuProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [layout, setLayout] = useState<PanelLayout>({
    left: 0,
    width: TWO_COLUMN_WIDTH,
    columns: 2,
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function updateLayout() {
      const wrapper = wrapperRef.current;
      if (!wrapper) {
        return;
      }

      const rect = wrapper.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const maxWidth = Math.max(240, viewportWidth - VIEWPORT_MARGIN * 2);
      const width = Math.min(TWO_COLUMN_WIDTH, maxWidth);
      const columns: 1 | 2 = width < TWO_COLUMN_WIDTH ? 1 : 2;
      const targetWidth = columns === 1 ? Math.min(SINGLE_COLUMN_WIDTH, maxWidth) : width;
      const desiredLeft = rect.left;
      const clampedLeft = Math.min(
        Math.max(VIEWPORT_MARGIN, desiredLeft),
        viewportWidth - targetWidth - VIEWPORT_MARGIN,
      );

      setLayout({
        left: clampedLeft - rect.left,
        width: targetWidth,
        columns,
      });
    }

    updateLayout();
    window.addEventListener("resize", updateLayout);

    const wrapper = wrapperRef.current;
    const navContainer = wrapper?.parentElement;
    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
            updateLayout();
          })
        : null;

    if (resizeObserver && wrapper) {
      resizeObserver.observe(wrapper);
    }

    if (resizeObserver && navContainer) {
      resizeObserver.observe(navContainer);
    }

    return () => {
      window.removeEventListener("resize", updateLayout);
      resizeObserver?.disconnect();
    };
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        className="bb-nav-link flex items-center gap-2"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={onToggle}
      >
        <span>{group.label}</span>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M5 7.5 10 12.5 15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen ? (
        <div
          className="absolute top-full z-50 mt-4 rounded-3xl border border-gray-700/80 bg-bb-dark-elevated/95 p-3 shadow-2xl backdrop-blur"
          style={{ left: `${layout.left}px`, width: `${layout.width}px` }}
        >
          <div className={`grid gap-2 ${layout.columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className="rounded-2xl border border-transparent px-4 py-3 transition hover:border-gray-700 hover:bg-bb-dark/80"
              >
                <p className="text-sm font-medium text-gray-100">{item.label}</p>
                {item.description ? (
                  <p className="mt-1 text-xs leading-5 text-gray-400">{item.description}</p>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
