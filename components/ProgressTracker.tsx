'use client'

import { CheckCircle2, Clock } from 'lucide-react'

interface ProgressTrackerProps {
  completed: number
  total: number
}

export default function ProgressTracker({ completed, total }: ProgressTrackerProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-primary-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Your Progress</h2>
        <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-5 mb-4 overflow-hidden shadow-inner">
        <div
          className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 h-5 rounded-full transition-all duration-500 shadow-sm relative overflow-hidden"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-primary-600" />
          <span className="font-medium">{completed} lessons completed</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary-400" />
          <span>{total - completed} lessons remaining</span>
        </div>
      </div>
    </div>
  )
}

