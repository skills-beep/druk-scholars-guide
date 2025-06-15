
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold font-sora bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
                DrukScholar
              </h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed max-w-xs">
                Empowering Bhutanese students to discover their perfect educational path and build successful careers in the Land of the Thunder Dragon.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-slate-300 hover:text-orange-400 transition-colors text-sm">Browse Colleges</Link></li>
                <li><Link to="/scholarships" className="text-slate-300 hover:text-orange-400 transition-colors text-sm">Scholarships</Link></li>
                <li><Link to="/tools" className="text-slate-300 hover:text-orange-400 transition-colors text-sm">Compare Institutions</Link></li>
                <li><Link to="/about" className="text-slate-300 hover:text-orange-400 transition-colors text-sm">About Us</Link></li>
                <li><a href="#careers" className="text-slate-300 hover:text-orange-400 transition-colors text-sm">Career Guidance</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><Link to="/tools" className="text-slate-300 hover:text-orange-400 transition-colors text-sm">Admission Guide</Link></li>
                <li><Link to="/study-tips" className="text-slate-300 hover:text-orange-400 transition-colors text-sm">Study Tips</Link></li>
                <li><a href="#" className="text-slate-300 hover:text-orange-400 transition-colors text-sm">Financial Aid</a></li>
                <li><a href="#" className="text-slate-300 hover:text-orange-400 transition-colors text-sm">Student Blog</a></li>
                <li><a href="#" className="text-slate-300 hover:text-orange-400 transition-colors text-sm">FAQ</a></li>
              </ul>
            </div>

            {/* Contact Info & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-orange-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Thimphu, Bhutan</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-orange-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">+975-2-123456</span>
                </div>
                <div className="flex items-start">
                  <Mail className="h-4 w-4 text-orange-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">info@drukscholar.bt</span>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-3">Newsletter</h5>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-sm text-white placeholder-slate-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-md hover:from-yellow-600 hover:to-orange-600 transition-all text-sm font-medium whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} DrukScholar. All rights reserved. Made with ❤️ for Bhutanese students.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
