import Link from 'next/link'
import { getCourseData } from '@/data/courseData'
import { ArrowLeft, Award, CheckCircle2 } from 'lucide-react'
import { notFound } from 'next/navigation'

export default function BonusPage({ params }: { params: { id: string } }) {
  const courseData = getCourseData()
  const bonus = courseData.bonusModules.find((b) => b.id === params.id)

  if (!bonus) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
            <Award className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{bonus.title}</h1>
            <p className="text-lg text-gray-600">{bonus.description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
        <div className="space-y-2">
          {bonus.content.map((item, index) => {
            // Skip empty lines
            if (!item.trim()) {
              return <div key={index} className="h-4"></div>
            }

            // Check if it's a main item (starts with emoji or checkbox)
            const isMainItem = item.match(/^[✅🎥❓💰🤝👥🎯🏆💼🌐📸]/);
            const isSubItem = item.trim().startsWith('•') || item.trim().startsWith('→');

            return (
              <div
                key={index}
                className={`${
                  isMainItem 
                    ? 'flex items-start gap-3 p-4 bg-gradient-to-r from-primary-50 to-white rounded-lg border border-primary-200 hover:border-primary-300 transition-all' 
                    : isSubItem
                    ? 'ml-8 text-gray-600 text-sm py-1'
                    : 'text-gray-700 py-1'
                }`}
              >
                {isMainItem && (
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                )}
                <span className={isMainItem ? 'font-medium text-gray-900' : ''}>{item}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        {bonus.id === 'bonus-1' && (
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Award className="w-5 h-5" />
            View All Resources
          </Link>
        )}
        {bonus.id === 'bonus-2' && (
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Award className="w-5 h-5" />
            View Case Studies
          </Link>
        )}
        {bonus.id === 'bonus-3' && (
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Award className="w-5 h-5" />
            View FAQ
          </Link>
        )}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  )
}

