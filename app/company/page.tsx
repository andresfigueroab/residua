import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "Company",
  description:
    "Residua exists at the intersection of environmental intelligence and civic trust. Learn about our mission, vision, six operating principles, and how we position ourselves in the market.",
  path: "/company",
});

const philosophy = [
  {
    title: "Residue is the truth",
    body: "What an organization discards, emits, and leaves unresolved in a community reveals more about its values than any report it publishes. We start by looking honestly at the residue — even when the view is uncomfortable.",
  },
  {
    title: "Visibility before strategy",
    body: "You cannot build a recycling culture you haven't measured. You cannot protect a project from communities you haven't listened to. We establish what is real before we recommend what to do.",
  },
  {
    title: "Data without ideology",
    body: "We are not advocates for any particular outcome. We surface facts, map trade-offs, and give decision-makers the honest picture — including the parts that are inconvenient. Our clients pay for accuracy, not for confirmation.",
  },
  {
    title: "Systems, not symptoms",
    body: "Waste mismanagement and community opposition are both symptoms of broken feedback loops. A rushed cleanup and a rushed community meeting fix neither. Our work addresses the structural conditions that produce the problem.",
  },
  {
    title: "Trust is infrastructure",
    body: "A data center stalled by a community referendum costs more than any consulting engagement. Social license is a hard asset — it protects timelines, reduces regulatory friction, and compounds over time. We help organizations build and protect it deliberately.",
  },
  {
    title: "Leave less behind",
    body: "Our name is our standard. Every engagement ends with a client that produces less waste, emits less carbon, and leaves less unresolved friction in the communities it operates in. We measure our own residue.",
  },
];

const notList = [
  {
    label: "Not a cleaning company.",
    body: "We use the language and methods of waste management to produce strategic intelligence that changes how organizations operate. The mop is a metaphor.",
  },
  {
    label: "Not a checkbox consultant.",
    body: "We get our hands dirty — on factory floors, in town halls, in community meetings — and we bring back data, not frameworks. Our deliverables are operational, not aspirational.",
  },
  {
    label: "Not a PR firm.",
    body: "When we conduct public opinion research, we report what communities actually think, not the version most favorable to our client. The value is in the honesty.",
  },
];

const faqs = [
  {
    q: "What is Residua?",
    a: "Residua is an environmental and civic intelligence consulting firm. We help organizations measure and manage what they leave behind — waste, carbon emissions, and unresolved community tension. We operate across two practice areas: Environmental Intelligence and Civic Intelligence.",
  },
  {
    q: "What is the difference between Environmental Intelligence and Civic Intelligence?",
    a: "Environmental Intelligence focuses on physical residue: we audit waste streams, embed recycling cultures, and produce auditable Scope 1, 2, and 3 carbon disclosures. Civic Intelligence focuses on social residue: we map stakeholders, conduct public opinion research, and develop the community engagement strategies that protect infrastructure projects from opposition.",
  },
  {
    q: "Who are Residua's typical clients?",
    a: "Residua serves manufacturing and logistics companies, commercial real estate firms, data center developers, and municipal governments. Any organization that generates significant waste, emits carbon, or develops infrastructure in communities where trust must be earned.",
  },
  {
    q: "What does a Residue Intelligence engagement produce?",
    a: "A Residue Intelligence audit produces a facility-level breakdown of waste streams, recycling rates, contamination points, and the carbon cost of the gap between what could be recycled and what actually is. Deliverables include a tracking dashboard so the client can monitor progress without re-engaging us for every measurement.",
  },
  {
    q: "How does Residua's carbon reporting differ from a traditional consultant?",
    a: "Our deliverables are operational, not aspirational. We collect source data from facility floors, apply current GHG Protocol emissions factors, and produce disclosures that are traceable, methodology-documented, and defensible under third-party audit — not summary frameworks or narrative reports.",
  },
  {
    q: "What does an Infrastructure Sentiment Study involve?",
    a: "We conduct structured interviews and community research before a project is announced, map the specific stakeholders whose posture shapes the broader community response, model likely opposition scenarios, and develop the engagement strategy needed to secure and maintain community approval through the permitting process.",
  },
];

