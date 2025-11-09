import Image from 'next/image'
import { Users, Facebook, Calendar, MessageSquare, Award } from 'lucide-react'

export default function CommunityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community & Support</h1>
        <p className="text-lg text-gray-600">
          Connect with other students, share wins, and get the help you need
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {/* Facebook Group */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <Facebook className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Private Facebook Group</h2>
              <p className="text-gray-600">Join our exclusive community</p>
            </div>
          </div>
          <p className="text-gray-700 mb-6">
            Connect with other AdGenius AI students, share your wins, ask questions, and get feedback on your work.
            Our community is supportive, active, and full of people just like you building their ad creative agencies.
          </p>
          <ul className="space-y-2 mb-6 text-gray-600">
            <li className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary-600" />
              <span>Share wins and celebrate milestones</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary-600" />
              <span>Ask questions and get answers</span>
            </li>
            <li className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary-600" />
              <span>Get portfolio feedback</span>
            </li>
            <li className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary-600" />
              <span>Network with other students</span>
            </li>
          </ul>
          <a
            href="#"
            className="inline-block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Join Facebook Group
          </a>
        </div>

        {/* Office Hours */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Office Hours</h2>
              <p className="text-gray-600">Weekly live Q&A calls</p>
            </div>
          </div>
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 mb-2">Thursdays</div>
              <div className="text-xl text-gray-700 mb-1">2:00 PM EST</div>
              <div className="text-sm text-gray-600">Weekly Zoom calls</div>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/adrian-round.png"
              alt="Adrian - Course Instructor"
              width={60}
              height={60}
              className="rounded-full border-2 border-primary-200"
            />
            <div>
              <p className="text-gray-700">
                Bring your questions, challenges, and wins to our weekly office hours. Get live coaching,
                portfolio reviews, and hot seat sessions with <strong>Adrian</strong> and other successful students.
              </p>
            </div>
          </div>
          <ul className="space-y-2 mb-6 text-gray-600">
            <li className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary-600" />
              <span>Live Q&A sessions</span>
            </li>
            <li className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary-600" />
              <span>Portfolio reviews</span>
            </li>
            <li className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary-600" />
              <span>Hot seat coaching</span>
            </li>
            <li className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary-600" />
              <span>Strategy sessions</span>
            </li>
          </ul>
          <a
            href="#"
            className="inline-block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            Join Office Hours
          </a>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg shadow-md p-8 border border-primary-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center">
                S
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Sarah</h3>
                <p className="text-sm text-gray-600">First client in 16 days</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "I had zero marketing experience, but following the 7-day blueprint, I landed my first $800 client
              in just 16 days. Now I have 5 clients and making $3,200/month!"
            </p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center">
                M
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Mike</h3>
                <p className="text-sm text-gray-600">$7K/month in 3 months</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "I niched down to restaurants and positioned myself as 'the restaurant ads guy.' Now I have 12 clients
              at $600-800/month each. The community support was incredible!"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

