'use client'

export default function AffiliateProfile() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-6">Profile</h3>
      
      {/* Profile Avatar */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center mb-4 border-2 border-purple-700/40">
          👤
        </div>
        <h4 className="text-white font-bold">John Doe</h4>
        <p className="text-gray-400 text-sm">ID:1670891078</p>
      </div>

      {/* Referral Link */}
      <div className="mb-6">
        <label className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">Your referral link</label>
        <div className="flex gap-2">
          <input
            type="text"
            value="demo.cssoft-demo.com/ref/Johndoe"
            readOnly
            className="flex-1 bg-purple-700/20 border border-purple-700/40 rounded-lg px-3 py-2 text-white text-xs"
          />
          <button className="p-2 rounded-lg bg-purple-700/20 border border-purple-700/40 text-gray-400 hover:text-white transition-colors">
            📋
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-400 text-xs">Referrals</p>
          <p className="text-white font-bold text-lg">125</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Commission</p>
          <p className="text-white font-bold text-lg">25%</p>
        </div>
      </div>
    </div>
  )
}
