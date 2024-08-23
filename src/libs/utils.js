import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names with Tailwind CSS and handles conditional class names.
 * @param {...(string | string[] | { [key: string]: boolean })} inputs - Class names or conditionally applied class names.
 * @returns {string} - Merged class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
