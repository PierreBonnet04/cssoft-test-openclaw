'use client'

import React from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import WalletSelector from '@/components/ui/WalletSelector'

export default function Wallets() {
  return (
    <div className="flex h-screen bg-dark">
      <Sidebar activeRoute="wallets" />
      <div className="flex-1 overflow-auto">
        <Header title="Wallets" subtitle="Manage all your wallets and transactions." />
        
        <main className="p-6">
          <WalletSelector />
        </main>
      </div>
    </div>
  )
}
