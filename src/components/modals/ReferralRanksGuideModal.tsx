'use client'

interface ReferralRanksGuideModalProps {
  isOpen: boolean
  onClose: () => void
}

const ranksData = [
  {
    level: 'Level 1',
    accessConditions: 'Direct referees: 4 | Initial deposit: 1000 USDT | BV earned: 1000 BV',
    refereeDeposit: 'Commission: 10 %',
    withdrawMargin: 'Commission: 10 %',
    staking: 'Commission: 10 %',
    trade: 'Commission: 10 %',
    rwaDeposit: 'Commission: 10 %',
    rwaInvestment: 'Commission: 10 %',
  },
  {
    level: 'Level 2',
    accessConditions: 'Direct referees: 4 | Initial deposit: 1000 USDT | BV earned: 1000 BV',
    refereeDeposit: 'Commission: 10 %',
    withdrawMargin: 'Commission: 10 %',
    staking: 'Commission: 10 %',
    trade: 'Commission: 10 %',
    rwaDeposit: 'Commission: 10 %',
    rwaInvestment: 'Commission: 10 %',
  },
  {
    level: 'Level 3',
    accessConditions: 'Direct referees: 4 | Initial deposit: 1000 USDT | BV earned: 1000 BV',
    refereeDeposit: 'Commission: 10 %',
    withdrawMargin: 'Commission: 10 %',
    staking: 'Commission: 10 %',
    trade: 'Commission: 10 %',
    rwaDeposit: 'Commission: 10 %',
    rwaInvestment: 'Commission: 10 %',
  },
  {
    level: 'Level 4',
    accessConditions: 'Direct referees: 4 | Initial deposit: 1000 USDT | BV earned: 1000 BV',
    refereeDeposit: 'Commission: 10 %',
    withdrawMargin: 'Commission: 10 %',
    staking: 'Commission: 10 %',
    trade: 'Commission: 10 %',
    rwaDeposit: 'Commission: 10 %',
    rwaInvestment: 'Commission: 10 %',
  },
  {
    level: 'Level 5',
    accessConditions: 'Direct referees: 4 | Initial deposit: 1000 USDT | BV earned: 1000 BV',
    refereeDeposit: 'Commission: 10 %',
    withdrawMargin: 'Commission: 10 %',
    staking: 'Commission: 10 %',
    trade: 'Commission: 10 %',
    rwaDeposit: 'Commission: 10 %',
    rwaInvestment: 'Commission: 10 %',
  },
]

export default function ReferralRanksGuideModal({ isOpen, onClose }: ReferralRanksGuideModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-8 max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Referral ranks & commissions guide</h2>
            <p className="text-gray-400 text-sm mt-2">Your rank determines the commission you earn from your referees' investments. The higher your rank, the higher your earnings.</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl flex-shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-purple-700/20">
                <th className="text-left py-3 px-4 text-gray-400 font-bold">Level 1</th>
                <th className="text-left py-3 px-4 text-gray-400 font-bold">Level 2</th>
                <th className="text-left py-3 px-4 text-gray-400 font-bold">Level 3</th>
                <th className="text-left py-3 px-4 text-gray-400 font-bold">Level 4</th>
                <th className="text-left py-3 px-4 text-gray-400 font-bold">Level 5</th>
              </tr>
            </thead>
            <tbody>
              {/* Access conditions */}
              <tr className="border-b border-purple-700/20">
                <td className="py-3 px-4 text-gray-400 font-bold">Access conditions</td>
                {ranksData.map((rank, i) => (
                  <td key={i} className="py-3 px-4 text-gray-300 text-xs">
                    {rank.accessConditions.split(' | ').map((line, j) => (
                      <div key={j}>{line}</div>
                    ))}
                  </td>
                ))}
              </tr>

              {/* Referees deposit */}
              <tr className="border-b border-purple-700/20">
                <td className="py-3 px-4 text-gray-400 font-bold">Referees deposit</td>
                {ranksData.map((rank, i) => (
                  <td key={i} className="py-3 px-4 text-purple-400 text-xs font-bold">
                    {rank.refereeDeposit}
                  </td>
                ))}
              </tr>

              {/* Withdraw margin */}
              <tr className="border-b border-purple-700/20">
                <td className="py-3 px-4 text-gray-400 font-bold">Withdraw margin</td>
                {ranksData.map((rank, i) => (
                  <td key={i} className="py-3 px-4 text-purple-400 text-xs font-bold">
                    {rank.withdrawMargin}
                  </td>
                ))}
              </tr>

              {/* Staking */}
              <tr className="border-b border-purple-700/20">
                <td className="py-3 px-4 text-gray-400 font-bold">Staking</td>
                {ranksData.map((rank, i) => (
                  <td key={i} className="py-3 px-4 text-purple-400 text-xs font-bold">
                    {rank.staking}
                  </td>
                ))}
              </tr>

              {/* Trade/Swap */}
              <tr className="border-b border-purple-700/20">
                <td className="py-3 px-4 text-gray-400 font-bold">Trade/Swap</td>
                {ranksData.map((rank, i) => (
                  <td key={i} className="py-3 px-4 text-purple-400 text-xs font-bold">
                    {rank.trade}
                  </td>
                ))}
              </tr>

              {/* RWA deposit */}
              <tr className="border-b border-purple-700/20">
                <td className="py-3 px-4 text-gray-400 font-bold">RWA deposit</td>
                {ranksData.map((rank, i) => (
                  <td key={i} className="py-3 px-4 text-purple-400 text-xs font-bold">
                    {rank.rwaDeposit}
                  </td>
                ))}
              </tr>

              {/* RWA investment */}
              <tr>
                <td className="py-3 px-4 text-gray-400 font-bold">RWA investment</td>
                {ranksData.map((rank, i) => (
                  <td key={i} className="py-3 px-4 text-purple-400 text-xs font-bold">
                    {rank.rwaInvestment}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Business Value Explanation */}
        <div className="bg-purple-700/10 border border-purple-700/20 rounded-lg p-4 mb-6">
          <h4 className="text-white font-bold text-sm mb-2">What is Business Value (BV)?</h4>
          <p className="text-gray-400 text-sm mb-2">
            When you earn referral commissions, they are credited to your account as BV (Business Value).
          </p>
          <p className="text-gray-400 text-sm">
            <span className="font-bold text-white">Each BV is equivalent to 1 USDT.</span> Your BV are automatically converted to USDT when you withdraw your earnings to your funding wallet.
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}
