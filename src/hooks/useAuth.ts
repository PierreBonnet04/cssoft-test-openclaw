'use client'

import { useState, useCallback } from 'react'
import { authService, apiClient } from '@/api'
import { User } from '@/types'

interface UseAuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export function useAuth() {
  const [state, setState] = useState<UseAuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  })

  const login = useCallback(async (email: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }))
    try {
      const response = await authService.login(email, password)
      if (response.success && response.data) {
        const { token, user } = response.data as { token: string; user: User }
        apiClient.setToken(token)
        setState({ user, isAuthenticated: true, isLoading: false, error: null })
      } else {
        setState(prev => ({ ...prev, isLoading: false, error: response.error }))
      }
    } catch (err) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err.message : 'Login failed',
      }))
    }
  }, [])

  const logout = useCallback(async () => {
    await authService.logout()
    setState({ user: null, isAuthenticated: false, isLoading: false, error: null })
  }, [])

  return { ...state, login, logout }
}
