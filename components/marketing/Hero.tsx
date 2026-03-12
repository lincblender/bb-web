"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { HeroDecisionPanel } from "@/components/marketing/HeroDecisionPanel";
import { heroParadigms } from "@/lib/marketing/content/home";
import { APP_SIGNUP_URL } from "@/lib/marketing/config";
import { PARADIGM_TONES } from "@/lib/marketing/paradigm-tones";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    if (!section || !panel) return;

    gsap.set(panel, { opacity: 0, x: 60 });

    // On load: ease in from the side
    gsap.to(panel, { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" });

    // Scroll: panel fades out at end of hero
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });
    scrollTl.to(panel, { opacity: 0, x: -24, duration: 0.18, ease: "power2.in" }, 0.82);

    // Parallax: panel scrolls away at 2x when scrolling down the page, returns at 1x when scrolling back up
    let lastScrollY = window.scrollY;
    let panelOffset = 0;
    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (scrollY <= 0) {
          panelOffset = 0;
        } else {
          const delta = scrollY - lastScrollY;
          if (delta > 0) {
            panelOffset += delta * 2;
          } else {
            panelOffset = Math.max(0, panelOffset + delta);
          }
        }
        lastScrollY = scrollY;
        gsap.set(panel, { y: -panelOffset });
        rafId = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(134,179,213,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(253,116,123,0.14),_transparent_30%),linear-gradient(180deg,_#0f1419,_#111820)] py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <Image
                src="/wordmark.png"
                alt="BidBlender"
                width={240}
                height={48}
                className="h-[fit-content] w-auto shrink-0"
                priority
              />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bb-powder-blue">
                  Opportunity Intelligence For Bid Teams
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight bb-text-primary sm:text-4xl md:text-5xl">
                  Decide where you can win before you commit bid effort.
                </h1>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
              BidBlender blends CRM history, capability evidence, relationship reach,
              and tender opportunity data into one decision system. Use it to
              qualify opportunities, resolve amber bids, and direct effort where
              winnability is real rather than assumed.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={APP_SIGNUP_URL} variant="primary" className="px-6 py-2.5 text-sm">
                Start free
              </Button>
              <Button href="/platform" variant="secondary" className="px-6 py-2.5 text-sm">
                Explore the platform
              </Button>
            </div>

            <div className="mt-8">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                Four evidence pillars
              </h2>
              <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
                {heroParadigms.map(({ title, detail, href }, index) => {
                  const tone = PARADIGM_TONES[index % PARADIGM_TONES.length];
                  return (
                    <Link
                      key={title}
                      href={href}
                      className={`group overflow-hidden rounded-xl border bg-bb-dark-elevated/70 p-3.5 transition-colors hover:bg-bb-dark-elevated/90 ${tone.ring}`}
                    >
                      <div className={`-mx-3.5 -mt-3.5 h-0.5 bg-gradient-to-r ${tone.accent}`} />
                      <p className={`mt-3 text-xs font-semibold uppercase tracking-[0.2em] ${tone.eyebrow}`}>
                        {title}
                      </p>
                      <p className="mt-1.5 text-sm text-gray-400">{detail}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div ref={panelRef} className="hidden lg:block lg:sticky lg:top-24">
            <HeroDecisionPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
