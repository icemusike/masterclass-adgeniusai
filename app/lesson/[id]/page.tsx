import Link from 'next/link'
import { getCourseData } from '@/data/courseData'
import { ArrowLeft, CheckCircle2, Clock, Download, FileText } from 'lucide-react'
import { notFound } from 'next/navigation'
import VideoPlayer from '@/components/VideoPlayer'

export default function LessonPage({ params }: { params: { id: string } }) {
  const courseData = getCourseData()
  let lesson = null
  let module = null

  // Find the lesson across all modules
  for (const mod of courseData.modules) {
    const foundLesson = mod.lessons.find((l) => l.id === params.id)
    if (foundLesson) {
      lesson = foundLesson
      module = mod
      break
    }
  }

  if (!lesson || !module) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href={`/module/${module.id}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {module.title}
        </Link>
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{lesson.title}</h1>
              {lesson.completed && (
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              )}
            </div>
            <p className="text-lg text-gray-600 mt-2">{lesson.description}</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{lesson.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Module {module.order === 0 ? '0' : module.order}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Player */}
      <div className="mb-8">
        <VideoPlayer
          videoUrl={lesson.videoUrl}
          title={lesson.title}
        />
      </div>

      {/* Lesson Content */}
      {lesson.content && lesson.content.length > 0 && (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary-600" />
            Lesson Content
          </h2>
          <div className="prose max-w-none">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {(() => {
                const elements: JSX.Element[] = []
                let bulletGroup: string[] = []
                
                lesson.content.forEach((item, index) => {
                  const trimmed = item.trim()
                  
                  // If it's a bullet point, add to current group
                  if (trimmed.startsWith('-')) {
                    bulletGroup.push(trimmed)
                  } else {
                    // If we have accumulated bullets, render them first
                    if (bulletGroup.length > 0) {
                      elements.push(
                        <ul key={`bullets-${index}`} className="list-disc list-inside space-y-2 ml-4 mb-4">
                          {bulletGroup.map((bullet, bulletIndex) => {
                            const content = bullet.replace(/^-\s+/, '').trim()
                            return (
                              <li
                                key={bulletIndex}
                                className="text-gray-700"
                                dangerouslySetInnerHTML={{
                                  __html: content
                                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                    .replace(/\*(.*?)\*/g, '<em>$1</em>'),
                                }}
                              />
                            )
                          })}
                        </ul>
                      )
                      bulletGroup = []
                    }
                    
                    // Render regular paragraph
                    if (trimmed) {
                      elements.push(
                        <div
                          key={index}
                          className="text-gray-700 mb-4"
                          dangerouslySetInnerHTML={{
                            __html: item
                              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              .replace(/\*(.*?)\*/g, '<em>$1</em>')
                              .replace(/\n/g, '<br />'),
                          }}
                        />
                      )
                    }
                  }
                })
                
                // Render any remaining bullets
                if (bulletGroup.length > 0) {
                  elements.push(
                    <ul key="bullets-final" className="list-disc list-inside space-y-2 ml-4 mb-4">
                      {bulletGroup.map((bullet, bulletIndex) => {
                        const content = bullet.replace(/^-\s+/, '').trim()
                        return (
                          <li
                            key={bulletIndex}
                            className="text-gray-700"
                            dangerouslySetInnerHTML={{
                              __html: content
                                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                .replace(/\*(.*?)\*/g, '<em>$1</em>'),
                            }}
                          />
                        )
                      })}
                    </ul>
                  )
                }
                
                return elements
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Resources */}
      {lesson.resources && lesson.resources.length > 0 && (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-primary-600" />
            Resources & Downloads
          </h2>
          <div className="space-y-2">
            {lesson.resources.map((resource, index) => (
              <a
                key={index}
                href={resource}
                download
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <FileText className="w-5 h-5 text-gray-400 group-hover:text-primary-600" />
                <span className="text-gray-700 group-hover:text-primary-600">
                  {resource.split('/').pop() || `Resource ${index + 1}`}
                </span>
                <Download className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Lesson Notes */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Lesson Notes</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700">
            Take notes as you watch this lesson. Your notes will be saved automatically.
          </p>
          <textarea
            className="w-full mt-4 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            rows={8}
            placeholder="Start typing your notes here..."
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href={`/module/${module.id}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Module
        </Link>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            Mark as Complete
          </button>
        </div>
      </div>
    </div>
  )
}

