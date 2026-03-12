"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { BbLogo } from "@/components/ui/BbLogo";
import { HeaderNavMenu } from "@/components/marketing/HeaderNavMenu";
import { APP_SIGNUP_URL } from "@/lib/marketing/config";
import { headerNavGroups, headerNavLinks } from "@/lib/marketing/navigation";

export function Header() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenGroup(null);
        setMobileOpen(false);
        setMobileOpenGroup(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
        setMobileOpenGroup(null);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function closeAllMenus() {
    setOpenGroup(null);
    setMobileOpen(false);
    setMobileOpenGroup(null);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800/80 bg-bb-dark-elevated/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3" onClick={closeAllMenus}>
            <BbLogo size={36} />
            <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-gray-200 md:inline">
              BidBlender
            </span>
          </Link>

          <div className="flex items-center gap-3 md:hidden">
            <Button href={APP_SIGNUP_URL} variant="primary" className="px-5 py-2.5 text-sm">
              Sign up
            </Button>
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-700/70 bg-bb-dark/70 text-gray-100 transition hover:border-gray-600 hover:bg-bb-dark-elevated"
              onClick={() => {
                setMobileOpen((current) => !current);
                setMobileOpenGroup(null);
                setOpenGroup(null);
              }}
            >
              {mobileOpen ? (
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
                  <path d="M5 5 15 15M15 5 5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
                  <path d="M3.5 5.5h13M3.5 10h13M3.5 14.5h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>

          <nav ref={navRef} className="hidden flex-wrap items-center gap-x-5 gap-y-2 md:flex">
            {headerNavGroups.map((group) => (
              <HeaderNavMenu
                key={group.label}
                group={group}
                isOpen={openGroup === group.label}
                onToggle={() => setOpenGroup((current) => (current === group.label ? null : group.label))}
                onNavigate={closeAllMenus}
              />
            ))}
            {headerNavLinks.map((link) => (
              <Link key={link.href} href={link.href} className="bb-nav-link" onClick={closeAllMenus}>
                {link.label}
              </Link>
            ))}
            <Button href={APP_SIGNUP_URL} variant="primary">
              Sign up
            </Button>
          </nav>
        </div>

        {mobileOpen ? (
          <nav
            ref={navRef}
            className="mt-4 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-3xl border border-gray-700/80 bg-bb-dark-elevated/95 p-4 shadow-2xl md:hidden"
          >
            <div className="space-y-3">
              {headerNavGroups.map((group) => {
                const isGroupOpen = mobileOpenGroup === group.label;

                return (
                  <div key={group.label} className="rounded-2xl border border-gray-800/80 bg-bb-dark/60">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-4 text-left"
                      aria-expanded={isGroupOpen}
                      onClick={() => setMobileOpenGroup((current) => (current === group.label ? null : group.label))}
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                        {group.label}
                      </span>
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className={`h-4 w-4 text-gray-400 transition-transform ${isGroupOpen ? "rotate-180" : ""}`}
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
                    {isGroupOpen ? (
                      <div className="space-y-2 px-3 pb-3">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeAllMenus}
                            className="block rounded-2xl border border-transparent px-3 py-3 transition hover:border-gray-700 hover:bg-bb-dark-elevated"
                          >
                            <p className="text-sm font-medium text-gray-100">{item.label}</p>
                            {item.description ? (
                              <p className="mt-1 text-xs leading-5 text-gray-400">{item.description}</p>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}

              <div className="rounded-2xl border border-gray-800/80 bg-bb-dark/60">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-4 text-left"
                  aria-expanded={mobileOpenGroup === "More"}
                  onClick={() => setMobileOpenGroup((current) => (current === "More" ? null : "More"))}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">More</span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className={`h-4 w-4 text-gray-400 transition-transform ${mobileOpenGroup === "More" ? "rotate-180" : ""}`}
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
                {mobileOpenGroup === "More" ? (
                  <div className="space-y-2 px-3 pb-3">
                    {headerNavLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeAllMenus}
                        className="block rounded-2xl border border-transparent px-3 py-3 text-sm font-medium text-gray-100 transition hover:border-gray-700 hover:bg-bb-dark-elevated"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
