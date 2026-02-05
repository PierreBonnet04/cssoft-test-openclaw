'use client'

const transactions = [
  { logo: '🔮', name: 'Fantom', type: 'BUY', amount: '10,000.00' },
  { logo: '🔮', name: 'Fantom', type: 'BUY', amount: '10,000.00' },
  { logo: '🔮', name: 'Fantom', type: 'BUY', amount: '10,000.00' },
  { logo: '🔮', name: 'Fantom', type: 'BUY', amount: '10,000.00' },
]

export default function RecentTransactions() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-4">Recent transactions</h3>
      
      <div className="space-y-3">
        {transactions.map((tx, i) => (
          <div key={i} className="flex items-center gap-3 pb-3 border-b border-purple-700/20 last:border-b-0 last:pb-0">
            <span className="text-2xl">{tx.logo}</span>
            <div className="flex-1">
              <p className="font-medium text-white text-sm">{tx.name}</p>
              <p className="text-gray-400 text-xs">{tx.type}</p>
            </div>
            <p className="text-white font-bold text-sm">{tx.amount}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
