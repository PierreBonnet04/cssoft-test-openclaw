'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { AuthState, User } from '@/types'

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = React.useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  })

  const login = React.useCallback(async (email: string, password: string) => {
    // Mock implementation - replace with actual API call
    setState(prev => ({ ...prev, isLoading: true }))
    setTimeout(() => {
      setState({
        user: { id: '1', email, username: email.split('@')[0], avatar: '', kycStatus: 'pending', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
        isAuthenticated: true,
        isLoading: false,
        error: null,
      })
    }, 500)
  }, [])

  const logout = React.useCallback(async () => {
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    })
  }, [])

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider')
  }
  return context
}
