import { Mail, HelpCircle, MessageSquare, BookOpen, Clock } from 'lucide-react'

const faqs = [
  {
    question: "I'm not getting any responses to my outreach",
    answer: "Check your subject lines - they might be too generic. Make sure you're personalizing each email, including custom samples, and reaching out to businesses actively running ads. Try testing different subject lines and use a warm-up service for your email.",
  },
  {
    question: "Clients are asking for revisions beyond scope",
    answer: "Set clear revision policy upfront: '2 rounds of revisions included.' After that, charge $50 per additional revision or offer unlimited revisions for +$100/month. Be firm but professional.",
  },
  {
    question: "A client isn't paying on time",
    answer: "Set up automated billing (Stripe auto-charge) to prevent this. If manual, send a reminder 3 days before due date. If late, pause service until paid with a professional message.",
  },
  {
    question: "Client wants to cancel",
    answer: "Ask why they want to cancel. Common reasons: budget, not seeing results, found someone cheaper. Offer solutions like lower tier, payment plan, discount, or pause instead of cancel. Exit gracefully and ask for a referral.",
  },
  {
    question: "I'm stuck at 5 clients and can't scale",
    answer: "Block 5 hours/week specifically for new client acquisition. Try different outreach methods (email, phone, LinkedIn, referrals). Get testimonials from happy clients and feature them prominently.",
  },
]

export default function SupportPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Support & Help</h1>
        <p className="text-lg text-gray-600">
          Get the help you need to succeed with AdGenius AI
        </p>
      </div>

      {/* Contact Options */}
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 text-center">
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
          <p className="text-gray-600 mb-4">
            Get help via email. We respond within 24-48 hours.
          </p>
          <a
            href="mailto:support@adgenius.ai"
            className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            support@adgenius.ai
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 text-center">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Community Forum</h3>
          <p className="text-gray-600 mb-4">
            Ask questions in our Facebook group and get answers from the community.
          </p>
          <a
            href="/community"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Visit Community
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Office Hours</h3>
          <p className="text-gray-600 mb-4">
            Join our weekly Zoom calls every Thursday at 2 PM EST for live help.
          </p>
          <a
            href="/community"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Join Office Hours
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary-600" />
                {faq.question}
              </h3>
              <p className="text-gray-700 ml-7">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-8 bg-primary-50 border border-primary-200 rounded-lg p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary-600" />
          Additional Resources
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <a href="/resources" className="text-primary-600 hover:text-primary-700 hover:underline">
            → Download all templates and resources
          </a>
          <a href="/bonus/bonus-3" className="text-primary-600 hover:text-primary-700 hover:underline">
            → View complete troubleshooting guide
          </a>
          <a href="/modules" className="text-primary-600 hover:text-primary-700 hover:underline">
            → Review course modules
          </a>
          <a href="/community" className="text-primary-600 hover:text-primary-700 hover:underline">
            → Join community discussions
          </a>
        </div>
      </div>
    </div>
  )
}

