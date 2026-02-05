// Crypto & Wallet Types
export interface Wallet {
  id: string
  address: string
  type: 'hot' | 'cold' | 'funding'
  blockchain: string
  balance: number
  currency: string
  assets: Asset[]
}

export interface Asset {
  id: string
  symbol: string
  name: string
  logo: string
  balance: number
  price: number
  change24h: number
  value: number
}

export interface Transaction {
  id: string
  date: string
  type: 'deposit' | 'withdraw' | 'transfer'
  from: string
  to: string
  amount: number
  asset: string
  fee: number
  status: 'completed' | 'pending' | 'failed'
  hash?: string
}

// Affiliate Types
export interface AffiliateUser {
  id: string
  username: string
  avatar: string
  level: number
  referrals: number
  earned: number
  bv: number
}

export interface Commission {
  id: string
  date: string
  user: AffiliateUser
  type: string
  amount: number
  percentage: number
  commission: number
}

export interface ReferralRank {
  level: number
  minReferrals: number
  minDeposit: number
  minBV: number
  commissions: {
    refereeDeposit: number
    withdrawMargin: number
    staking: number
    trade: number
    rwaDeposit: number
    rwaInvestment: number
  }
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// User Types
export interface User {
  id: string
  email: string
  username: string
  avatar: string
  kycStatus: 'pending' | 'verified' | 'rejected'
  createdAt: string
  updatedAt: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}
