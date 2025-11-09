import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, PlayCircle, Clock, Award, Users, BookOpen, GraduationCap, Download, Star, MessageCircle } from 'lucide-react'
import { getCourseData } from '@/data/courseData'
import ProgressTracker from '@/components/ProgressTracker'
import QuickStartCard from '@/components/QuickStartCard'
import Logo from '@/components/Logo'

export default function Home() {
  const courseData = getCourseData()
  const totalLessons = courseData.modules.reduce((acc, module) => acc + module.lessons.length, 0)
  const completedLessons = 0 // This would come from user progress tracking

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* AdGenius AI Software Access Card */}
      <div className="mb-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <PlayCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Access AdGenius AI Software</h2>
              <p className="text-primary-100">Start creating professional ad creatives in minutes</p>
            </div>
          </div>
          <p className="text-white/90 mb-6 max-w-2xl">
            Log in to the AdGenius AI platform to create stunning ad creatives using AI. This is the tool you'll use to deliver results for your clients.
          </p>
          <a
            href="https://app.adgeniusai.io/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
          >
            <PlayCircle className="w-5 h-5" />
            Launch AdGenius AI Software
            <span className="text-xs ml-2 px-2 py-1 bg-primary-100 text-primary-700 rounded">Opens in new tab</span>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <Logo variant="full" size="lg" showText={false} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          🎓 Welcome to <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">AdsGenius AI</span> Training
        </h1>
        <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
          Land Your First <span className="font-semibold text-primary-600">$500-$1,000 Client</span> in 7 Days & Build a <span className="font-semibold text-primary-600">$5K-10K/Month</span> Ad Creative Agency
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-lg border border-primary-200">
            <Clock className="w-4 h-4 text-primary-600" />
            <span className="font-medium">~8 hours of training</span>
          </div>
          <div className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-lg border border-primary-200">
            <BookOpen className="w-4 h-4 text-primary-600" />
            <span className="font-medium">{totalLessons} lessons</span>
          </div>
          <div className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-lg border border-primary-200">
            <Award className="w-4 h-4 text-primary-600" />
            <span className="font-medium">Certificate included</span>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <ProgressTracker completed={completedLessons} total={totalLessons} />

      {/* Quick Start Path */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <PlayCircle className="w-6 h-6 text-primary-600" />
          <span>🚀 Quick-Start Path <span className="text-primary-600">(Days 1-7)</span></span>
        </h2>
        <QuickStartCard />
      </div>

      {/* Course Modules */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary-600" />
          <span>📚 Complete <span className="text-primary-600">Course Modules</span></span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courseData.modules.map((module, index) => (
            <Link
              key={module.id}
              href={`/module/${module.id}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 p-6 border border-gray-200 hover:border-primary-300 hover:border-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center">
                    {index === 0 ? '0' : index}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
                      {module.title}
                    </h3>
                    <p className="text-sm text-gray-500">{module.duration}</p>
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-gray-300 group-hover:text-primary-500" />
              </div>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{module.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{module.lessons.length} lessons</span>
                <span className="text-primary-600 font-medium group-hover:underline">
                  Start Module →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Award className="w-6 h-6 text-primary-600" />
          <span>⚡ <span className="text-primary-600">Quick Access</span></span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/resources"
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 p-6 border-2 border-primary-200 hover:border-primary-400"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Templates & Resources</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">51 downloadable templates, forms, and tools ready to use</p>
            <span className="text-primary-600 font-medium text-sm group-hover:underline">
              Browse Resources →
            </span>
          </Link>

          <Link
            href="/case-studies"
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 p-6 border-2 border-primary-200 hover:border-primary-400"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Success Stories</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">See how students built $5K-10K/month agencies from scratch</p>
            <span className="text-primary-600 font-medium text-sm group-hover:underline">
              View Case Studies →
            </span>
          </Link>

          <Link
            href="/faq"
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 p-6 border-2 border-primary-200 hover:border-primary-400"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">FAQ</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">24 common questions answered about the course and building your agency</p>
            <span className="text-primary-600 font-medium text-sm group-hover:underline">
              View FAQ →
            </span>
          </Link>
        </div>
      </div>

      {/* Bonus Modules */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Award className="w-6 h-6 text-primary-600" />
          <span>🎁 <span className="text-primary-600">Bonus Modules</span></span>
        </h2>
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

      {/* Meet Your Instructor */}
      <div className="mb-12 bg-gradient-to-br from-primary-50 via-white to-primary-50/50 rounded-lg shadow-md border-2 border-primary-200 hover:border-primary-300 transition-all p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-primary-600" />
          <span>Meet Your <span className="text-primary-600">Instructor</span></span>
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-shrink-0">
            <Image
              src="/images/adrian-round.png"
              alt="Adrian - AdsGenius AI Course Instructor"
              width={200}
              height={200}
              className="rounded-full border-4 border-primary-200 shadow-lg"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Adrian</h3>
            <p className="text-lg text-primary-600 font-semibold mb-4">Course Creator & Instructor</p>
            <p className="text-gray-700 mb-4">
              Welcome to AdsGenius AI! I'm Adrian, and I've created this comprehensive course to help you 
              land your first $500-$1,000 client in just 7 days and build a $5K-10K/month ad creative agency.
            </p>
            <p className="text-gray-700">
              This course is action-first, theory-second. Every module has immediate implementation tasks. 
              No fluff, no theory without application. I'll guide you through the exact system that works, 
              from mastering AdGenius AI to closing your first client and scaling to $10K/month.
            </p>
          </div>
        </div>
      </div>

      {/* Community & Support */}
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-primary-600" />
            <h3 className="text-xl font-bold text-gray-900">Community Access</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Join our private Facebook group to connect with other students, share wins, and get feedback.
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-md hover:shadow-lg"
          >
            Join Community
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:border-primary-200 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-primary-600" />
            <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Weekly Zoom calls every Thursday at 2 PM EST. Bring your questions and get live coaching.
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-md hover:shadow-lg"
          >
            Join Office Hours
          </a>
        </div>
      </div>
    </div>
  )
}

