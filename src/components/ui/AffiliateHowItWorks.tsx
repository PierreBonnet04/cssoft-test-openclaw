'use client'

export default function AffiliateHowItWorks() {
  const steps = [
    { icon: '🔗', title: 'Share your referral link and get paid', number: '1' },
    { icon: '👥', title: 'They sign up and deposit funds', number: '2' },
    { icon: '📊', title: 'You receive a percentage based on your referral rank', number: '3' },
  ]

  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-6">How it works?</h3>
      <p className="text-gray-400 text-sm mb-6">Share your unique referral link and get paid.</p>

      <div className="space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400/20 to-purple-600/20 flex items-center justify-center text-2xl border border-purple-700/40">
              {step.icon}
            </div>
            <div className="flex-1">
              <p className="text-white font-medium text-sm mb-1">{step.title}</p>
              {i < steps.length - 1 && <div className="w-0.5 h-6 bg-gradient-to-b from-blue-400/20 to-transparent ml-6" />}
            </div>
          </div>
        ))}
      </div>

      {/* Arrow showing flow */}
      <div className="mt-6 pt-6 border-t border-purple-700/20">
        <div className="text-center">
          <p className="text-xs text-gray-400">Your referral → Makes an investment → You earn %</p>
        </div>
      </div>
    </div>
  )
}
