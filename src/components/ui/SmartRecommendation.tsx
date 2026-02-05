'use client'

const recommendations = [
  { icon: '🔐', title: 'Enable 2FA', subtitle: 'Enhance your account security! Enable two-factor authentication now.' },
  { icon: '💰', title: 'Make a deposit', subtitle: 'Kickstart your investments and deposit funds now.' },
  { icon: '📊', title: 'Review investment options', subtitle: 'Discover new investment options by exploring now.' },
]

export default function SmartRecommendation() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-4">Smart recommendation</h3>
      
      <div className="space-y-3">
        {recommendations.map((rec, i) => (
          <div key={i} className="flex gap-3 pb-3 border-b border-purple-700/20 last:border-b-0 last:pb-0">
            <span className="text-2xl flex-shrink-0">{rec.icon}</span>
            <div>
              <p className="font-medium text-white text-sm">{rec.title}</p>
              <p className="text-gray-400 text-xs mt-1">{rec.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
