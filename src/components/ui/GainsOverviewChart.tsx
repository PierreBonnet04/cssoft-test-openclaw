'use client'

export default function GainsOverviewChart() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-white">Gains overview</h3>
        <div className="flex gap-2">
          {['D', 'W', 'M', 'Y', 'Staking'].map(period => (
            <button
              key={period}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                period === 'Y'
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-4">Quickly view an overview of your total gains in one place.</p>

      {/* Simple SVG Chart */}
      <svg viewBox="0 0 400 200" className="w-full h-40 mb-4">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#667eea" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#667eea" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Grid Lines */}
        {[50, 100, 150].map(y => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#667eea" strokeOpacity="0.1" strokeDasharray="5,5" />
        ))}

        {/* Chart Line */}
        <polyline
          points="0,120 40,100 80,90 120,95 160,75 200,85 240,70 280,60 320,65 360,55 400,50"
          fill="none"
          stroke="#667eea"
          strokeWidth="2"
        />
        
        {/* Chart Area */}
        <polygon
          points="0,120 40,100 80,90 120,95 160,75 200,85 240,70 280,60 320,65 360,55 400,50 400,200 0,200"
          fill="url(#chartGradient)"
        />
      </svg>

      <div className="flex justify-between text-xs text-gray-400">
        <span>Nov 5</span>
        <span>Nov 13</span>
      </div>
    </div>
  )
}
