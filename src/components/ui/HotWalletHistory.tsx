'use client'

const transactions = [
  { date: '03/25/25 - 05:35', txHash: '0xdac1795d8d2ee...', from: 'Hot wallet', to: 'Hot wallet', amount: '26,396.90', asset: 'USDT', fee: '0.00001', action: 'Details' },
  { date: '03/25/25 - 03:51', txHash: '0xdac1795d8d2ee...', from: 'Hot wallet', to: 'Hot wallet', amount: '1,341.90', asset: 'TRON', fee: '0.00001', action: 'Details' },
  { date: '03/14/25 - 14:23', txHash: '0xdac1795d8d2ee...', from: 'Hot wallet', to: 'Hot wallet', amount: '0.3', asset: 'ETH', fee: '0.00001', action: 'Details' },
  { date: '03/05/25 - 10:32', txHash: '0xdac1795d8d2ee...', from: 'Cold wallet', to: 'Cold wallet', amount: '26,396.90', asset: 'USDT', fee: '0.00001', action: 'Details' },
  { date: '02/28/25 - 08:56', txHash: '0xdac1795d8d2ee...', from: 'Hot wallet', to: 'Hot wallet', amount: '26,396.90', asset: 'USDT', fee: '0.00001', action: 'Details' },
  { date: '02/20/25 - 18:12', txHash: '0xdac1795d8d2ee...', from: 'Funding wallet', to: 'Hot wallet', amount: '26,396.90', asset: 'USDT', fee: '0.00001', action: 'Details' },
  { date: '02/16/25 - 14:46', txHash: '0xdac1795d8d2ee...', from: 'Hot wallet', to: 'Hot wallet', amount: '26,396.90', asset: 'USDT', fee: '0.00001', action: 'Details' },
  { date: '02/08/25 - 15:27', txHash: '0xdac1795d8d2ee...', from: 'Hot wallet', to: 'Hot wallet', amount: '26,396.90', asset: 'USDT', fee: '0.00001', action: 'Details' },
  { date: '02/01/25 - 12:10', txHash: '0xdac1795d8d2ee...', from: 'Cold wallet', to: 'Cold wallet', amount: '26,396.90', asset: 'ETH', fee: '0', action: 'Details' },
  { date: '01/23/25 - 09:52', txHash: '0xdac1795d8d2ee...', from: 'Hot wallet', to: 'Hot wallet', amount: '26,396.90', asset: 'TRON', fee: '0.00001', action: 'Details' },
]

export default function HotWalletHistory() {
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
              <th className="text-left text-gray-400 font-medium p-3">From</th>
              <th className="text-left text-gray-400 font-medium p-3">To</th>
              <th className="text-left text-gray-400 font-medium p-3">Amount</th>
              <th className="text-left text-gray-400 font-medium p-3">Asset</th>
              <th className="text-left text-gray-400 font-medium p-3">Fee</th>
              <th className="text-left text-gray-400 font-medium p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-700/20">
            {transactions.map((tx, i) => (
              <tr key={i} className="hover:bg-purple-700/10 transition-colors">
                <td className="p-3 text-gray-400">{tx.date}</td>
                <td className="p-3 text-blue-400 font-medium text-xs">{tx.txHash}</td>
                <td className="p-3 text-gray-300 text-sm">{tx.from}</td>
                <td className="p-3 text-gray-300 text-sm">{tx.to}</td>
                <td className="p-3 text-white font-medium">{tx.amount}</td>
                <td className="p-3">
                  <span className="px-2 py-1 bg-purple-700/20 text-white text-xs font-medium rounded">
                    {tx.asset}
                  </span>
                </td>
                <td className="p-3 text-gray-400 text-sm">{tx.fee}</td>
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
