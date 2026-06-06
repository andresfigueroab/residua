import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact Us — Residua" };

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-teal-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-teal-100/60 text-sm font-medium uppercase tracking-widest mb-6">Contact</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-2xl mb-8">
            Let's talk about your residue.
          </h1>
          <p className="text-teal-100/80 text-lg max-w-xl leading-relaxed">
            Fill out the form and a member of our team will reach out within two business days. We'll start
            by understanding your situation — not by pitching a solution.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          {/* Left: what to expect */}
          <div className="md:col-span-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">What to expect</p>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "We read before we respond.",
                  body: "We review your submission before reaching out so the first conversation is substantive, not introductory.",
                },
                {
                  step: "02",
                  title: "Honest scoping.",
                  body: "We'll tell you whether your situation is something we can address — and if it isn't, we'll tell you that too.",
                },
                {
                  step: "03",
                  title: "No sales theater.",
                  body: "We don't do decks for the sake of decks. If a proposal is warranted, it comes with a clear scope and a clear price.",
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <span className="text-teal-700 font-bold text-sm shrink-0 mt-0.5">{s.step}</span>
                  <div>
                    <p className="font-semibold text-charcoal text-sm mb-1">{s.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
