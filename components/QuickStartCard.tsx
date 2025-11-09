import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const quickStartDays = [
  { day: 1, task: 'Software setup + first 5 sample ads', module: 'module-0' },
  { day: 2, task: 'Create 20-30 portfolio samples across 3 niches', module: 'module-2' },
  { day: 3, task: 'Build prospect list of 50 businesses + pick your niche', module: 'module-3' },
  { day: 4, task: 'Create custom sample ads for 10 specific prospects', module: 'module-2' },
  { day: 5, task: 'Send outreach emails with custom samples', module: 'module-4' },
  { day: 6, task: 'Follow up with interested prospects + send proposals', module: 'module-4' },
  { day: 7, task: 'Close your first client + collect payment', module: 'module-5' },
]

export default function QuickStartCard() {
  return (
    <div className="bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-lg shadow-lg p-6 border-2 border-primary-200 hover:border-primary-300 transition-all">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Your 7-Day Roadmap to $500</h3>
        <p className="text-gray-600 text-sm">
          Follow this exact path to land your first client in just one week
        </p>
      </div>
      <div className="space-y-3">
        {quickStartDays.map((item) => (
          <Link
            key={item.day}
            href={`/module/${item.module}`}
            className="flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md hover:border-primary-200 border border-transparent transition-all group"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white font-bold flex items-center justify-center text-sm shadow-sm group-hover:shadow-md transition-shadow">
              {item.day}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">Day {item.day}</span>
                <CheckCircle2 className="w-4 h-4 text-gray-300 group-hover:text-primary-500 transition-colors" />
              </div>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{item.task}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-primary-200">
        <Link
          href="/module/module-0"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all shadow-md hover:shadow-lg"
        >
          Start 7-Day Challenge
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  )
}

