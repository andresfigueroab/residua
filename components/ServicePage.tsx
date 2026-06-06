import Link from "next/link";
import JsonLd from "@/components/JsonLd";

const BASE_URL = "https://residua.vercel.app";

interface Step {
  title: string;
  body: string;
}

interface ServicePageProps {
  practiceArea: string;
  icon: string;
  name: string;
  tagline: string;
  intro: string;
  what: string;
  steps: Step[];
  tags: string[];
  relatedServices: { name: string; href: string }[];
}

export default function ServicePage({
  practiceArea,
  icon,
  name,
  tagline,
  intro,
  what,
  steps,
  tags,
  relatedServices,
}: ServicePageProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description: what,
    provider: { "@type": "Organization", name: "Residua", url: BASE_URL },
    serviceType: practiceArea,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      {/* Hero */}
      <section className="bg-teal-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/services" className="text-teal-100/50 text-sm hover:text-teal-100 transition-colors">Services</Link>
            <span className="text-teal-100/30 text-sm">/</span>
            <span className="text-teal-100/70 text-sm">{practiceArea}</span>
          </div>
          <span className="text-4xl block mb-4">{icon}</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">{name}</h1>
          <p className="text-teal-100/80 text-xl font-medium mb-8 italic">{tagline}</p>
          <p className="text-teal-100/70 text-lg max-w-2xl leading-relaxed">{intro}</p>
        </div>
      </section>

      {/* What it is */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">What it is</p>
            <h2 className="text-3xl font-bold text-charcoal mb-6">The engagement in depth.</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{what}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Deliverables</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="px-3 py-1.5 bg-teal-50 text-teal-700 text-sm rounded font-medium border border-teal-100">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we do it */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">How we do it</p>
          <h2 className="text-3xl font-bold text-charcoal mb-12">Our approach.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="bg-white border border-gray-200 rounded-xl p-6">
                <span className="text-teal-700 font-bold text-sm mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-charcoal mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Related services</p>
          <div className="flex flex-wrap gap-4 mb-12">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-charcoal hover:border-teal-700 hover:text-teal-700 transition-colors"
              >
                {s.name} →
              </Link>
            ))}
          </div>
          <div className="bg-teal-700 rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-1">Ready to get started?</h3>
              <p className="text-teal-100/80 text-sm">Tell us about your organization and we'll scope the right engagement.</p>
            </div>
            <Link href="/contact" className="shrink-0 px-6 py-3 bg-white text-teal-900 font-semibold rounded hover:bg-teal-50 transition-colors">
              Contact us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
