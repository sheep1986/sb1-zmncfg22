import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = [
  { name: 'Services', path: '/services', description: 'Explore our range of AI-powered solutions' },
  { name: 'About', path: '/about', description: 'Learn about our mission and team' },
  { name: 'Contact', path: '/contact', description: 'Get in touch with our experts' },
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/ArtificialAds', color: '#1DA1F2' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/artificial-meda/', color: '#0A66C2' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/ArtificialMediaMarketing', color: '#1877F2' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/ArtificialMediaMarketing/', color: '#E4405F' },
  { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@ArtificialMedia', color: '#FF0000' },
];

const contactInfo = [
  { icon: Mail, text: 'info@artificialmedia.co.uk', href: 'mailto:info@artificialmedia.co.uk' },
  { icon: Phone, text: '+44 20 4587 6392', href: 'tel:+442045876392' },
  { icon: MapPin, text: 'London, UK', href: 'https://goo.gl/maps/London' },
];

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="block mb-6">
              <img 
                src="https://i.ibb.co/VHVJKmT/am-web-logo-white.png" 
                alt="ArtificialMedia Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Revolutionising digital presence through AI-powered marketing solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FF0099] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  onHoverStart={() => setHoveredLink(index)}
                  onHoverEnd={() => setHoveredLink(null)}
                >
                  <Link
                    to={link.path}
                    className="group flex items-center text-gray-400 hover:text-[#FF0099] transition-colors"
                  >
                    <ChevronRight className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                      hoveredLink === index ? 'translate-x-1' : ''
                    }`} />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="flex items-center text-gray-400 hover:text-[#FF0099] transition-colors"
                  >
                    <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Portal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Client Portal</h3>
            <p className="text-gray-400 mb-6">
              Access your dashboard, analytics, and campaign reports through our client portal.
            </p>
            <a
              href="https://app.gohighlevel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[#FF0099] text-white 
                       font-medium hover:bg-[#FF0099]/90 transition-all duration-300 group"
            >
              Access Portal
              <ExternalLink className="ml-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ArtificialMedia. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-[#FF0099] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#FF0099] text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}