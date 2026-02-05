// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
}

// Wallet Types
export const WALLET_TYPES = {
  HOT: 'hot',
  COLD: 'cold',
  FUNDING: 'funding',
} as const

// Blockchains
export const BLOCKCHAINS = [
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', icon: '⬡' },
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', icon: '🟠' },
  { id: 'solana', name: 'Solana', symbol: 'SOL', icon: '◎' },
  { id: 'polygon', name: 'Polygon', symbol: 'MATIC', icon: '🟣' },
  { id: 'avalanche', name: 'Avalanche', symbol: 'AVAX', icon: '▲' },
  { id: 'bsc', name: 'BNB Smart Chain', symbol: 'BNB', icon: '🟡' },
  { id: 'tron', name: 'TRON', symbol: 'TRX', icon: '🔴' },
  { id: 'ripple', name: 'Ripple', symbol: 'XRP', icon: '✕' },
  { id: 'celo', name: 'Celo', symbol: 'CELO', icon: '🟢' },
]

// Affiliate Ranks
export const AFFILIATE_RANKS = [
  { level: 1, minReferrals: 4, minDeposit: 1000, minBV: 1000 },
  { level: 2, minReferrals: 4, minDeposit: 1000, minBV: 1000 },
  { level: 3, minReferrals: 4, minDeposit: 1000, minBV: 1000 },
  { level: 4, minReferrals: 4, minDeposit: 1000, minBV: 1000 },
  { level: 5, minReferrals: 4, minDeposit: 1000, minBV: 1000 },
]

// KYC Status
export const KYC_STATUS = {
  PENDING: 'pending',
  VERIFIED: 'verified',
  REJECTED: 'rejected',
} as const

// Transaction Types
export const TRANSACTION_TYPES = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
  TRANSFER: 'transfer',
} as const
