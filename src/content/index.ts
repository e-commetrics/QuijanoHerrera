import { es, type Dict } from "./es";
import { en } from "./en";
import type { Locale } from "@/lib/site";

const dictionaries: Record<Locale, Dict> = { es, en };

export const getDict = (locale: Locale): Dict => dictionaries[locale];
export type { Dict };
