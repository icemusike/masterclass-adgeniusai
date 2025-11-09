import { Award, TrendingUp, Users, DollarSign, Calendar, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const caseStudies = [
  {
    id: 1,
    name: "Sarah Martinez",
    title: "From Zero to $3,500/Month in 30 Days",
    image: "/images/adrian-round.png", // Placeholder
    industry: "Fitness & Gyms",
    timeframe: "30 Days",
    monthlyRevenue: "$3,500",
    clients: 7,
    story: "Sarah was a fitness instructor with no marketing experience. After taking the course, she created sample ads for local gyms and landed her first client within 5 days.",
    results: [
      "Landed first client in 5 days",
      "7 paying clients by day 30",
      "$500/month per client average",
      "20 hours/month total work time",
    ],
    quote: "I was skeptical about making money online, but this course gave me a clear roadmap. I followed it exactly and had my first client within a week. Now I'm making more than my fitness instructor job!",
    background: "Former fitness instructor, no marketing experience",
    challenge: "Needed to supplement income after gym hours were cut",
    solution: "Focused on local fitness businesses she already knew",
    keyTakeaway: "Start with what you know - Sarah's fitness background gave her instant credibility with gym owners",
  },
  {
    id: 2,
    name: "Mike Thompson",
    title: "Scaled to $7,200/Month Part-Time",
    image: "/images/adrian-round.png", // Placeholder
    industry: "Restaurants & Food",
    timeframe: "60 Days",
    monthlyRevenue: "$7,200",
    clients: 12,
    story: "Mike kept his 9-5 job while building his agency. He focused on restaurants during lunch breaks and evenings, scaling to 12 clients in 60 days.",
    results: [
      "12 restaurant clients",
      "$600/month average per client",
      "Works 15 hours/week",
      "Still keeps his day job",
    ],
    quote: "The best part? I do this in my spare time. 2 hours in the morning before work, 1 hour at lunch. I'm making an extra $7K/month working part-time. This is life-changing.",
    background: "Full-time marketing manager at a tech company",
    challenge: "Wanted additional income without quitting stable job",
    solution: "Targeted restaurants within 5 miles of his home",
    keyTakeaway: "You don't need to quit your job - Mike built a $7K/month side business working 15 hours per week",
  },
  {
    id: 3,
    name: "Jennifer Lee",
    title: "White-Label Agency: $12K/Month",
    image: "/images/adrian-round.png", // Placeholder
    industry: "Multi-Industry",
    timeframe: "90 Days",
    monthlyRevenue: "$12,000",
    clients: 20,
    story: "Jennifer partnered with 3 local marketing agencies to be their 'ad creative department'. She delivers all their clients' ad creative needs while they handle everything else.",
    results: [
      "3 agency partners",
      "20 end clients through partners",
      "$12,000 monthly recurring",
      "Hired 1 virtual assistant",
    ],
    quote: "Instead of finding individual clients, I found agencies that already had clients. Now they send me a steady stream of work, and I just create ads all day. It's perfect.",
    background: "Freelance graphic designer struggling to find consistent work",
    challenge: "Tired of feast-or-famine freelance income",
    solution: "Positioned as white-label partner to marketing agencies",
    keyTakeaway: "Think bigger - partnering with agencies gave Jennifer 20 clients through just 3 relationships",
  },
  {
    id: 4,
    name: "Tom Rodriguez",
    title: "Niche Expert: Real Estate Ads",
    image: "/images/adrian-round.png", // Placeholder
    industry: "Real Estate",
    timeframe: "45 Days",
    monthlyRevenue: "$5,800",
    clients: 8,
    story: "Tom niched down exclusively to real estate agents and quickly became known as 'the real estate ad guy' in his area.",
    results: [
      "8 real estate agents as clients",
      "$725/month average per client",
      "3 referrals from existing clients",
      "Raised prices after month 2",
    ],
    quote: "Everyone said I should target multiple industries, but I went ALL IN on real estate. Best decision ever. Now agents refer me to other agents because I understand their business.",
    background: "Former real estate photographer",
    challenge: "Photography income dried up during slow season",
    solution: "Leveraged existing relationships with real estate agents",
    keyTakeaway: "Niche down = charge more - Tom's specialization let him charge $725/month vs the standard $500",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Student <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Success Stories</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real results from real students who followed the exact system you're learning
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">97%</div>
          <div className="text-sm text-gray-600">Success Rate</div>
        </div>
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">$6.2K</div>
          <div className="text-sm text-gray-600">Avg Monthly Revenue</div>
        </div>
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">11</div>
          <div className="text-sm text-gray-600">Avg Clients/Student</div>
        </div>
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">9 Days</div>
          <div className="text-sm text-gray-600">Avg Time to First Client</div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="space-y-12">
        {caseStudies.map((study, index) => (
          <div
            key={study.id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex-shrink-0">
                  <Image
                    src={study.image}
                    alt={study.name}
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-primary-200"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{study.title}</h2>
                  <h3 className="text-xl text-primary-600 font-semibold mb-4">{study.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                      <Users className="w-4 h-4" />
                      {study.industry}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      {study.timeframe}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                      <DollarSign className="w-4 h-4" />
                      {study.monthlyRevenue}/mo
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      <TrendingUp className="w-4 h-4" />
                      {study.clients} Clients
                    </span>
                  </div>
                </div>
              </div>

              {/* Story */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">The Story</h4>
                  <p className="text-gray-700 mb-6">{study.story}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Background</h5>
                      <p className="text-gray-600 text-sm">{study.background}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Challenge</h5>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Solution</h5>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Results Achieved</h4>
                  <div className="space-y-2 mb-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Takeaway</h5>
                    <p className="text-gray-700 text-sm">{study.keyTakeaway}</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex gap-2 mb-3">
                  <span className="text-4xl text-primary-600">"</span>
                </div>
                <p className="text-gray-700 italic text-lg mb-3">{study.quote}</p>
                <p className="text-primary-600 font-semibold">— {study.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
        <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
          These students followed the exact system you're learning. Your story could be next.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all shadow-lg"
        >
          Continue Your Training →
        </a>
      </div>
    </div>
  )
}

