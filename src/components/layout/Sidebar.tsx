'use client'

import React from 'react'

interface SidebarProps {
  activeRoute?: string
}

export default function Sidebar({ activeRoute = 'dashboard' }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'wallets', label: 'Wallets', icon: '💼' },
    { id: 'affiliate', label: 'Affiliate program', icon: '🔗' },
  ]

  const investmentItems = [
    { id: 'staking', label: 'Staking', icon: '📈' },
    { id: 'trading', label: 'Trading', icon: '💹' },
    { id: 'rwa', label: 'Real World Assets', icon: '🏠' },
    { id: 'investments', label: 'Investments', icon: '💎' },
  ]

  const insightItems = [
    { id: 'market-insights', label: 'Market Insights', icon: '🔍' },
  ]

  const helpItems = [
    { id: 'knowledge', label: 'Knowledge base', icon: '📚' },
    { id: 'support', label: 'Support', icon: '🆘' },
  ]

  return (
    <aside className="w-48 bg-gradient-to-b from-purple-900/40 to-purple-950/60 backdrop-blur-sm border-r border-purple-700/20 p-6 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-accent">⬡</h1>
        <p className="text-xs text-gray-400 mt-1">CAPITAL SWISS</p>
      </div>

      {/* Main Menu */}
      <div className="mb-8">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">MAIN MENU</p>
        <nav className="space-y-2">
          {menuItems.map(item => (
            <a
              key={item.id}
              href={`/${item.id}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                activeRoute === item.id
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'text-gray-300 hover:bg-purple-700/20'
              }`}
            >
              <span>{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Investment */}
      <div className="mb-8">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">INVESTMENT</p>
        <nav className="space-y-2">
          {investmentItems.map(item => (
            <a
              key={item.id}
              href={`/${item.id}`}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:bg-purple-700/20 transition-colors text-sm"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Insights */}
      <div className="mb-8">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">INSIGHTS</p>
        <nav className="space-y-2">
          {insightItems.map(item => (
            <a
              key={item.id}
              href={`/${item.id}`}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:bg-purple-700/20 transition-colors text-sm"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Help Center */}
      <div className="mb-auto">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">HELP CENTER</p>
        <nav className="space-y-2">
          {helpItems.map(item => (
            <a
              key={item.id}
              href={`/${item.id}`}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:bg-purple-700/20 transition-colors text-sm"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-2 mt-auto pt-6 border-t border-purple-700/20">
        <button className="flex-1 px-3 py-2 rounded-lg border border-purple-700/50 text-gray-300 text-sm hover:bg-purple-700/20 transition-colors">
          Admin
        </button>
        <button className="flex-1 px-3 py-2 rounded-lg bg-blue-500/80 text-white text-sm font-medium hover:bg-blue-600 transition-colors">
          Client
        </button>
      </div>
    </aside>
  )
}
