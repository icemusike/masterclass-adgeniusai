import { Download, FileText, Mail, FileSpreadsheet, Award, Video, Image as ImageIcon, Briefcase, Users } from 'lucide-react'

const resources = [
  {
    category: 'Email Templates',
    icon: Mail,
    items: [
      { name: '10 Cold Outreach Email Templates', type: 'PDF', size: '45 KB', description: 'Proven templates for first contact with prospects' },
      { name: '5 Follow-Up Email Templates', type: 'PDF', size: '32 KB', description: 'Keep prospects engaged without being pushy' },
      { name: '3 Proposal Email Templates', type: 'PDF', size: '28 KB', description: 'Send proposals that get signed' },
      { name: 'Onboarding Email Sequence', type: 'PDF', size: '38 KB', description: '7-email sequence for new clients' },
      { name: 'Monthly Check-In Templates', type: 'PDF', size: '25 KB', description: 'Maintain client relationships' },
      { name: 'Testimonial Request Templates', type: 'PDF', size: '22 KB', description: 'Get powerful testimonials from happy clients' },
      { name: 'Referral Request Templates', type: 'PDF', size: '20 KB', description: 'Turn clients into referral sources' },
    ],
  },
  {
    category: 'Client Forms & Questionnaires',
    icon: FileText,
    items: [
      { name: 'Discovery Call Questionnaire', type: 'PDF', size: '52 KB', description: 'Learn everything about prospect\'s business' },
      { name: 'Monthly Brief Form', type: 'PDF', size: '48 KB', description: 'Gather content for each month\'s ads' },
      { name: 'Client Feedback Form', type: 'PDF', size: '35 KB', description: 'Get structured feedback on ad creatives' },
      { name: 'Brand Guidelines Form', type: 'PDF', size: '42 KB', description: 'Document client brand preferences' },
      { name: 'Target Audience Worksheet', type: 'PDF', size: '38 KB', description: 'Define ideal customer profiles' },
    ],
  },
  {
    category: 'Contracts & Agreements',
    icon: Briefcase,
    items: [
      { name: 'Standard Service Agreement Template', type: 'DOCX', size: '68 KB', description: 'Complete service agreement with terms' },
      { name: 'Non-Disclosure Agreement (NDA)', type: 'DOCX', size: '42 KB', description: 'Protect confidential information' },
      { name: 'Proposal Template', type: 'DOCX', size: '55 KB', description: 'Professional proposal format' },
      { name: 'Statement of Work (SOW)', type: 'DOCX', size: '48 KB', description: 'Detailed project scope document' },
      { name: 'Invoice Template', type: 'XLSX', size: '38 KB', description: 'Professional invoice format' },
      { name: 'Payment Terms & Conditions', type: 'PDF', size: '32 KB', description: 'Standard payment policies' },
    ],
  },
  {
    category: 'Tools & Calculators',
    icon: FileSpreadsheet,
    items: [
      { name: 'Pricing Calculator', type: 'XLSX', size: '125 KB', description: 'Calculate your package pricing' },
      { name: 'Prospect Tracking Spreadsheet', type: 'XLSX', size: '98 KB', description: 'Manage your sales pipeline' },
      { name: 'Client Onboarding Checklist', type: 'PDF', size: '45 KB', description: '15-point checklist for new clients' },
      { name: 'Monthly Revenue Tracker', type: 'XLSX', size: '88 KB', description: 'Track income and growth' },
      { name: 'ROI Calculator for Clients', type: 'XLSX', size: '72 KB', description: 'Show clients their potential return' },
      { name: 'Time Tracking Template', type: 'XLSX', size: '55 KB', description: 'Track time spent per client' },
    ],
  },
  {
    category: 'Portfolio Templates',
    icon: ImageIcon,
    items: [
      { name: 'Sample Portfolio Presentation (Gyms)', type: 'PDF', size: '2.3 MB', description: '20 sample ads for fitness businesses' },
      { name: 'Sample Portfolio Presentation (Restaurants)', type: 'PDF', size: '2.1 MB', description: '20 sample ads for food businesses' },
      { name: 'Sample Portfolio Presentation (Real Estate)', type: 'PDF', size: '2.5 MB', description: '20 sample ads for real estate agents' },
      { name: 'Sample Portfolio Presentation (Dentists)', type: 'PDF', size: '2.2 MB', description: '20 sample ads for dental practices' },
      { name: 'Sample Portfolio Presentation (Salons)', type: 'PDF', size: '2.0 MB', description: '20 sample ads for hair salons & spas' },
      { name: 'Before/After Case Study Template', type: 'PDF', size: '1.8 MB', description: 'Showcase client results' },
      { name: 'Portfolio Website Template', type: 'ZIP', size: '3.5 MB', description: 'One-page portfolio site code' },
    ],
  },
  {
    category: 'Prospecting Lists',
    icon: Users,
    items: [
      { name: 'Top 50 Business Niches for Ad Creatives', type: 'PDF', size: '85 KB', description: 'Best industries to target' },
      { name: '100 Cold Outreach Prospects Template', type: 'XLSX', size: '92 KB', description: 'Spreadsheet to organize prospects' },
      { name: 'Local Business Research Checklist', type: 'PDF', size: '38 KB', description: 'Find prospects in your area' },
      { name: 'LinkedIn Prospecting Guide', type: 'PDF', size: '65 KB', description: 'Find decision-makers on LinkedIn' },
    ],
  },
  {
    category: 'Scripts & Call Guides',
    icon: FileText,
    items: [
      { name: 'Discovery Call Script', type: 'PDF', size: '48 KB', description: 'Complete call flow with questions' },
      { name: 'Objection Handling Guide', type: 'PDF', size: '52 KB', description: 'Responses to common objections' },
      { name: 'Closing Scripts', type: 'PDF', size: '38 KB', description: 'Ask for the sale confidently' },
      { name: 'Monthly Check-In Call Agenda', type: 'PDF', size: '28 KB', description: 'Structure for client calls' },
      { name: 'Pricing Presentation Guide', type: 'PDF', size: '42 KB', description: 'Present your packages effectively' },
    ],
  },
  {
    category: 'Video Resources & Case Studies',
    icon: Video,
    items: [
      { name: 'Case Study: Sarah\'s First 30 Days', type: 'Video', size: '125 MB', description: 'Zero to $3.5K/month timeline' },
      { name: 'Case Study: Mike\'s $7K/Month Part-Time', type: 'Video', size: '145 MB', description: 'Building while keeping day job' },
      { name: 'Case Study: Jennifer\'s White-Label Business', type: 'Video', size: '98 MB', description: 'Partnering with agencies' },
      { name: 'Case Study: Tom\'s Real Estate Niche', type: 'Video', size: '112 MB', description: 'Specializing in one industry' },
      { name: 'Live Portfolio Review Session', type: 'Video', size: '185 MB', description: 'Reviewing student portfolios' },
      { name: 'Live Discovery Call Demo', type: 'Video', size: '95 MB', description: 'Watch a real discovery call' },
    ],
  },
  {
    category: 'Bonus: Done-For-You Assets',
    icon: Award,
    items: [
      { name: '100 Pre-Made Sample Ads (All Industries)', type: 'ZIP', size: '45 MB', description: 'Ready-to-use portfolio samples' },
      { name: 'Email Signature Template', type: 'HTML', size: '15 KB', description: 'Professional email signature' },
      { name: 'Social Media Bio Templates', type: 'PDF', size: '28 KB', description: 'LinkedIn, Twitter, Instagram bios' },
      { name: 'Business Card Template', type: 'PSD', size: '12 MB', description: 'Editable business card design' },
      { name: 'Zoom Background Branded', type: 'PNG', size: '3.2 MB', description: 'Professional branded background' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resources & Downloads</h1>
        <p className="text-lg text-gray-600">
          All templates, forms, and resources you need to build your ad creative agency
        </p>
      </div>

      <div className="space-y-8">
        {resources.map((category, categoryIndex) => {
          const Icon = category.icon
          return (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-primary-600" />
                  <h2 className="text-xl font-bold text-gray-900">{category.category}</h2>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {category.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href="#"
                    className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <Download className="w-5 h-5 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                          <span>{item.type}</span>
                          <span>•</span>
                          <span>{item.size}</span>
                        </div>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Download All Button */}
      <div className="mt-8 bg-primary-50 border border-primary-200 rounded-lg p-6 text-center">
        <h3 className="font-bold text-gray-900 mb-2">Need Everything?</h3>
        <p className="text-gray-600 mb-4">
          Download all resources as a single ZIP file for easy access
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Download className="w-5 h-5" />
          Download All Resources (ZIP)
        </button>
      </div>
    </div>
  )
}

