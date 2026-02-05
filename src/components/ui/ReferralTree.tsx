'use client'

export default function ReferralTree() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white">Referral tree</h3>
        <div className="flex gap-4 text-sm">
          <div className="text-center">
            <p className="text-gray-400 text-xs">Revenue</p>
            <p className="text-white font-bold">$ 10,000</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-xs">Network size</p>
            <p className="text-white font-bold">135</p>
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-8">Get a clear view of your referees network.</p>

      {/* Tree Structure */}
      <div className="flex justify-center">
        <div className="space-y-6 max-w-2xl">
          {/* Level 0 - Root */}
          <div className="flex justify-center">
            <div className="bg-purple-700/10 border border-purple-700/30 rounded-lg p-4 w-40 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                JD
              </div>
              <p className="text-white font-bold text-sm">John doe</p>
              <p className="text-gray-400 text-xs">Level 3</p>
            </div>
          </div>

          {/* Connector Line */}
          <div className="flex justify-center h-4">
            <div className="w-0.5 bg-purple-700/30"></div>
          </div>

          {/* Level 1 */}
          <div className="grid grid-cols-5 gap-4 px-4">
            {[1].map((i) => (
              <div key={i} className="col-start-3 bg-purple-700/10 border border-purple-700/30 rounded-lg p-3 text-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-xs font-bold mx-auto mb-1">
                  JD
                </div>
                <p className="text-white font-bold text-xs">John doe</p>
              </div>
            ))}
          </div>

          {/* Connector Lines */}
          <div className="flex justify-center h-4">
            <div className="w-0.5 bg-purple-700/30"></div>
          </div>

          {/* Level 2 */}
          <div className="grid grid-cols-5 gap-3 px-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-purple-700/10 border border-purple-700/30 rounded-lg p-2 text-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-xs font-bold mx-auto mb-1">
                  JD
                </div>
                <p className="text-white font-bold text-xs">John doe</p>
              </div>
            ))}
          </div>

          {/* Expand Button */}
          <div className="flex justify-center">
            <button className="px-4 py-2 text-blue-400 hover:text-blue-300 text-sm font-medium">
              + − Expand/Collapse
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