const clients = [
  { segment: "Manufacturing & Logistics", need: "Waste audits, recycling culture, Scope 1/2 emissions reporting" },
  { segment: "Commercial Real Estate", need: "Building-level residue intelligence, tenant sustainability programs" },
  { segment: "Data Center Developers", need: "Infrastructure sentiment studies, community approval strategy" },
  { segment: "Municipal Governments", need: "Waste strategy, public opinion research, civic engagement design" },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-teal-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-teal-100/60 text-sm font-medium uppercase tracking-widest mb-6">Company</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl mb-8">
            We make what organizations leave behind visible.
          </h1>
          <p className="text-teal-100/80 text-lg max-w-2xl leading-relaxed">
            Residua exists at the intersection of environmental intelligence and civic trust. We believe the
            health of a company, a project, and a community can all be read in their residue.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Mission</p>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Why we exist.</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We make what organizations leave behind visible, measurable, and manageable — from the waste
              in their buildings to the carbon in their supply chains to the unheard voices in their communities.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Vision</p>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Where we're headed.</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              A world where no organization can claim ignorance of its impact. Where carbon is counted before
              it escapes, communities are heard before they resist, and sustainability is a practice rather than
              a report. Residua is the infrastructure that makes that honesty possible.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Philosophy</p>
          <h2 className="text-4xl font-bold text-charcoal mb-4">Six principles define how we work.</h2>
          <p className="text-gray-600 max-w-2xl mb-16">
            These apply when trade-offs are hard and decisions aren't obvious.
          </p>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {philosophy.map((p, i) => (
              <div key={p.title} className="flex gap-6">
                <span className="text-teal-700 font-bold text-sm mt-1 shrink-0 w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section id="positioning" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Positioning</p>
          <h2 className="text-4xl font-bold text-charcoal mb-4 max-w-2xl">What we are — and what we are not.</h2>
          <p className="text-gray-600 max-w-2xl mb-16">
            We sit at a genuinely rare intersection. Environmental operations + civic intelligence is a combination
            no competitor has yet organized around.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {notList.map((n) => (
              <div key={n.label} className="bg-gray-100 rounded-xl p-6">
                <p className="text-sm font-bold text-charcoal mb-3 line-through decoration-teal-700 decoration-2">{n.label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{n.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-teal-900 text-white rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">We are risk reduction, priced as consulting.</h3>
            <p className="text-teal-100/80 leading-relaxed max-w-3xl">
              Our clients buy certainty. In sustainability: certainty that their carbon numbers are real and
              defensible. In civic work: certainty that a project will not be derailed by opposition they didn't
              see coming. Organizations that can measure their environmental impact and secure genuine community trust operate from a position that is structurally more durable — and that compounds over time.
            </p>
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-24 bg-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Who we serve</p>
          <h2 className="text-4xl font-bold text-charcoal mb-12">Target clients.</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-4 text-xs font-semibold text-gray-400 uppercase tracking-widest pr-8">Segment</th>
                  <th className="pb-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">Primary need</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((c, i) => (
                  <tr key={c.segment} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : ""}`}>
                    <td className="py-4 pr-8 text-sm font-medium text-charcoal w-64">{c.segment}</td>
                    <td className="py-4 text-sm text-gray-600">{c.need}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ — GEO optimized */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-4xl font-bold text-charcoal mb-12">Common questions.</h2>
          <div className="divide-y divide-gray-100 max-w-3xl">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-charcoal text-base list-none">
                  {f.q}
                  <span className="text-teal-700 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }} />

      {/* CTA */}
      <section className="py-20 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Ready to look honestly at your residue?</h2>
            <p className="text-teal-100/80">We'll tell you what we find — even the inconvenient parts.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-8 py-4 bg-white text-teal-900 font-semibold rounded hover:bg-teal-50 transition-colors"
          >
            Contact us →
          </Link>
        </div>
      </section>
    </>
  );
}
