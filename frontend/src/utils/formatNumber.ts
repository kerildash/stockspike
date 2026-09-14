export interface ICompactNumberOptions {
  prefix?: string;
  suffixSeparator?: string;
  fallback?: string;
  zeroAsMissing?: boolean;
  trimTrailingZeros?: boolean;
}

const scaleUnits = [
  { divisor: 1e12, suffix: 'T' },
  { divisor: 1e9, suffix: 'B' },
  { divisor: 1e6, suffix: 'M' },
  { divisor: 1e3, suffix: 'K' },
];

// Unscaled values below 10 keep an extra decimal so ratios like 0.045 stay readable.
const toDecimals = (value: number, isScaled: boolean) =>
  isScaled || Math.abs(value) >= 10 ? value.toFixed(2) : value.toFixed(3);

export const formatCompactNumber = (
  value: number | string | null | undefined,
  {
    prefix = '',
    suffixSeparator = '',
    fallback = '—',
    zeroAsMissing = false,
    trimTrailingZeros = true,
  }: ICompactNumberOptions = {}
): string => {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    return fallback;
  }

  if (zeroAsMissing && value === 0) {
    return fallback;
  }

  const absolute = Math.abs(value);
  const unit = scaleUnits.find(({ divisor }) => absolute >= divisor);
  const decimals = toDecimals(unit ? value / unit.divisor : value, Boolean(unit));
  const formatted = trimTrailingZeros
    ? Number(decimals).toString()
    : decimals;

  return unit
    ? `${prefix}${formatted}${suffixSeparator}${unit.suffix}`
    : `${prefix}${formatted}`;
};

export const formatCompactCurrency = (
  value: number | null | undefined
): string =>
  formatCompactNumber(value, {
    prefix: '$',
    suffixSeparator: ' ',
    fallback: 'N/A',
    zeroAsMissing: true,
    trimTrailingZeros: false,
  });

export const formatCompactMetric = (
  value: number | null | undefined
): string =>
  formatCompactNumber(value, {
    suffixSeparator: ' ',
    fallback: 'N/A',
    trimTrailingZeros: false,
  });
