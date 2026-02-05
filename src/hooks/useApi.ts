'use client'

import { useState, useEffect } from 'react'

interface UseApiState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export function useApi<T>(
  fetcher: () => Promise<{ success: boolean; data?: T; error?: string }>,
  dependencies: unknown[] = []
) {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    let cancelled = false

    const fetch = async () => {
      try {
        const response = await fetcher()
        if (!cancelled) {
          if (response.success && response.data) {
            setState({ data: response.data, loading: false, error: null })
          } else {
            setState({ data: null, loading: false, error: response.error || 'Unknown error' })
          }
        }
      } catch (err) {
        if (!cancelled) {
          setState({
            data: null,
            loading: false,
            error: err instanceof Error ? err.message : 'Unknown error',
          })
        }
      }
    }

    fetch()

    return () => {
      cancelled = true
    }
  }, dependencies)

  return state
}
