
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { inDemandJobs } from '@/data/colleges';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* In-Demand Jobs Section */}
      <div className="bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-sora text-white mb-4">
              In-Demand Careers in Bhutan
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Explore high-demand career opportunities across various sectors in Bhutan's growing economy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inDemandJobs.map((category, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-colors">
                <h3 className="text-xl font-semibold text-yellow-300 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.jobs.map((job, jobIndex) => (
                    <li key={jobIndex} className="text-slate-300 flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm">{job}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold font-sora text-yellow-300 mb-4">EduBhutan</h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Empowering Bhutanese students to discover their perfect educational path and build successful careers in the Land of the Thunder Dragon.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-yellow-300 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-yellow-300 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-yellow-300 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-yellow-300 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#colleges" className="text-slate-300 hover:text-yellow-300 transition-colors text-sm">Browse Colleges</a></li>
                <li><a href="#scholarships" className="text-slate-300 hover:text-yellow-300 transition-colors text-sm">Scholarships</a></li>
                <li><a href="#compare" className="text-slate-300 hover:text-yellow-300 transition-colors text-sm">Compare Institutions</a></li>
                <li><a href="#about" className="text-slate-300 hover:text-yellow-300 transition-colors text-sm">About Us</a></li>
                <li><a href="#careers" className="text-slate-300 hover:text-yellow-300 transition-colors text-sm">Career Guidance</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors text-sm">Admission Guide</a></li>
                <li><a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors text-sm">Study Tips</a></li>
                <li><a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors text-sm">Financial Aid</a></li>
                <li><a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors text-sm">Student Blog</a></li>
                <li><a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors text-sm">FAQ</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-yellow-300 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Thimphu, Bhutan</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-yellow-300 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">+975-2-123456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-yellow-300 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">info@edubhutan.bt</span>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold text-white mb-2">Newsletter</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-l-md text-sm text-white placeholder-slate-400 focus:outline-none focus:border-yellow-300"
                  />
                  <button className="px-4 py-2 bg-yellow-500 text-slate-900 rounded-r-md hover:bg-yellow-400 transition-colors text-sm font-medium">
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} EduBhutan. All rights reserved. Made with ❤️ for Bhutanese students.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-yellow-300 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-yellow-300 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-yellow-300 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
