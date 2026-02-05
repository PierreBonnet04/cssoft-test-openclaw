'use client'

export default function NewsCard() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6 overflow-hidden">
      <h3 className="text-lg font-bold text-white mb-4">News</h3>
      
      <div className="space-y-4">
        {/* News Item with Image */}
        <div className="rounded-lg overflow-hidden bg-purple-700/20 h-32 mb-3">
          <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-4xl">
            🌆
          </div>
        </div>
        
        <div>
          <p className="text-white font-bold text-sm mb-1">CNN announced: Built run is coming !</p>
          <p className="text-gray-400 text-xs">Strengthen your account security by eliminating two factor authentication →</p>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-1 mt-3">
          {[0, 1, 2, 3].map(i => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === 0 ? 'bg-blue-500' : 'bg-purple-700/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
