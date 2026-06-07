import Link from "next/link";

const practiceAreas = [
  {
    label: "Environmental Intelligence",
    description:
      "We audit waste, build recycling cultures, and translate operational data into auditable carbon disclosures — Scope 1, 2, and 3.",
    services: [
      { name: "Residue Intelligence", href: "/services/residue-intelligence" },
      { name: "Culture Transformation", href: "/services/culture-transformation" },
      { name: "Carbon Visibility Reporting", href: "/services/carbon-visibility-reporting" },
    ],
    icon: "♻",
  },
  {
    label: "Civic Intelligence",
    description:
      "We map stakeholders, conduct deep-listening research, and develop the engagement strategy needed to secure and maintain community approval.",
    services: [
      { name: "Civic Intelligence & Stakeholder Mapping", href: "/services/civic-intelligence" },
      { name: "Public Opinion Research", href: "/services/public-opinion-research" },
      { name: "Infrastructure Sentiment Studies", href: "/services/infrastructure-sentiment" },
    ],
    icon: "👥",
  },
];

const principles = [
  {
    title: "Residue is the truth",
    body: "What an organization discards, emits, and leaves unresolved reveals more about its values than any report it publishes.",
  },
  {
    title: "Visibility before strategy",
    body: "You cannot build a recycling culture you haven't measured. You cannot protect a project from communities you haven't listened to.",
  },
  {
    title: "Data without ideology",
    body: "We surface facts, map trade-offs, and give decision-makers the honest picture — including the parts that are inconvenient.",
  },
];

const clients = [
  "Manufacturing & Logistics",
  "Commercial Real Estate",
  "Data Center Developers",
  "Municipal Governments",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-teal-900 text-white min-h-[88vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-teal-100/60 text-sm font-medium uppercase tracking-widest mb-6">
            Environmental & Civic Intelligence
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl mb-8">
            What you leave behind tells the whole story.
          </h1>
          <p className="text-teal-100/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            Residua helps organizations understand what they leave behind — the waste in their buildings,
            the carbon in their operations, and the unresolved tensions in the communities where they build.
            We turn that residue into clarity, and clarity into action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-white text-teal-900 font-semibold rounded hover:bg-teal-50 transition-colors"
            >
              Explore our services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-teal-100/30 text-white font-medium rounded hover:bg-teal-800 transition-colors"
            >
              Talk to us →
            </Link>
          </div>
        </div>
      </section>

      {/* Tagline strip */}
      <section className="bg-teal-700 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-8 items-center justify-between">
          {["Visibility.", "Accountability.", "Action."].map((t) => (
            <span key={t} className="text-white text-sm font-semibold tracking-widest uppercase">{t}</span>
          ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">What we do</p>
          <h2 className="text-4xl font-bold text-charcoal mb-4 max-w-xl">Two practice areas. One rare intersection.</h2>
          <p className="text-gray-600 max-w-2xl mb-16">
            Environmental operations and civic intelligence belong together — organizations that can measure their impact and earn community trust operate from a fundamentally stronger position.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {practiceAreas.map((area) => (
              <div key={area.label} className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col">
                <span className="text-3xl mb-4">{area.icon}</span>
                <h3 className="text-xl font-bold text-charcoal mb-3">{area.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">{area.description}</p>
                <ul className="space-y-3 border-t border-gray-100 pt-6">
                  {area.services.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="flex items-center justify-between text-sm text-teal-700 hover:text-teal-800 group"
                      >
                        <span>{s.name}</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">How we work</p>
          <h2 className="text-4xl font-bold text-charcoal mb-16 max-w-xl">Principles that define every engagement.</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {principles.map((p) => (
              <div key={p.title} className="border-t-2 border-teal-700 pt-6">
                <h3 className="text-lg font-bold text-charcoal mb-3">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <Link href="/company#philosophy" className="text-sm font-medium text-teal-700 hover:text-teal-800">
            Read all six principles →
          </Link>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-24 bg-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Clients</p>
          <h2 className="text-4xl font-bold text-charcoal mb-12 max-w-xl">Who we work with.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {clients.map((c) => (
              <div key={c} className="bg-white border border-gray-200 rounded-lg px-5 py-4">
                <p className="text-sm font-medium text-charcoal">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Our clients buy certainty.</h2>
          <p className="text-teal-100/80 text-lg max-w-2xl mx-auto mb-10">
            Certainty that their carbon numbers are real and defensible. Certainty that a project won't
            be derailed by opposition they didn't see coming. Residua is risk reduction, priced as consulting.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-teal-900 font-semibold rounded hover:bg-teal-50 transition-colors"
          >
            Start a conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
