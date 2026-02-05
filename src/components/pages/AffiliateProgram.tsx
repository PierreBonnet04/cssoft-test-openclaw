'use client'

import React from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import AffiliateProfile from '@/components/ui/AffiliateProfile'
import AffiliateHowItWorks from '@/components/ui/AffiliateHowItWorks'
import AffiliateRevenue from '@/components/ui/AffiliateRevenue'
import ReferralTree from '@/components/ui/ReferralTree'
import CommissionsHistory from '@/components/ui/CommissionsHistory'

export default function AffiliateProgram() {
  return (
    <div className="flex h-screen bg-dark">
      <Sidebar activeRoute="affiliate" />
      <div className="flex-1 overflow-auto">
        <Header title="Affiliate program" subtitle="Invite friends and earn money!" />
        
        <main className="p-6 space-y-6">
          {/* Three Column Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AffiliateProfile />
            <AffiliateHowItWorks />
            <AffiliateRevenue />
          </div>

          {/* Referral Tree */}
          <ReferralTree />

          {/* Commissions History */}
          <CommissionsHistory />
        </main>
      </div>
    </div>
  )
}
