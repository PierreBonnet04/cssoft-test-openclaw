'use client'

export default function AffiliateRevenue() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Revenue</h3>
        <span className="text-xl">👁️</span>
      </div>
      
      <p className="text-gray-400 text-sm mb-6">All investment breakdown.</p>

      <div className="space-y-4">
        {/* Number of referees */}
        <div className="bg-purple-700/10 border border-purple-700/20 rounded-lg p-4">
          <p className="text-gray-400 text-xs mb-2">Number of referees</p>
          <h4 className="text-2xl font-bold text-white">135</h4>
        </div>

        {/* Business Value Earned */}
        <div className="bg-purple-700/10 border border-purple-700/20 rounded-lg p-4">
          <p className="text-gray-400 text-xs mb-2">Business value earned (BV)</p>
          <h4 className="text-2xl font-bold text-white">10,000 BV</h4>
        </div>

        {/* Total USDT Earned */}
        <div className="bg-purple-700/10 border border-purple-700/20 rounded-lg p-4">
          <p className="text-gray-400 text-xs mb-2">Total USDT earned</p>
          <h4 className="text-2xl font-bold text-white">10,000 USDT</h4>
        </div>
      </div>

      {/* Withdraw Button */}
      <button className="w-full mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-lg transition-colors">
        Withdraw earnings
      </button>
    </div>
  )
}
