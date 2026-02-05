'use client'

export default function AffiliateProfile() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-6">Profile</h3>
      
      {/* Profile Avatar */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-2xl font-bold mb-3">
          JD
        </div>
        <h4 className="text-white font-bold">John Doe</h4>
        <p className="text-gray-400 text-sm">Rank: Level 3</p>
      </div>

      {/* Referral Link */}
      <div className="bg-purple-700/10 border border-purple-700/20 rounded-lg p-3 mb-4">
        <p className="text-gray-400 text-xs mb-2">Your referral link</p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value="demo.cssoft-demo.com/ref/JohnDoe"
            readOnly
            className="flex-1 bg-transparent text-gray-300 text-xs outline-none"
          />
          <button className="text-blue-400 hover:text-blue-300 text-sm">📋</button>
        </div>
      </div>

      {/* Commission Info */}
      <div className="bg-purple-700/10 border border-purple-700/20 rounded-lg p-3">
        <p className="text-white font-bold text-sm mb-1">Commission rate</p>
        <p className="text-gray-400 text-xs">You earn 10% commission on your referees' trades</p>
      </div>
    </div>
  )
}
