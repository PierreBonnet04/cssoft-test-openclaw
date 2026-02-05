'use client'

const transactions = [
  { date: '03/20/25 - 05:35', type: 'Deposit', amount: '26,396.90 USDT', txHash: 'AS6BD294F27Z7', action: 'Details' },
  { date: '03/20/25 - 03:51', type: 'Transfer', amount: '26,396.90 USDT', txHash: 'AS6BD294F27Z7', action: 'Details' },
  { date: '03/14/25 - 14:23', type: 'Deposit', amount: '0.3', txHash: 'AS6BD294F27Z7', action: 'Details' },
  { date: '03/05/25 - 10:32', type: 'Transfer', amount: '26,396.90 USDT', txHash: 'AS6BD294F27Z7', action: 'Details' },
  { date: '02/28/25 - 08:56', type: 'Transfer', amount: '26,396.90 USDT', txHash: 'AS6BD294F27Z7', action: 'Details' },
  { date: '02/20/25 - 18:12', type: 'Deposit', amount: '26,396.90 USDT', txHash: 'AS6BD294F27Z7', action: 'Details' },
  { date: '02/16/25 - 14:46', type: 'Transfer', amount: '26,396.90 USDT', txHash: 'AS6BD294F27Z7', action: 'Details' },
  { date: '02/08/25 - 15:27', type: 'Transfer', amount: '26,396.90 USDT', txHash: 'AS6BD294F27Z7', action: 'Details' },
  { date: '02/01/25 - 12:10', type: 'Transfer', amount: '26,396.90 USDT', txHash: 'AS6BD294F27Z7', action: 'Details' },
  { date: '01/23/25 - 09:52', type: 'Deposit', amount: '26,396.90 USDT', txHash: 'AS6BD294F27Z7', action: 'Details' },
]

export default function FundingWalletHistory() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-white">Wallets history</h3>
        <button className="px-4 py-2 bg-purple-700/20 border border-purple-700/40 rounded-lg text-white text-sm font-medium hover:bg-purple-700/30 transition-colors">
          💾 Export history
        </button>
      </div>

      <p className="text-gray-400 text-sm mb-6">Comprehensive history of all transactions across your wallets.</p>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Search a transaction ..."
          className="flex-1 bg-purple-700/20 border border-purple-700/40 rounded-lg px-3 py-2 text-white placeholder-gray-500 text-sm"
        />
        <button className="px-4 py-2 bg-purple-700/20 border border-purple-700/40 rounded-lg text-white text-sm hover:bg-purple-700/30 transition-colors">
          All Status ▼
        </button>
        <button className="px-4 py-2 bg-purple-700/20 border border-purple-700/40 rounded-lg text-white text-sm hover:bg-purple-700/30 transition-colors">
          All transactions ▼
        </button>
        <button className="px-4 py-2 bg-purple-700/20 border border-purple-700/40 rounded-lg text-white text-sm hover:bg-purple-700/30 transition-colors">
          📅 Month to date
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-purple-700/20">
              <th className="text-left text-gray-400 font-medium p-3">Date</th>
              <th className="text-left text-gray-400 font-medium p-3">Transaction</th>
              <th className="text-left text-gray-400 font-medium p-3">Amount</th>
              <th className="text-left text-gray-400 font-medium p-3">TxHash</th>
              <th className="text-left text-gray-400 font-medium p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-700/20">
            {transactions.map((tx, i) => (
              <tr key={i} className="hover:bg-purple-700/10 transition-colors">
                <td className="p-3 text-gray-400">{tx.date}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    tx.type === 'Deposit' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-gray-700/20 text-gray-400'
                  }`}>
                    {tx.type}
                  </span>
                </td>
                <td className="p-3 text-white font-medium">{tx.amount}</td>
                <td className="p-3 text-blue-400 font-medium text-xs">{tx.txHash}</td>
                <td className="p-3">
                  <button className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded hover:bg-blue-500/30 transition-colors">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
