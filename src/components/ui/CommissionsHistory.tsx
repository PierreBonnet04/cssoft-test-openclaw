'use client'

const commissions = [
  { id: '837363', date: '03/20/25 - 05:35', user: 'John Doe', type: 'Trade', amount: '26,396.90 USDT', percentage: '10%', commission: '100 USDT' },
  { id: '837363', date: '03/20/25 - 03:51', user: 'John Doe', type: 'Staking', amount: '26,396.90 USDT', percentage: '20%', commission: '100 USDT' },
  { id: '837363', date: '03/14/25 - 14:23', user: 'John Doe', type: 'Trade', amount: '26,396.90 USDT', percentage: '10%', commission: '100 USDT' },
  { id: '837363', date: '03/05/25 - 10:32', user: 'John Doe', type: 'ICO purchase', amount: '26,396.90 USDT', percentage: '5%', commission: '100 BV' },
  { id: '837363', date: '02/28/25 - 08:56', user: 'John Doe', type: 'RWA deposit', amount: '26,396.90 USDT', percentage: '10%', commission: '100 BV' },
  { id: '837363', date: '02/20/25 - 18:12', user: 'John Doe', type: 'RWA', amount: '26,396.90 USDT', percentage: '15%', commission: '100 USDT' },
  { id: '837363', date: '02/16/25 - 14:46', user: 'John Doe', type: 'Staking', amount: '26,396.90 USDT', percentage: '10%', commission: '100 USDT' },
  { id: '837363', date: '02/08/25 - 15:27', user: 'John Doe', type: 'Staking', amount: '26,396.90 USDT', percentage: '10%', commission: '100 USDT' },
  { id: '837363', date: '02/01/25 - 12:10', user: 'John Doe', type: 'Staking', amount: '26,396.90 USDT', percentage: '10%', commission: '100 BV' },
  { id: '837363', date: '01/23/25 - 09:52', user: 'John Doe', type: 'ICO purchase', amount: '26,396.90 USDT', percentage: '5%', commission: '100 USDT' },
]

export default function CommissionsHistory() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-white">Commissions history</h3>
        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">📥 Export history</button>
      </div>
      
      <p className="text-gray-400 text-sm mb-6">Comprehensive history of all your earned commissions.</p>

      {/* Filters */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <select className="px-4 py-2 bg-purple-700/10 border border-purple-700/20 rounded-lg text-sm text-gray-300 focus:border-blue-500/50 outline-none transition-colors">
          <option>All Status</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
        <select className="px-4 py-2 bg-purple-700/10 border border-purple-700/20 rounded-lg text-sm text-gray-300 focus:border-blue-500/50 outline-none transition-colors">
          <option>All transactions</option>
          <option>Trade</option>
          <option>Staking</option>
          <option>ICO purchase</option>
          <option>RWA deposit</option>
        </select>
        <button className="px-4 py-2 bg-purple-700/10 border border-purple-700/20 rounded-lg text-sm text-gray-300 hover:bg-purple-700/20 transition-colors">
          📅 Month to date
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-purple-700/20 text-gray-400">
              <th className="text-left py-3 px-4 font-medium">ID</th>
              <th className="text-left py-3 px-4 font-medium">Date</th>
              <th className="text-left py-3 px-4 font-medium">User</th>
              <th className="text-left py-3 px-4 font-medium">Type</th>
              <th className="text-left py-3 px-4 font-medium">Amount</th>
              <th className="text-left py-3 px-4 font-medium">Percentage</th>
              <th className="text-left py-3 px-4 font-medium">Commission</th>
            </tr>
          </thead>
          <tbody>
            {commissions.map((com, i) => (
              <tr key={i} className="border-b border-purple-700/20 hover:bg-purple-700/10 transition-colors">
                <td className="py-3 px-4 text-gray-400 text-xs">{com.id}</td>
                <td className="py-3 px-4 text-gray-400">{com.date}</td>
                <td className="py-3 px-4 text-white font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-xs font-bold">
                      JD
                    </span>
                    {com.user}
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-300">{com.type}</td>
                <td className="py-3 px-4 text-white">{com.amount}</td>
                <td className="py-3 px-4 text-purple-400">{com.percentage}</td>
                <td className="py-3 px-4 text-green-400 font-medium">{com.commission}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
