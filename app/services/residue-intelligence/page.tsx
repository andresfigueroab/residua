import ServicePage from "@/components/ServicePage";

import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Residue Intelligence",
  description: "Residua audits and maps the full waste and recycling profile of a workplace — what is generated, what is actually recycled, and the real carbon cost of the gap. Output includes tracking dashboards and verified emissions data.",
  path: "/services/residue-intelligence",
});

export default function ResidueIntelligencePage() {
  return (
    <ServicePage
      practiceArea="Environmental Intelligence"
      icon="♻"
      name="Residue Intelligence"
      tagline="Measure the gap. Close it."
      intro="A clear, data-backed picture of where your organization stands — and what its waste is costing in emissions and missed opportunity."
      what="We audit and map the full waste and recycling profile of a workplace — what is generated, what is actually recycled, and the real carbon cost of the gap between the two. The output is a structured intelligence product: a facility-by-facility breakdown of waste streams, recycling rates, contamination points, and the emissions equivalent of every category missed. We work on factory floors, in office buildings, and across multi-site operations. The deliverable is not a checklist — it is a data product you can act on."
      tags={["waste audit", "carbon impact", "tracking dashboards", "recycling rate analysis", "contamination mapping", "emissions equivalent reporting"]}
      steps={[
        {
          title: "Site assessment",
          body: "We walk the facility with your operations team, mapping waste streams from point of generation to point of disposal.",
        },
        {
          title: "Data collection",
          body: "We capture volume, weight, category, destination, and recycling rate data for every stream identified.",
        },
        {
          title: "Carbon translation",
          body: "We convert raw waste data into carbon equivalents — the emissions cost of every gap between what could be recycled and what actually is.",
        },
        {
          title: "Gap analysis",
          body: "We identify the highest-leverage intervention points: where small changes produce the largest emissions and cost reductions.",
        },
        {
          title: "Dashboard delivery",
          body: "We deliver a structured, repeatable tracking dashboard so you can monitor progress without re-engaging us for every measurement.",
        },
      ]}
      relatedServices={[
        { name: "Culture Transformation", href: "/services/culture-transformation" },
        { name: "Carbon Visibility Reporting", href: "/services/carbon-visibility-reporting" },
      ]}
    />
  );
}
