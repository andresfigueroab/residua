export type ResourceType = "case-study" | "testimonial" | "video" | "article";

export interface Resource {
  slug: string;
  type: ResourceType;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  company?: string;
  role?: string;
  service: string;
  videoUrl?: string;
  body: string;
}

export const resources: Resource[] = [
  {
    slug: "manufacturing-waste-audit-midwest",
    type: "case-study",
    title: "How a Midwest Manufacturer Cut Waste-Related Emissions by 34%",
    excerpt:
      "A 1,200-person manufacturing facility engaged Residua for a full Residue Intelligence audit. Twelve weeks later, their recycling rate had improved from 41% to 73% — with a verified 34% reduction in waste-linked emissions.",
    date: "2025-11-14",
    service: "Residue Intelligence",
    body: `A 1,200-person manufacturing facility in the Midwest had been filing annual sustainability reports for three years — but their waste numbers were estimates, not measurements. When a new CFO asked for auditable figures ahead of a Series C raise, they had none.

Residua conducted a full Residue Intelligence engagement: six weeks of on-site data collection across three shifts, mapping 14 distinct waste streams from point of generation to final disposal. The audit revealed that 31% of materials designated as "recycling" were contaminated and being landfilled — invisible in the company's own reporting.

The gap translated to 847 metric tons of CO₂-equivalent per year in avoidable emissions.

Within twelve weeks of the audit — with targeted station redesigns and a simplified sorting protocol — the contamination rate dropped from 31% to 8%. Recycling rate improved from 41% to 73%. The emissions reduction was third-party verified and included in the Series C data room.

The CFO's comment at close: "We knew we had a problem. We didn't know it was this fixable."`,
  },
  {
    slug: "data-center-community-approval-texas",
    type: "case-study",
    title: "Securing Community Approval for a 400MW Data Center in 90 Days",
    excerpt:
      "A hyperscale data center developer needed to move from site selection to community approval in an accelerated timeline. Residua's Infrastructure Sentiment Study identified the three concerns that mattered — and the conditions under which the community would say yes.",
    date: "2025-09-03",
    service: "Infrastructure Sentiment Studies",
    body: `A hyperscale data center developer had selected a site in a fast-growing Texas county. The project represented 400MW of capacity and $2.1B in capital investment. The timeline required a conditional use permit within 90 days of announcement.

Community opposition to data centers in Texas had been intensifying. Three comparable projects in adjacent counties had been delayed an average of 14 months by organized opposition.

Residua conducted a pre-announcement Infrastructure Sentiment Study: 340 structured interviews across the county, stakeholder mapping of 47 civic and political actors, and opposition scenario modeling based on the county's specific demographic and political profile.

The study identified three specific concerns: water consumption, property tax abatements, and local hiring commitments. It also identified the two county commissioners whose support was decisive — and the specific commitments that would secure it.

The developer announced the project with a structured community benefits package that directly addressed the three concerns. Opposition organized but found its central arguments already answered. The conditional use permit was granted 83 days after announcement.

The project is now operational. No litigation. No material delay.`,
  },
  {
    slug: "testimonial-real-estate-carbon",
    type: "testimonial",
    title: "\"We thought we had a recycling program. We had theater.\"",
    excerpt:
      "The head of sustainability at a commercial real estate firm managing 4.2M square feet on what a Residue Intelligence audit revealed — and what changed.",
    date: "2025-08-10",
    author: "VP of Sustainability",
    company: "Commercial Real Estate Firm (confidential)",
    role: "VP of Sustainability",
    service: "Culture Transformation",
    body: `"We had bins in every kitchen. We had signage. We had a vendor contract. We thought we had a recycling program.

Residua spent four weeks across our six largest properties. What they found: contamination rates between 44% and 67% across all properties. Tenants were using recycling bins as overflow trash. Building staff were combining streams because it was faster. Our vendor was sorting what they could and landfilling the rest.

Our reported recycling rate was 61%. Our actual recycling rate was 19%.

The Culture Transformation engagement was hard. It required retraining, station redesigns, and honest conversations with building managers who didn't want to hear that their programs weren't working. Twelve months later, our actual rate is 58% and still improving.

More importantly: we can now prove it. Every number is traceable. When our institutional tenants ask for sustainability data, we send them the audit trail — not the story."`,
  },
  {
    slug: "video-civic-intelligence-explained",
    type: "video",
    title: "Understanding the Non-Market Environment: How Companies Earn the Social License to Operate.",
    excerpt:
      "An overview of how Residua helps organizations map their non-market environment — the stakeholders, community dynamics, and social forces that shape whether a project succeeds or stalls.",
    date: "2025-07-15",
    service: "Civic Intelligence & Stakeholder Mapping",
    videoUrl: "https://www.youtube.com/embed/z9W4DN_PKac",
    body: `Every project operates in two environments simultaneously: the market environment of contracts, capital, and competition — and the non-market environment of community opinion, civic actors, and social trust. Most organizations plan for the first and ignore the second — until it stops them.

Residua's approach is built on a simple premise: the social license to operate is not given, it is earned through sustained listening, honest engagement, and the willingness to understand what communities actually care about — before you need their approval.

In this video, we walk through:
— What the non-market environment is and why it determines project outcomes
— How we map the stakeholders who shape community response
— The difference between public relations and genuine community intelligence
— How organizations earn and maintain the social license to operate
— Why community opposition is a data problem, not a communication problem`,
  },
  {
    slug: "article-scope-3-reporting-2025",
    type: "article",
    title: "Scope 3 Reporting in 2025: What's Changed and What Hasn't",
    excerpt:
      "The regulatory landscape for Scope 3 emissions reporting shifted significantly in 2024–2025. Here's what organizations actually need to file, what they can defer, and where the audit risk sits.",
    date: "2025-12-01",
    service: "Carbon Visibility Reporting",
    body: `The SEC's climate disclosure rule, finalized in 2024 and partially stayed pending litigation, created significant uncertainty about Scope 3 reporting requirements for public companies. At the same time, the EU's CSRD extended mandatory Scope 3 reporting to a large class of companies operating in Europe.

Here is what the landscape actually looks like entering 2025.

**For US-listed companies**

The SEC rule, as it stands, requires Scope 1 and 2 disclosure for most registrants. Scope 3 disclosure was removed from the final rule before finalization. However: voluntary Scope 3 disclosures remain common among large-cap companies responding to investor pressure, and the SEC has indicated it will continue monitoring the space.

The practical implication: if your institutional investors are asking for Scope 3 data — and most are — you need it regardless of regulatory status. The audit risk is lower than Scope 1/2, but the expectation is there.

**For companies operating in Europe**

CSRD's Scope 3 requirements are mandatory for in-scope companies. The "double materiality" assessment required by CSRD means you must assess both how climate affects your business and how your business affects the climate. Scope 3 is central to both.

**Where the audit risk actually sits**

In our experience, the audit risk on Scope 3 is not in the reported numbers — it's in the methodology. Auditors are increasingly asking how emissions factors were selected, how data gaps were handled, and whether the calculation methodology is consistent year-over-year. Companies that can answer those questions have defensible disclosures. Companies that can't are exposed regardless of what the number is.

Residua's Carbon Visibility Reporting engagements produce disclosures that are methodology-first: every assumption documented, every data gap flagged, every calculation traceable. That's what defensibility looks like.`,
  },
];

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export const typeLabels: Record<ResourceType, string> = {
  "case-study": "Case Study",
  testimonial: "Testimonial",
  video: "Video",
  article: "Article",
};

export const typeColors: Record<ResourceType, string> = {
  "case-study": "bg-teal-50 text-teal-700 border-teal-100",
  testimonial: "bg-blue-50 text-blue-700 border-blue-100",
  video: "bg-orange-50 text-orange-700 border-orange-100",
  article: "bg-gray-100 text-gray-600 border-gray-200",
};
