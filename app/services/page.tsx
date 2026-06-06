import Link from "next/link";

const envServices = [
  {
    icon: "♻",
    name: "Residue Intelligence",
    href: "/services/residue-intelligence",
    tags: ["waste audit", "carbon impact", "tracking dashboards"],
    summary:
      "We audit and map the full waste and recycling profile of a workplace — what is generated, what is actually recycled, and the real carbon cost of the gap between the two.",
  },
  {
    icon: "🏭",
    name: "Culture Transformation",
    href: "/services/culture-transformation",
    tags: ["habit mapping", "change programs", "behavioral design", "emissions reporting"],
    summary:
      "We design and embed recycling strategies inside factories and office buildings — habit mapping, behavioral change programs, staff engagement, and ongoing measurement.",
  },
  {
    icon: "🌿",
    name: "Carbon Visibility Reporting",
    href: "/services/carbon-visibility-reporting",
    tags: ["scope 1 / 2 / 3", "ESG reporting", "audit-ready", "investor disclosure"],
    summary:
      "We translate raw operational and supply chain data into clear, auditable carbon disclosures ready for regulatory filing, investor disclosure, and ESG benchmarking.",
  },
];

const civicServices = [
  {
    icon: "👥",
    name: "Civic Intelligence & Stakeholder Mapping",
    href: "/services/civic-intelligence",
    tags: ["stakeholder mapping", "risk assessment", "social license", "community analysis"],
    summary:
      "We identify and map the full landscape of stakeholders that can accelerate or block an infrastructure project before they become obstacles.",
  },
  {
    icon: "📊",
    name: "Public Opinion Research",
    href: "/services/public-opinion-research",
    tags: ["public referendums", "community surveys", "trade-off analysis", "consensus building"],
    summary:
      "We conduct referendums, deep-listening studies, and quantitative opinion research to understand what communities fear, what they value, and what conditions lead to a yes.",
  },
  {
    icon: "🖥",
    name: "Infrastructure Sentiment Studies",
    href: "/services/infrastructure-sentiment",
    tags: ["datacenter siting", "energy projects", "approval strategy", "opposition modeling"],
    summary:
      "Specialized research for large-scale infrastructure projects — data centers, energy facilities, logistics hubs. We map public concerns with precision and build the engagement strategy.",
  },
];

function ServiceCard({ service }: { service: typeof envServices[0] }) {
  return (
    <Link href={service.href} className="group bg-white border border-gray-200 rounded-xl p-6 flex flex-col hover:border-teal-700 hover:shadow-sm transition-all">
      <span className="text-2xl mb-4">{service.icon}</span>
      <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-teal-700 transition-colors">{service.name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{service.summary}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {service.tags.map((t) => (
          <span key={t} className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded font-medium">{t}</span>
        ))}
      </div>
      <span className="text-sm font-medium text-teal-700 group-hover:translate-x-1 transition-transform inline-block">
        Learn more →
      </span>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-teal-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-teal-100/60 text-sm font-medium uppercase tracking-widest mb-6">Services</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl mb-8">
            Six integrated services. Two practice areas.
          </h1>
          <p className="text-teal-100/80 text-lg max-w-2xl leading-relaxed">
            Every service is operational, not aspirational. We get our hands dirty and bring back data,
            not frameworks. Our deliverables change how organizations work.
          </p>
        </div>
      </section>

      {/* Environmental Intelligence */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">♻</span>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Practice Area 1</p>
          </div>
          <h2 className="text-3xl font-bold text-charcoal mb-4">Environmental Intelligence</h2>
          <p className="text-gray-600 max-w-2xl mb-12">
            Measure the gap. Close it. We audit waste streams, build lasting recycling cultures, and translate
            operational data into carbon disclosures your auditors and investors can trust.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {envServices.map((s) => <ServiceCard key={s.href} service={s} />)}
          </div>
        </div>
      </section>

      {/* Civic Intelligence */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">👥</span>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Practice Area 2</p>
          </div>
          <h2 className="text-3xl font-bold text-charcoal mb-4">Civic Intelligence</h2>
          <p className="text-gray-600 max-w-2xl mb-12">
            Hear the community before it stops you. We map stakeholders, conduct deep-listening research, and
            develop the engagement strategy needed to secure and maintain community approval.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {civicServices.map((s) => <ServiceCard key={s.href} service={s} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure which service fits?</h2>
          <p className="text-teal-100/80 mb-8 max-w-xl mx-auto">
            Tell us about your organization and we'll map the right engagement to your specific residue.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 bg-white text-teal-900 font-semibold rounded hover:bg-teal-50 transition-colors">
            Talk to us →
          </Link>
        </div>
      </section>
    </>
  );
}
