import ServicePage from "@/components/ServicePage";

export const metadata = { title: "Infrastructure Sentiment Studies — Residua" };

export default function InfrastructureSentimentPage() {
  return (
    <ServicePage
      practiceArea="Civic Intelligence"
      icon="🖥"
      name="Infrastructure Sentiment Studies"
      tagline="Know the opposition before it organizes."
      intro="Specialized research for large-scale infrastructure projects — data centers, energy facilities, logistics hubs, transmission corridors. We map public concerns with precision and build the engagement strategy needed to secure and maintain approval."
      what="Large infrastructure projects face a specific challenge: the communities that host them are small, the projects are visible and permanent, and opposition — once organized — moves faster than approval processes. Infrastructure Sentiment Studies is our specialized product for these engagements. We map public concerns with precision, identify the community leaders who matter most, model likely opposition scenarios, and develop the engagement strategy needed to secure and maintain community approval. The engagement begins before a project is announced and runs through permitting. Our clients' projects proceed. Their competitors' don't."
      tags={["datacenter siting", "energy projects", "logistics hubs", "approval strategy", "opposition modeling", "transmission corridors", "permitting support", "community leaders"]}
      steps={[
        {
          title: "Pre-announcement assessment",
          body: "We assess community sentiment before announcement — who is likely to organize, who is likely to lead opposition, and what concerns will surface.",
        },
        {
          title: "Leader identification",
          body: "We identify the specific community leaders whose posture shapes the broader community response and prioritize early engagement.",
        },
        {
          title: "Opposition scenario modeling",
          body: "We model likely opposition trajectories — what form it takes, how quickly it organizes, and which interventions can slow or redirect it.",
        },
        {
          title: "Engagement strategy",
          body: "We develop the community engagement strategy: what to say, to whom, in what order, and with what commitments to move the community toward approval.",
        },
        {
          title: "Ongoing monitoring",
          body: "We monitor community sentiment through the permitting process and flag early signals of emerging opposition before it becomes a formal challenge.",
        },
      ]}
      relatedServices={[
        { name: "Civic Intelligence & Stakeholder Mapping", href: "/services/civic-intelligence" },
        { name: "Public Opinion Research", href: "/services/public-opinion-research" },
      ]}
    />
  );
}
