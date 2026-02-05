'use client'

import React, { createContext, useContext, ReactNode } from 'react'

interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

interface UiContextType {
  toasts: Toast[]
  addToast: (message: string, type: Toast['type'], duration?: number) => void
  removeToast: (id: string) => void
  openModal: (name: string) => void
  closeModal: (name: string) => void
  isModalOpen: (name: string) => boolean
}

const UiContext = createContext<UiContextType | undefined>(undefined)

export function UiProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])
  const [openModals, setOpenModals] = React.useState<Set<string>>(new Set())

  const addToast = React.useCallback((message: string, type: Toast['type'], duration = 3000) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts(prev => [...prev, { id, message, type, duration }])
    
    if (duration) {
      setTimeout(() => removeToast(id), duration)
    }
  }, [])

  const removeToast = React.useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  const openModal = React.useCallback((name: string) => {
    setOpenModals(prev => new Set([...prev, name]))
  }, [])

  const closeModal = React.useCallback((name: string) => {
    setOpenModals(prev => {
      const next = new Set(prev)
      next.delete(name)
      return next
    })
  }, [])

  const isModalOpen = React.useCallback((name: string) => {
    return openModals.has(name)
  }, [openModals])

  return (
    <UiContext.Provider value={{ toasts, addToast, removeToast, openModal, closeModal, isModalOpen }}>
      {children}
    </UiContext.Provider>
  )
}

export function useUiContext() {
  const context = useContext(UiContext)
  if (!context) {
    throw new Error('useUiContext must be used within UiProvider')
  }
  return context
}
