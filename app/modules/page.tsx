import Link from 'next/link'
import { getCourseData } from '@/data/courseData'
import { BookOpen, Clock, PlayCircle, CheckCircle2 } from 'lucide-react'

export default function ModulesPage() {
  const courseData = getCourseData()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Course Modules</h1>
        <p className="text-lg text-gray-600">
          Complete training program: Land Your First $500-$1,000 Client in 7 Days & Build a $5K-10K/Month Ad Creative Agency
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courseData.modules.map((module, index) => (
          <Link
            key={module.id}
            href={`/module/${module.id}`}
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 p-6 border border-gray-200 hover:border-primary-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center text-lg">
                  {index === 0 ? '0' : index}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
                    {module.title}
                  </h3>
                  <p className="text-xs text-gray-500">{module.duration}</p>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-gray-300 group-hover:text-primary-500" />
            </div>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{module.description}</p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4 text-gray-500">
                <div className="flex items-center gap-1">
                  <PlayCircle className="w-4 h-4" />
                  <span>{module.lessons.length} lessons</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{module.duration}</span>
                </div>
              </div>
              <span className="text-primary-600 font-medium group-hover:underline">
                View →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Bonus Modules Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🎁 Bonus Modules</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {courseData.bonusModules.map((module) => (
            <Link
              key={module.id}
              href={`/bonus/${module.id}`}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 p-6 border border-primary-200"
            >
              <h3 className="font-semibold text-gray-900 mb-2">{module.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{module.description}</p>
              <span className="text-primary-600 font-medium text-sm hover:underline">
                View Bonus →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

