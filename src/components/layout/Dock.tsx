"use client";

import { useEffect, useState } from "react";
import { Phone, WhatsApp } from "@/components/ui/Icons";

interface DockProps {
  whatsappLabel: string;
  callLabel: string;
  whatsappHref: string;
  telHref: string;
}

/**
 * Always-reachable contact actions: a bottom action bar on phones and a single
 * WhatsApp pill on larger screens. Appears after the hero and steps aside while
 * the contact section is on screen (where the same actions are already shown).
 */
export function Dock({ whatsappLabel, callLabel, whatsappHref, telHref }: DockProps) {
  const [pastHero, setPastHero] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  useEffect(() => {
    // Scroll events already arrive at most once per frame; setState bails out when unchanged.
    const onScroll = () => setPastHero(window.scrollY > Math.min(520, window.innerHeight * 0.6));
    window.addEventListener("scroll", onScroll, { passive: true });

    const contact = document.getElementById("contacto");
    const io = contact
      ? new IntersectionObserver(([entry]) => setContactInView(entry.isIntersecting), { threshold: 0.25 })
      : null;
    if (contact && io) io.observe(contact);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const visible = pastHero && !contactInView;

  return (
    <aside className={`dock${visible ? " is-visible" : ""}`} aria-hidden={!visible} inert={!visible}>
      <a href={telHref} className="dock__btn dock__btn--tel">
        <Phone />
        {callLabel}
      </a>
      <a href={whatsappHref} className="dock__btn dock__btn--wa" target="_blank" rel="noopener noreferrer">
        <WhatsApp />
        {whatsappLabel}
      </a>
    </aside>
  );
}
