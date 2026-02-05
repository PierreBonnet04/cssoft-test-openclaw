'use client'

interface ReferralGuideModalProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function ReferralGuideModal({ isOpen = true, onClose }: ReferralGuideModalProps) {
  if (!isOpen) return null

  const levels = [
    {
      level: 'Level 1',
      access: ['Direct referees: 4', 'Initial deposit: 1000 USDT', 'BV earned: 1000 BV'],
      refereeDeposit: 'Commission: 10%',
      withdrawMargin: 'Commission: 10%',
      staking: 'Commission: 10%',
      tradeSwap: 'Commission: 10%',
      rwaDeposit: 'Commission: 10%',
      rwaInvestment: 'Commission: 10%',
    },
    {
      level: 'Level 2',
      access: ['Direct referees: 4', 'Initial deposit: 1000 USDT', 'BV earned: 1000 BV'],
      refereeDeposit: 'Commission: 10%',
      withdrawMargin: 'Commission: 10%',
      staking: 'Commission: 10%',
      tradeSwap: 'Commission: 10%',
      rwaDeposit: 'Commission: 10%',
      rwaInvestment: 'Commission: 10%',
    },
    {
      level: 'Level 3',
      access: ['Direct referees: 4', 'Initial deposit: 1000 USDT', 'BV earned: 1000 BV'],
      refereeDeposit: 'Commission: 10%',
      withdrawMargin: 'Commission: 10%',
      staking: 'Commission: 10%',
      tradeSwap: 'Commission: 10%',
      rwaDeposit: 'Commission: 10%',
      rwaInvestment: 'Commission: 10%',
    },
    {
      level: 'Level 4',
      access: ['Direct referees: 4', 'Initial deposit: 1000 USDT', 'BV earned: 1000 BV'],
      refereeDeposit: 'Commission: 10%',
      withdrawMargin: 'Commission: 10%',
      staking: 'Commission: 10%',
      tradeSwap: 'Commission: 10%',
      rwaDeposit: 'Commission: 10%',
      rwaInvestment: 'Commission: 10%',
    },
    {
      level: 'Level 5',
      access: ['Direct referees: 4', 'Initial deposit: 1000 USDT', 'BV earned: 1000 BV'],
      refereeDeposit: 'Commission: 10%',
      withdrawMargin: 'Commission: 10%',
      staking: 'Commission: 10%',
      tradeSwap: 'Commission: 10%',
      rwaDeposit: 'Commission: 10%',
      rwaInvestment: 'Commission: 10%',
    },
  ]

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-auto">
      <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-8 max-w-4xl w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-2">Referral ranks & commissions guide</h2>
        <p className="text-gray-400 text-sm mb-6">Your rank determines the commission you earn from your referees' investments. The higher your rank, the higher your earnings.</p>

        {/* Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-purple-700/40 rounded-lg overflow-hidden">
            <thead className="bg-purple-700/20">
              <tr>
                <th className="px-4 py-3 text-left text-white font-bold border-r border-purple-700/40">Access conditions</th>
                {levels.slice(0, 5).map((_, i) => (
                  <th key={i} className="px-4 py-3 text-center text-white font-bold border-r border-purple-700/40 last:border-r-0">
                    Level {i + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-700/40">
              {[
                { label: 'Access conditions', values: levels.map(l => l.access.join('\n')) },
                { label: 'Referee deposit', values: levels.map(l => l.refereeDeposit) },
                { label: 'Withdraw margin', values: levels.map(l => l.withdrawMargin) },
                { label: 'Staking', values: levels.map(l => l.staking) },
                { label: 'Trade/Swap', values: levels.map(l => l.tradeSwap) },
                { label: 'RWA deposit', values: levels.map(l => l.rwaDeposit) },
                { label: 'RWA Investment', values: levels.map(l => l.rwaInvestment) },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 font-bold text-white border-r border-purple-700/40">{row.label}</td>
                  {row.values.map((value, j) => (
                    <td key={j} className="px-4 py-3 text-center text-gray-300 border-r border-purple-700/40 last:border-r-0">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Information */}
        <div className="bg-purple-700/10 border border-purple-700/20 rounded-lg p-6 mb-6">
          <h3 className="text-white font-bold mb-2">What is Business Value (BV)?</h3>
          <p className="text-gray-400 text-sm mb-2">When you earn referral commissions, they are credited to your account as BV (Business Value).</p>
          <p className="text-gray-400 text-sm">Each BV is equivalent to 1 USDT. Your BV are automatically converted to USDT when you withdraw your earnings to your funding wallet.</p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-3 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold transition-colors"
        >
          Got it, close
        </button>
      </div>
    </div>
  )
}
