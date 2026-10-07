import { Hanken_Grotesk, PT_Serif } from "next/font/google";

// PT Serif is the client's brand typeface (it is in their brand kit); it carries
// the display and editorial voice. Hanken Grotesk is a quiet, precise sans for UI
// and body text. Both are self-hosted by next/font at build time (no runtime
// request to Google).
export const serif = PT_Serif({
  subsets: ["latin"],
  // Regular + italic only: every serif heading is weight 400, which saves two font files
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontVariables = `${serif.variable} ${sans.variable}`;
