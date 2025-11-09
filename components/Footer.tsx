import { Mail, Facebook, Calendar } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white mt-16 border-t-4 border-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Logo variant="light" size="sm" showText={false} className="opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Complete training course to land your first $500-$1,000 client in 7 days and build a $5K-10K/month ad creative agency.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-400">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="mailto:support@adgenius.ai" className="flex items-center gap-2 hover:text-primary-400 transition-colors group">
                  <Mail className="w-4 h-4 group-hover:text-primary-400" />
                  support@adgenius.ai
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-primary-400 transition-colors group">
                  <Facebook className="w-4 h-4 group-hover:text-primary-400" />
                  Facebook Group
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-primary-400 transition-colors group">
                  <Calendar className="w-4 h-4 group-hover:text-primary-400" />
                  Office Hours: Thurs 2 PM EST
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-primary-400 transition-colors">Dashboard</a></li>
              <li><a href="/modules" className="hover:text-primary-400 transition-colors">All Modules</a></li>
              <li><a href="/resources" className="hover:text-primary-400 transition-colors">Resources</a></li>
              <li><a href="/community" className="hover:text-primary-400 transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} AdGenius AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

