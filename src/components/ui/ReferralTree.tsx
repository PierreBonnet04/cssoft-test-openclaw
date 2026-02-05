'use client'

export default function ReferralTree() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-white">Referral tree</h3>
        <p className="text-gray-400 text-sm">Get a clear view of your referee's network.</p>
      </div>

      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Revenue</p>
          <p className="text-white font-bold text-2xl">$ 10,000</p>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Network size</p>
          <p className="text-white font-bold text-2xl">135</p>
        </div>
      </div>

      {/* Tree Visualization */}
      <div className="space-y-8 overflow-x-auto pb-4">
        {/* Level 1 */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-center border-2 border-purple-700/40">
            <div className="text-xs">
              <p className="font-bold">John doe</p>
            </div>
          </div>
        </div>

        {/* Lines */}
        <div className="flex justify-center h-8 relative">
          <div className="w-0.5 h-full bg-purple-700/40"></div>
        </div>

        {/* Level 2 */}
        <div className="flex justify-center gap-8">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-700/40 to-purple-900/60 flex items-center justify-center text-center border border-purple-700/40">
                <p className="text-xs text-gray-300">John doe</p>
              </div>
            </div>
          ))}
        </div>

        {/* Level 3 */}
        <div className="flex justify-center gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-700/20 to-purple-900/40 flex items-center justify-center border border-purple-700/30">
              </div>
            </div>
          ))}
        </div>

        {/* Add buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="px-4 py-2 rounded-lg bg-purple-700/20 border border-purple-700/40 text-white text-sm hover:bg-purple-700/30 transition-colors">
            + Add
          </button>
          <button className="px-4 py-2 rounded-lg bg-purple-700/20 border border-purple-700/40 text-white text-sm hover:bg-purple-700/30 transition-colors">
            −
          </button>
        </div>
      </div>
    </div>
  )
}
