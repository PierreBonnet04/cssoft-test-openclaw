'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import BalanceCard from '@/components/ui/BalanceCard'
import GainsOverviewChart from '@/components/ui/GainsOverviewChart'
import Web3WalletCard from '@/components/ui/Web3WalletCard'
import TrendingCoins from '@/components/ui/TrendingCoins'
import SmartRecommendation from '@/components/ui/SmartRecommendation'
import RecentTransactions from '@/components/ui/RecentTransactions'
import NewsCard from '@/components/ui/NewsCard'
import HotMarket from '@/components/ui/HotMarket'
import KYCBanner from '@/components/ui/KYCBanner'

export default function Dashboard() {
  const [walletBalance] = useState('$120.450,00')
  const [walletAmount] = useState('120.00,340')

  return (
    <div className="flex h-screen bg-dark">
      {/* Sidebar */}
      <Sidebar activeRoute="dashboard" />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <Header title="Dashboard" subtitle="This is your overview dashboard." />

        {/* Content */}
        <main className="p-6 space-y-6">
          {/* KYC Banner */}
          <KYCBanner />

          {/* Balance Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <BalanceCard 
              title="Balance"
              amount={walletAmount}
              subtitle="This is the total amount in all your wallets."
              actions={['Transfer', 'Withdraw', 'Deposit']}
            />
            <GainsOverviewChart />
            <Web3WalletCard />
          </div>

          {/* Trending Section */}
          <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Trending</h2>
              <button className="text-blue-400 hover:text-blue-300 text-sm">Start trading →</button>
            </div>
            <TrendingCoins />
          </div>

          {/* Three Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <SmartRecommendation />
            <RecentTransactions />
            <NewsCard />
          </div>

          {/* Hot Market */}
          <HotMarket />
        </main>
      </div>
    </div>
  )
}
