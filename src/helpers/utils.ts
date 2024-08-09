import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to combine multiple CSS classes into a single string.
 * Uses clsx and twMerge under the hood.
 *
 * @param {...ClassValue[]} inputs - CSS classes to combine.
 * @return {string} - Combined CSS classes.
 */
export const cn = (...inputs: ClassValue[]) => {
  // Combine CSS classes into a single string using clsx and twMerge.
  return twMerge(clsx(inputs))
}

/**
 * Symbol for the stock to fetch data for.
 * @type {string}
 */
export const stockSymbol = 'TSCO.LON';
