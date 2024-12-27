import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export const colors = {
  primary: "#3366FF",
  secondary: "#EBF2FF",
  gray: "#E5E7EB",
  darkGray: "#111827",
  green: "#D1FAE5",
  yellow: "#FEF3C7",
  lightBlue: "#EBF2FF",
  text: {
    primary: "#111827",
    secondary: "#6B7280",
  }
}

export function formatLargeNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

