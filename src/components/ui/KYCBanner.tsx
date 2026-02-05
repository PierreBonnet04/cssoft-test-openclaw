'use client'

export default function KYCBanner() {
  return (
    <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span className="text-2xl">🔐</span>
        <div>
          <p className="text-white font-bold text-sm">Verification required. Complete your KYC to unlock all platform features.</p>
        </div>
      </div>
      <button className="text-blue-300 hover:text-blue-200 text-sm font-medium">✕</button>
    </div>
  )
}
