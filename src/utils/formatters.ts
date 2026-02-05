// Currency Formatting
export function formatCurrency(value: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value)
}

// Number Formatting
export function formatNumber(value: number, decimals = 2): string {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

// Percentage Formatting
export function formatPercentage(value: number, decimals = 2): string {
  return `${value >= 0 ? '+' : ''}${formatNumber(value, decimals)}%`
}

// Date Formatting
export function formatDate(date: string | Date, format = 'short'): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('en-US', {
    year: '2-digit',
    month: format === 'short' ? '2-digit' : 'long',
    day: '2-digit',
  }).format(d)
}

// Address Truncation
export function truncateAddress(address: string, chars = 6): string {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`
}

// Hash Truncation
export function truncateHash(hash: string, chars = 8): string {
  return `${hash.slice(0, chars)}...${hash.slice(-chars)}`
}
