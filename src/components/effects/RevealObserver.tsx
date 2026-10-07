"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const EASE_OUT_EXPO = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * One tiny observer for the whole site (no animation library):
 *  - [data-reveal]   gets `.is-in` when it scrolls into view
 *  - [data-count=N]  counts up from 0 to N the first time it is visible
 * Runs again after every client-side navigation. Does nothing but show the
 * final state when the visitor prefers reduced motion.
 */
export function RevealObserver() {
  const pathname = usePathname();

  // content-visibility strategy (see base.css): the first paint skips off-screen sections;
  // right after it we render them one by one in idle time so their real heights replace the
  // estimates before the visitor scrolls. An in-page link renders everything immediately.
  useEffect(() => {
    const root = document.documentElement;
    const renderAll = () => root.classList.add("cv-off");

    let stopped = false;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="#"]');
      if (!link) return;
      // Stop the idle renderer and render every section now, so nothing changes size
      // while the page scrolls to the target.
      stopped = true;
      window.clearTimeout(timer);
      renderAll();

      // Same-page anchors: run the jump ourselves, after the layout has settled. A native
      // smooth scroll started in the same frame as the re-layout can be cancelled by it.
      const modified = e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
      if (modified || e.defaultPrevented || link.target === "_blank") return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;
      e.preventDefault();
      void root.offsetHeight; // force layout now
      window.history.pushState(null, "", url.hash);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    };
    document.addEventListener("click", onClick, true);

    // Landing with a #hash (e.g. from another page): render everything, then jump to it.
    let frame = 0;
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) {
      renderAll();
      frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    }

    const pending = Array.from(document.querySelectorAll<HTMLElement>(".section, .trust, .footer")).filter(
      (el) => !el.classList.contains("cv-ready"),
    );
    let timer = 0;
    const next = () => {
      if (stopped) return;
      const el = pending.shift();
      if (!el) return;
      el.classList.add("cv-ready");
      timer = window.setTimeout(schedule, 120);
    };
    const schedule = () => {
      if ("requestIdleCallback" in window) window.requestIdleCallback(next, { timeout: 800 });
      else next();
    };
    // Start after the first paint and the initial hydration work have settled
    timer = window.setTimeout(schedule, 2000);

    return () => {
      document.removeEventListener("click", onClick, true);
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [pathname]);

  // Everything above (header, dock, this component) has attached its listeners once this
  // runs: expose that, so automated tests can wait for interactivity instead of guessing.
  useEffect(() => {
    document.documentElement.dataset.hydrated = "true";
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));

    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const animateCount = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target)) return;
      const duration = 1600;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        el.textContent = String(Math.round(EASE_OUT_EXPO(t) * target));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const revealIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          revealIO.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    reveals.forEach((el) => revealIO.observe(el));

    const countIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          animateCount(entry.target as HTMLElement);
          countIO.unobserve(entry.target);
        }
      },
      { threshold: 0.6 },
    );
    // Only counters that start below the fold are animated. One that is already
    // visible keeps its final value, so it never flashes back to 0.
    counters.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const onScreen = rect.top < window.innerHeight && rect.bottom > 0;
      if (onScreen) return;
      el.textContent = "0";
      countIO.observe(el);
    });

    return () => {
      revealIO.disconnect();
      countIO.disconnect();
    };
  }, [pathname]);

  return null;
}
