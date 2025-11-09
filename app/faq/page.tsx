'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How long does it take to complete the course?",
        a: "The core training is about 8 hours of video content. However, the real work is in implementation. Most students spend 10-15 hours in their first week doing the action steps, and land their first client within 7-10 days."
      },
      {
        q: "Do I need any prior experience in marketing or design?",
        a: "No! This course is designed for complete beginners. We start from zero and build up. The AdGenius AI tool handles all the design work, so you don't need design skills. We teach you the marketing and sales skills you need."
      },
      {
        q: "What equipment or software do I need?",
        a: "Just a computer (Mac or PC) and internet connection. You'll use the AdGenius AI software (included with your purchase) and free tools like Gmail for outreach. That's it. No expensive software or equipment needed."
      },
      {
        q: "Can I do this part-time while keeping my job?",
        a: "Absolutely! Many of our most successful students started part-time. You can build this working 10-15 hours per week. Once you have a few clients, you can decide if you want to go full-time."
      },
    ]
  },
  {
    category: "The Business Model",
    questions: [
      {
        q: "How much should I charge clients?",
        a: "We recommend starting at $500/month per client for 20 ads. This is the sweet spot - low enough that small businesses say yes, high enough that you make good money. As you gain experience, you can raise prices to $750-$1,000/month."
      },
      {
        q: "How many clients do I need to make $5K-10K/month?",
        a: "At $500/month per client, you need 10 clients to hit $5,000/month and 20 clients for $10,000/month. Most students can handle 10-15 clients working part-time (15-20 hours/week)."
      },
      {
        q: "How long does it take to service one client per month?",
        a: "About 2 hours per client per month. You'll spend: 15 minutes on the monthly brief call, 60-90 minutes creating the 20 ads, and 15-30 minutes on revisions. This is why the profit margins are so high."
      },
      {
        q: "What industries work best for this?",
        a: "Local service businesses are perfect: gyms, restaurants, real estate agents, chiropractors, dentists, salons, lawyers, etc. Any business that needs to attract local customers benefits from professional ad creatives."
      },
    ]
  },
  {
    category: "Finding Clients",
    questions: [
      {
        q: "How do I find my first client?",
        a: "The course includes the exact 7-day blueprint. Day 1-2: Create portfolio samples. Day 3: Build prospect list. Day 4: Create custom samples for prospects. Day 5-6: Send outreach emails. Day 7: Follow up and close. It works if you follow it."
      },
      {
        q: "What if I don't know any business owners?",
        a: "You don't need to! We teach you cold outreach strategies that work. You'll create custom sample ads for businesses, then email them saying 'I created these for you, want to see them?' This approach has a very high response rate."
      },
      {
        q: "Do I need to sell on the phone or in person?",
        a: "No face-to-face selling required. Most students close clients entirely over email and Zoom. We provide email templates and scripts. If you can write an email and have a normal conversation, you can do this."
      },
      {
        q: "How long does it take to land the first client?",
        a: "Most students land their first client within 7-10 days if they follow the system. Some get one in 3-5 days. The fastest was 2 days. It depends on how quickly you complete the action steps."
      },
    ]
  },
  {
    category: "Using AdGenius AI",
    questions: [
      {
        q: "How long does it take to create ads?",
        a: "About 2-3 minutes per ad once you know what you're doing. You'll spend 15-20 minutes creating all 20 ads for a client's monthly package. The AI does the heavy lifting - you just guide it."
      },
      {
        q: "Do the ads look professional?",
        a: "Yes! The AI generates ads that look like they were created by a professional designer. Clients can't tell (and don't care) that AI created them. They just care that the ads look great and get results."
      },
      {
        q: "What if a client doesn't like an ad?",
        a: "Revisions are easy. You can regenerate any ad in 2 minutes or make specific changes. We recommend including 2 rounds of revisions in your packages. In practice, most clients request minor tweaks on only 2-3 ads per batch."
      },
      {
        q: "Can I use this for different industries?",
        a: "Yes! AdGenius AI works for any industry. The tool has templates and styles for fitness, food, real estate, professional services, retail, and more. You can serve multiple industries or specialize in one."
      },
    ]
  },
  {
    category: "Service Delivery",
    questions: [
      {
        q: "How do I deliver ads to clients?",
        a: "Most students use Google Drive or Dropbox. Create a folder for each client, upload their monthly ads, and share the folder. Simple and professional. We provide templates and best practices."
      },
      {
        q: "Do I guarantee results for clients?",
        a: "NO! You're selling ad creatives (the images and text), not advertising results. Make this clear in your proposals and contracts. You deliver professional ad creatives - how they use them and what results they get is on them."
      },
      {
        q: "What if I get too many clients?",
        a: "Good problem! You have options: 1) Stop taking new clients. 2) Raise your prices. 3) Hire a VA to help with ad creation. 4) Build a team. Many students scale to 20-30 clients with 1-2 VAs."
      },
      {
        q: "How do I handle client communication?",
        a: "Keep it simple. Monthly brief form (we provide template), monthly delivery via shared folder, and a monthly check-in call (15 mins). That's it. Don't overcomplicate it."
      },
    ]
  },
  {
    category: "Support & Community",
    questions: [
      {
        q: "What support do I get?",
        a: "You get lifetime access to the course materials, updates, and resources. Plus access to our private community where you can ask questions, share wins, and connect with other students."
      },
      {
        q: "Are there live calls or coaching?",
        a: "Yes! We host weekly office hours every Thursday at 2 PM EST. Bring your questions, share your progress, and get live coaching. These calls are recorded if you can't attend live."
      },
      {
        q: "What if I get stuck?",
        a: "Post in the community! We (and other successful students) answer questions usually within a few hours. Plus you can bring questions to the weekly office hours for detailed help."
      },
      {
        q: "Is there an additional cost after I buy the course?",
        a: "No hidden costs. You get everything you need including AdGenius AI software access. The only optional expense is if you want to hire a VA later when you scale, but that's your choice."
      },
    ]
  }
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
            <HelpCircle className="w-8 h-8 text-primary-600" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Questions</span>
        </h1>
        <p className="text-xl text-gray-600">
          Everything you need to know about the course and building your agency
        </p>
      </div>

      {/* FAQ Categories */}
      <div className="space-y-8">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-primary-50 px-6 py-4 border-b border-primary-200">
              <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {category.questions.map((item, itemIndex) => {
                const id = `${categoryIndex}-${itemIndex}`
                const isOpen = openItems[id]

                return (
                  <div key={itemIndex}>
                    <button
                      onClick={() => toggleItem(id)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-semibold text-gray-900 flex-1">{item.q}</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-700 leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Still Have Questions */}
      <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
        <p className="text-primary-100 mb-6">
          Join our community or attend weekly office hours to get your questions answered
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/community"
            className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all"
          >
            Join Community
          </a>
          <a
            href="/support"
            className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-400 transition-all border-2 border-white"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

