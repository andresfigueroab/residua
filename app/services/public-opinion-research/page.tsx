import ServicePage from "@/components/ServicePage";

import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Public Opinion Research",
  description: "Residua conducts referendums, deep-listening studies, and quantitative opinion research to understand what communities fear, what they value, and the conditions under which they approve a project.",
  path: "/services/public-opinion-research",
});

export default function PublicOpinionPage() {
  return (
    <ServicePage
      practiceArea="Civic Intelligence"
      icon="📊"
      name="Public Opinion Research"
      tagline="Not sentiment. A structured map of conditions for yes."
      intro="We conduct referendums, deep-listening studies, and quantitative opinion research to understand what communities fear, what they value, and what they will trade to approve a project."
      what="We conduct referendums, deep-listening studies, and quantitative opinion research to understand what communities fear, what they value, and what they will trade to approve a project. The output is not sentiment: it is a structured map of concerns, trade-offs, and the conditions under which a community says yes. We report what we find — including the findings our clients hoped not to see. A community that has been genuinely heard, and that has received a genuine response to its concerns, behaves differently than one that has been managed. Our research is the difference between those two outcomes."
      tags={["public referendums", "community surveys", "trade-off analysis", "consensus building", "deep-listening studies", "quantitative research", "community conditions"]}
      steps={[
        {
          title: "Research design",
          body: "We design the research instrument — survey, focus group, or listening session — matched to the community type and project phase.",
        },
        {
          title: "Field execution",
          body: "We conduct the research directly: door-to-door, community meetings, or structured online instruments, depending on the geography.",
        },
        {
          title: "Concern mapping",
          body: "We code and categorize community concerns into structured themes — what's driving opposition and what's driving support.",
        },
        {
          title: "Trade-off analysis",
          body: "We identify the specific concessions, commitments, or community benefits that shift community posture toward approval.",
        },
        {
          title: "Report delivery",
          body: "We deliver a research report with findings, community concern map, and a recommended engagement strategy based on what we found.",
        },
      ]}
      relatedServices={[
        { name: "Civic Intelligence & Stakeholder Mapping", href: "/services/civic-intelligence" },
        { name: "Infrastructure Sentiment Studies", href: "/services/infrastructure-sentiment" },
      ]}
    />
  );
}
