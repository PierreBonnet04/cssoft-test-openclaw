'use client'

interface BalanceCardProps {
  title: string
  amount: string
  subtitle: string
  actions: string[]
}

export default function BalanceCard({ title, amount, subtitle, actions }: BalanceCardProps) {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <div className="space-y-4">
        <p className="text-gray-400 text-sm">{subtitle}</p>
        
        <div className="flex items-baseline gap-2">
          <h3 className="text-4xl font-bold text-white">${amount}</h3>
          <span className="text-gray-400 text-sm">USD</span>
        </div>

        <div className="flex gap-3 pt-4">
          {actions.map(action => (
            <button
              key={action}
              className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-colors ${
                action === 'Deposit'
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'border border-purple-700/50 text-gray-300 hover:bg-purple-700/20'
              }`}
            >
              {action === 'Transfer' && '↔️'} {action === 'Withdraw' && '📤'} {action === 'Deposit' && '📥'} {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
