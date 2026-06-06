import Link from "next/link";

const serviceLinks = [
  { name: "Residue Intelligence", href: "/services/residue-intelligence" },
  { name: "Culture Transformation", href: "/services/culture-transformation" },
  { name: "Carbon Visibility Reporting", href: "/services/carbon-visibility-reporting" },
  { name: "Civic Intelligence & Stakeholder Mapping", href: "/services/civic-intelligence" },
  { name: "Public Opinion Research", href: "/services/public-opinion-research" },
  { name: "Infrastructure Sentiment Studies", href: "/services/infrastructure-sentiment" },
];

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-xl font-bold tracking-tight mb-3">RESIDUA</p>
            <p className="text-teal-100 text-sm leading-relaxed">
              What you leave behind tells the whole story.
            </p>
            <p className="text-teal-100/60 text-xs mt-4">residua.com</p>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold text-teal-100/50 uppercase tracking-widest mb-4">Company</p>
            <ul className="space-y-2.5">
              <li><Link href="/company" className="text-sm text-teal-100/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/company#mission" className="text-sm text-teal-100/80 hover:text-white transition-colors">Mission & Vision</Link></li>
              <li><Link href="/company#philosophy" className="text-sm text-teal-100/80 hover:text-white transition-colors">Philosophy</Link></li>
              <li><Link href="/company#positioning" className="text-sm text-teal-100/80 hover:text-white transition-colors">Positioning</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold text-teal-100/50 uppercase tracking-widest mb-4">Services</p>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-teal-100/80 hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <p className="text-xs font-semibold text-teal-100/50 uppercase tracking-widest mb-4">Resources</p>
            <ul className="space-y-2.5 mb-8">
              <li><Link href="/resources" className="text-sm text-teal-100/80 hover:text-white transition-colors">All Resources</Link></li>
              <li><Link href="/resources?type=case-study" className="text-sm text-teal-100/80 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/resources?type=testimonial" className="text-sm text-teal-100/80 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/resources?type=video" className="text-sm text-teal-100/80 hover:text-white transition-colors">Videos</Link></li>
            </ul>
            <p className="text-xs font-semibold text-teal-100/50 uppercase tracking-widest mb-4">Contact</p>
            <Link href="/contact" className="text-sm text-teal-100/80 hover:text-white transition-colors">Get in touch →</Link>
          </div>
        </div>

        <div className="border-t border-teal-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-teal-100/40">© {new Date().getFullYear()} Residua. All rights reserved.</p>
          <p className="text-xs text-teal-100/40">Visibility. Accountability. Action.</p>
        </div>
      </div>
    </footer>
  );
}
