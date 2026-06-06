import Link from "next/link";
import { notFound } from "next/navigation";
import { getResource, resources, typeLabels, typeColors } from "@/lib/resources";
import JsonLd from "@/components/JsonLd";

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

const BASE_URL = "https://residua.vercel.app";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};
  const url = `${BASE_URL}/resources/${slug}`;
  return {
    title: resource.title,
    description: resource.excerpt,
    alternates: { canonical: url },
    openGraph: { title: resource.title, description: resource.excerpt, url, type: "article", publishedTime: resource.date },
    twitter: { card: "summary_large_image", title: resource.title, description: resource.excerpt },
  };
}

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const related = resources
    .filter((r) => r.slug !== slug && (r.type === resource.type || r.service === resource.service))
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": resource.type === "video" ? "VideoObject" : resource.type === "testimonial" ? "Review" : "Article",
    headline: resource.title,
    description: resource.excerpt,
    datePublished: resource.date,
    publisher: { "@type": "Organization", name: "Residua", url: BASE_URL },
    ...(resource.type === "testimonial" && resource.author
      ? { author: { "@type": "Person", name: resource.author }, reviewBody: resource.body }
      : {}),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      {/* Hero */}
      <section className="bg-teal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/resources" className="text-teal-100/50 text-sm hover:text-teal-100 transition-colors">
              Resources
            </Link>
            <span className="text-teal-100/30 text-sm">/</span>
            <span className={`px-2.5 py-1 text-xs font-medium rounded border ${typeColors[resource.type]}`}>
              {typeLabels[resource.type]}
            </span>
          </div>
          {resource.type === "testimonial" && resource.author && (
            <p className="text-teal-100/60 text-sm mb-3">{resource.role} · {resource.company}</p>
          )}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{resource.title}</h1>
          <div className="flex items-center gap-4 text-sm text-teal-100/50">
            <span>{new Date(resource.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>·</span>
            <span>{resource.service}</span>
          </div>
        </div>
      </section>

      {/* Video embed */}
      {resource.videoUrl && (
        <section className="py-12 bg-charcoal">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <iframe
                src={resource.videoUrl}
                title={resource.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* Body */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {resource.type === "testimonial" ? (
            <blockquote className="border-l-4 border-teal-700 pl-8">
              <div className="text-xl text-charcoal leading-relaxed whitespace-pre-line italic">
                {resource.body}
              </div>
              {resource.author && (
                <footer className="mt-8 not-italic">
                  <p className="font-bold text-charcoal">{resource.author}</p>
                  <p className="text-gray-500 text-sm">{resource.role}</p>
                  <p className="text-gray-500 text-sm">{resource.company}</p>
                </footer>
              )}
            </blockquote>
          ) : (
            <div className="prose prose-lg max-w-none">
              {resource.body.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3 key={i} className="text-xl font-bold text-charcoal mt-8 mb-3">
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("— ") || paragraph.split("\n").every(l => l.startsWith("— "))) {
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {paragraph.split("\n").map((line, j) => (
                        <li key={j} className="text-gray-600 text-base flex gap-2">
                          <span className="text-teal-700 shrink-0">—</span>
                          <span>{line.replace(/^— /, "")}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-gray-600 text-lg leading-relaxed mb-6">{paragraph}</p>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-off-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Related resources</p>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/resources/${r.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-teal-700 transition-colors group"
                >
                  <span className={`px-2 py-1 text-xs font-medium rounded border ${typeColors[r.type]} inline-block mb-3`}>
                    {typeLabels[r.type]}
                  </span>
                  <h4 className="text-sm font-bold text-charcoal group-hover:text-teal-700 transition-colors leading-snug mb-2">
                    {r.title}
                  </h4>
                  <p className="text-xs text-gray-400">{r.service}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Interested in a similar engagement?</h2>
            <p className="text-teal-100/80">Tell us about your organization and we'll scope the right approach.</p>
          </div>
          <Link href="/contact" className="shrink-0 px-6 py-3 bg-white text-teal-900 font-semibold rounded hover:bg-teal-50 transition-colors">
            Contact us →
          </Link>
        </div>
      </section>
    </>
  );
}
