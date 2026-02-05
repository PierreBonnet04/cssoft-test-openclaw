import { apiClient } from './client'
import { Wallet, Transaction, Commission, PaginatedResponse } from '@/types'

// Wallet Services
export const walletService = {
  getWallets: () => apiClient.get<Wallet[]>('/wallets'),
  getWallet: (id: string) => apiClient.get<Wallet>(`/wallets/${id}`),
  createWallet: (data: Partial<Wallet>) => apiClient.post('/wallets', data),
  updateWallet: (id: string, data: Partial<Wallet>) =>
    apiClient.put(`/wallets/${id}`, data),
  deleteWallet: (id: string) => apiClient.delete(`/wallets/${id}`),
}

// Transaction Services
export const transactionService = {
  getTransactions: (walletId: string) =>
    apiClient.get<PaginatedResponse<Transaction>>(`/transactions?walletId=${walletId}`),
  getTransaction: (id: string) => apiClient.get<Transaction>(`/transactions/${id}`),
  createTransaction: (data: Partial<Transaction>) =>
    apiClient.post('/transactions', data),
}

// Affiliate Services
export const affiliateService = {
  getProfile: () => apiClient.get('/affiliate/profile'),
  getCommissions: () =>
    apiClient.get<PaginatedResponse<Commission>>('/affiliate/commissions'),
  getReferralTree: () => apiClient.get('/affiliate/tree'),
  getRevenue: () => apiClient.get('/affiliate/revenue'),
}

// Auth Services
export const authService = {
  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),
  register: (email: string, password: string, username: string) =>
    apiClient.post('/auth/register', { email, password, username }),
  logout: () => {
    apiClient.clearToken()
    return Promise.resolve()
  },
  refreshToken: () => apiClient.post('/auth/refresh', {}),
}
