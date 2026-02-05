'use client'

import React from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import HotWalletDetail from '@/components/ui/HotWalletDetail'
import HotWalletAssets from '@/components/ui/HotWalletAssets'
import HotWalletHistory from '@/components/ui/HotWalletHistory'

export default function HotWallet() {
  return (
    <div className="flex h-screen bg-dark">
      <Sidebar activeRoute="wallets" />
      <div className="flex-1 overflow-auto">
        <Header title="Hot wallet - Ethereum" subtitle="Manage all your wallets and transactions." />
        
        <main className="p-6 space-y-6">
          {/* Back Link */}
          <a href="/wallets" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
            ← Go back to wallets
          </a>

          {/* Wallet Detail + Assets */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <HotWalletDetail />
            <HotWalletAssets />
          </div>

          {/* Wallet History */}
          <HotWalletHistory />
        </main>
      </div>
    </div>
  )
}
