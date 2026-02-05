'use client'

export default function AffiliateHowItWorks() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-6">How it works?</h3>
      <p className="text-gray-400 text-sm mb-6">Share your unique referral link and get paid.</p>

      <div className="space-y-6">
        {/* Step 1 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400 font-bold text-sm">
              1
            </div>
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-sm mb-1">Share your referral link and invite</p>
            <p className="text-gray-400 text-xs">Share your unique referral link and invite your friends</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <span className="text-2xl text-blue-400">↓</span>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400 font-bold text-sm">
              2
            </div>
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-sm mb-1">They sign up and deposit funds</p>
            <p className="text-gray-400 text-xs">They receive a commission based on your referral rank</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <span className="text-2xl text-blue-400">↓</span>
        </div>

        {/* Step 3 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400 font-bold text-sm">
              3
            </div>
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-sm mb-1">You receive a percentage</p>
            <p className="text-gray-400 text-xs">Based on your referral rank</p>
          </div>
        </div>
      </div>
    </div>
  )
}
