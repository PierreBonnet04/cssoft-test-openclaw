'use client'

const commissions = [
  { id: '837263', date: '03/25/25 - 05:35', user: 'John Doe', type: 'Trade', amount: '26,396.90 USDT', percentage: '10%', commission: '100 USDT' },
  { id: '837263', date: '03/25/25 - 03:51', user: 'John Doe', type: 'Staking', amount: '26,396.90 USDT', percentage: '20%', commission: '100 USDT' },
  { id: '837263', date: '03/14/25 - 14:23', user: 'John Doe', type: 'Trade', amount: '26,396.90 USDT', percentage: '10%', commission: '100 USDT' },
  { id: '837263', date: '03/05/25 - 10:32', user: 'John Doe', type: 'ICO purchase', amount: '26,396.90 USDT', percentage: '5%', commission: '100 BV' },
  { id: '837263', date: '02/28/25 - 08:56', user: 'John Doe', type: 'RWA deposit', amount: '26,396.90 USDT', percentage: '10%', commission: '100 BV' },
  { id: '837263', date: '02/20/25 - 18:12', user: 'John Doe', type: 'RWA', amount: '26,396.90 USDT', percentage: '15%', commission: '100 USDT' },
]

export default function CommissionsHistory() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-4">Commissions history</h3>
      <p className="text-gray-400 text-sm mb-6">Comprehensive history of all your earned commissions.</p>

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
              <th className="text-left text-gray-400 font-medium p-3">ID</th>
              <th className="text-left text-gray-400 font-medium p-3">Date</th>
              <th className="text-left text-gray-400 font-medium p-3">User</th>
              <th className="text-left text-gray-400 font-medium p-3">Type</th>
              <th className="text-left text-gray-400 font-medium p-3">Amount</th>
              <th className="text-left text-gray-400 font-medium p-3">Percentage</th>
              <th className="text-left text-gray-400 font-medium p-3">Commission</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-700/20">
            {commissions.map((comm, i) => (
              <tr key={i} className="hover:bg-purple-700/10 transition-colors">
                <td className="p-3 text-blue-400 font-medium">{comm.id}</td>
                <td className="p-3 text-gray-400">{comm.date}</td>
                <td className="p-3 text-gray-300 flex items-center gap-2">
                  👤 {comm.user}
                </td>
                <td className="p-3 text-gray-300">{comm.type}</td>
                <td className="p-3 text-white font-medium">{comm.amount}</td>
                <td className="p-3 text-blue-400 font-medium">{comm.percentage}</td>
                <td className="p-3 text-green-400 font-bold">{comm.commission}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
