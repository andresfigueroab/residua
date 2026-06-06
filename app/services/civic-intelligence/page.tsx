import ServicePage from "@/components/ServicePage";

export const metadata = { title: "Civic Intelligence & Stakeholder Mapping — Residua" };

export default function CivicIntelligencePage() {
  return (
    <ServicePage
      practiceArea="Civic Intelligence"
      icon="👥"
      name="Civic Intelligence & Stakeholder Mapping"
      tagline="Hear the community before it stops you."
      intro="We identify and map the full landscape of stakeholders that can accelerate or block an infrastructure project — before they become obstacles."
      what="We identify and map the full landscape of stakeholders that can accelerate or block an infrastructure project — civic groups, political actors, neighborhood associations, advocacy organizations, and community leaders. We analyze their interests, their relationships, and their likely posture toward a project before engagement begins. The output is a structured intelligence product: a stakeholder map that tells you who matters, why they matter, what they want, and what posture they're likely to take. This is not a contact list — it is a social landscape analysis that tells you where to invest engagement resources and where to expect resistance."
      tags={["stakeholder mapping", "risk assessment", "social license", "community analysis", "opposition identification", "relationship mapping", "project timeline protection"]}
      steps={[
        {
          title: "Landscape scoping",
          body: "We identify all relevant stakeholder categories for the project type and geography — civic, political, advocacy, and community.",
        },
        {
          title: "Actor identification",
          body: "We name specific organizations and individuals within each category and begin assessing their influence and relationships.",
        },
        {
          title: "Interest analysis",
          body: "We analyze what each stakeholder cares about, what their history is with similar projects, and what their public record reveals.",
        },
        {
          title: "Posture modeling",
          body: "We model the likely posture of each actor — supportive, neutral, skeptical, or opposed — and the conditions under which they move.",
        },
        {
          title: "Map delivery",
          body: "We deliver a structured stakeholder map with recommended engagement sequence and watch-list for high-risk actors.",
        },
      ]}
      relatedServices={[
        { name: "Public Opinion Research", href: "/services/public-opinion-research" },
        { name: "Infrastructure Sentiment Studies", href: "/services/infrastructure-sentiment" },
      ]}
    />
  );
}
