import Link from 'next/link'
import { getCourseData } from '@/data/courseData'
import { ArrowLeft, CheckCircle2, Clock, PlayCircle, FileText } from 'lucide-react'
import { notFound } from 'next/navigation'

export default function ModulePage({ params }: { params: { id: string } }) {
  const courseData = getCourseData()
  const module = courseData.modules.find((m) => m.id === params.id)

  if (!module) {
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
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center text-xl">
                {module.order === 0 ? '0' : module.order}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{module.title}</h1>
            </div>
            <p className="text-lg text-gray-600 mt-2">{module.description}</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{module.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <PlayCircle className="w-4 h-4" />
                <span>{module.lessons.length} lessons</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Lessons</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {module.lessons.map((lesson, index) => (
            <Link
              key={lesson.id}
              href={`/lesson/${lesson.id}`}
              className="block p-6 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {lesson.title}
                      </h3>
                      {lesson.completed && (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{lesson.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{lesson.duration}</span>
                      </div>
                      {lesson.resources && lesson.resources.length > 0 && (
                        <div className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          <span>{lesson.resources.length} resources</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Implementation Task */}
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
          <FileText className="w-5 h-5 text-yellow-600" />
          Implementation Task
        </h3>
        <p className="text-gray-700">
          After completing this module, make sure to complete the implementation task before moving to the next module.
        </p>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        {module.order > 0 && (
          <Link
            href={`/module/${courseData.modules[module.order - 1].id}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous Module
          </Link>
        )}
        {module.order < courseData.modules.length - 1 && (
          <Link
            href={`/module/${courseData.modules[module.order + 1].id}`}
            className="ml-auto inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Next Module
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

