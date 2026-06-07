import ServicePage from "@/components/ServicePage";

import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Culture Transformation",
  description: "Residua embeds recycling strategies inside factories and office buildings through habit mapping, behavioral change programs, staff engagement, and ongoing emissions measurement — turning a one-time audit into lasting operational change.",
  path: "/services/culture-transformation",
});

export default function CultureTransformationPage() {
  return (
    <ServicePage
      practiceArea="Environmental Intelligence"
      icon="🏭"
      name="Culture Transformation"
      tagline="A snapshot changes nothing. Systems do."
      intro="We design and embed recycling strategies inside factories and office buildings — turning a one-time audit into lasting operational change and verifiable emissions reductions."
      what="A one-time audit changes nothing on its own. Culture Transformation is the engagement that makes Residue Intelligence stick. We map the behavioral patterns that produce waste mismanagement, then design the operational interventions — station redesigns, staff training, habit loops, incentive structures — that replace them. We work directly with facility managers, floor supervisors, and communications teams to embed change at every level. Progress is tracked against your baseline audit data. The output is not a program binder — it is a verifiable shift in your recycling rate and emissions profile."
      tags={["habit mapping", "change programs", "behavioral design", "emissions reporting", "staff engagement", "operational embedding"]}
      steps={[
        {
          title: "Behavioral baseline",
          body: "We map existing habits — what employees actually do with waste, where contamination originates, and what drives non-compliance.",
        },
        {
          title: "Intervention design",
          body: "We design targeted interventions: station reconfiguration, signage systems, feedback loops, and incentive structures matched to your workforce.",
        },
        {
          title: "Staff engagement",
          body: "We run training and communication programs with facility managers and floor supervisors to embed the new behaviors.",
        },
        {
          title: "Measurement cycles",
          body: "We track recycling rates and contamination levels against baseline data at defined intervals to confirm the change is real.",
        },
        {
          title: "Emissions reporting",
          body: "We translate the behavioral change into verified emissions reductions you can include in carbon disclosures and investor reporting.",
        },
      ]}
      relatedServices={[
        { name: "Residue Intelligence", href: "/services/residue-intelligence" },
        { name: "Carbon Visibility Reporting", href: "/services/carbon-visibility-reporting" },
      ]}
    />
  );
}
