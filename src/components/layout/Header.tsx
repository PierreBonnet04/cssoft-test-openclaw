'use client'

import React from 'react'

interface HeaderProps {
  title?: string
  subtitle?: string
}

export default function Header({ title = 'Dashboard', subtitle = 'Manage your investments' }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-purple-900/20 to-transparent border-b border-purple-700/20 px-6 py-4">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="p-2 rounded-full hover:bg-purple-700/20 transition-colors">
            🔔
          </button>
          
          {/* User Profile */}
          <div className="flex items-center gap-3 pl-4 border-l border-purple-700/20">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-xs font-bold">
              JD
            </div>
            <div className="text-sm">
              <p className="font-medium text-white">John Doe</p>
              <p className="text-gray-400 text-xs">ID:1670891078</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
