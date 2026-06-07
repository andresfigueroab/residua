"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { name: "Residue Intelligence", href: "/services/residue-intelligence" },
  { name: "Culture Transformation", href: "/services/culture-transformation" },
  { name: "Carbon Visibility Reporting", href: "/services/carbon-visibility-reporting" },
  { name: "Civic Intelligence & Stakeholder Mapping", href: "/services/civic-intelligence" },
  { name: "Public Opinion Research", href: "/services/public-opinion-research" },
  { name: "Infrastructure Sentiment Studies", href: "/services/infrastructure-sentiment" },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-teal-700 tracking-tight">RESIDUA</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/company" className="text-sm text-charcoal hover:text-teal-700 transition-colors">
            Company
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 text-sm text-charcoal hover:text-teal-700 transition-colors"
            >
              Services
              <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2">
                <div className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
                <div className="p-2">
                  <p className="px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-widest">Environmental Intelligence</p>
                  {services.slice(0, 3).map((s) => (
                    <Link key={s.href} href={s.href} className="block px-3 py-2 text-sm text-charcoal hover:bg-teal-50 hover:text-teal-700 rounded transition-colors">
                      {s.name}
                    </Link>
                  ))}
                  <div className="my-2 border-t border-gray-100" />
                  <p className="px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-widest">Civic Intelligence</p>
                  {services.slice(3).map((s) => (
                    <Link key={s.href} href={s.href} className="block px-3 py-2 text-sm text-charcoal hover:bg-teal-50 hover:text-teal-700 rounded transition-colors">
                      {s.name}
                    </Link>
                  ))}
                  <div className="my-2 border-t border-gray-100" />
                  <Link href="/services" className="block px-3 py-2 text-sm font-medium text-teal-700 hover:bg-teal-50 rounded transition-colors">
                    View all services →
                  </Link>
                </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/resources" className="text-sm text-charcoal hover:text-teal-700 transition-colors">
            Resources
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium bg-teal-700 text-white rounded hover:bg-teal-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-4">
            <Link href="/company" className="block text-sm text-charcoal hover:text-teal-700" onClick={() => setMobileOpen(false)}>Company</Link>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Services</p>
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="block py-1.5 text-sm text-charcoal hover:text-teal-700" onClick={() => setMobileOpen(false)}>
                  {s.name}
                </Link>
              ))}
            </div>
            <Link href="/resources" className="block text-sm text-charcoal hover:text-teal-700" onClick={() => setMobileOpen(false)}>Resources</Link>
            <Link href="/contact" className="block text-sm font-medium text-teal-700" onClick={() => setMobileOpen(false)}>Contact Us →</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
