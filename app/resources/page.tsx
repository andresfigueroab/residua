import Link from "next/link";
import { resources, typeLabels, typeColors, type ResourceType } from "@/lib/resources";

export const metadata = { title: "Resources — Residua" };

function ResourceCard({ resource }: { resource: typeof resources[0] }) {
  return (
    <Link
      href={`/resources/${resource.slug}`}
      className="group bg-white border border-gray-200 rounded-xl p-6 flex flex-col hover:border-teal-700 hover:shadow-sm transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`px-2.5 py-1 text-xs font-medium rounded border ${typeColors[resource.type]}`}>
          {typeLabels[resource.type]}
        </span>
        <span className="text-xs text-gray-400">
          {new Date(resource.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </span>
      </div>

      {resource.type === "testimonial" && resource.author && (
        <div className="mb-3">
          <p className="text-xs font-medium text-gray-500">{resource.role} · {resource.company}</p>
        </div>
      )}

      <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-teal-700 transition-colors leading-snug">
        {resource.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{resource.excerpt}</p>

      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-xs text-gray-400 font-medium">{resource.service}</span>
        <span className="text-sm font-medium text-teal-700 opacity-0 group-hover:opacity-100 transition-opacity">
          Read more →
        </span>
      </div>
    </Link>
  );
}

export default function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  return <ResourcesContent searchParams={searchParams} />;
}

async function ResourcesContent({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const activeType = params.type as ResourceType | undefined;

  const filtered = activeType
    ? resources.filter((r) => r.type === activeType)
    : resources;

  const types: { value: ResourceType | "all"; label: string }[] = [
    { value: "all", label: "All" },
    { value: "case-study", label: "Case Studies" },
    { value: "testimonial", label: "Testimonials" },
    { value: "video", label: "Videos" },
    { value: "article", label: "Articles" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-teal-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-teal-100/60 text-sm font-medium uppercase tracking-widest mb-6">Resources</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl mb-8">
            Evidence. Insight. Experience.
          </h1>
          <p className="text-teal-100/80 text-lg max-w-2xl leading-relaxed">
            Case studies, client testimonials, videos, and articles from across our practice areas.
            Real engagements, real outcomes.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-off-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {types.map((t) => {
              const isActive = t.value === "all" ? !activeType : activeType === t.value;
              return (
                <Link
                  key={t.value}
                  href={t.value === "all" ? "/resources" : `/resources?type=${t.value}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                    isActive
                      ? "bg-teal-700 text-white border-teal-700"
                      : "bg-white text-charcoal border-gray-200 hover:border-teal-700 hover:text-teal-700"
                  }`}
                >
                  {t.label}
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <p className="text-gray-500 text-center py-20">No resources found for this category.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((r) => (
                <ResourceCard key={r.slug} resource={r} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
