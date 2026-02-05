'use client'

export default function AffiliateRevenue() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-2">Revenue</h3>
      <p className="text-gray-400 text-sm mb-6">All investment breakdown.</p>

      <div className="space-y-4">
        {/* Stat */}
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Number of referees</p>
          <p className="text-white font-bold text-2xl">135</p>
        </div>

        {/* Stat */}
        <div className="border-t border-purple-700/20 pt-4">
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Business Value earned (BV)</p>
          <p className="text-white font-bold text-2xl">10,000 BV</p>
        </div>

        {/* Stat */}
        <div className="border-t border-purple-700/20 pt-4">
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Total earnings</p>
          <p className="text-white font-bold text-2xl">10,000 USDT</p>
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full mt-6 py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors">
        Withdraw earnings
      </button>
    </div>
  )
}
