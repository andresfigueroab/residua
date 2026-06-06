import ServicePage from "@/components/ServicePage";

export const metadata = { title: "Carbon Visibility Reporting — Residua" };

export default function CarbonVisibilityPage() {
  return (
    <ServicePage
      practiceArea="Environmental Intelligence"
      icon="🌿"
      name="Carbon Visibility Reporting"
      tagline="Clarity your auditors and investors can trust."
      intro="We translate raw operational and supply chain data into clear, auditable carbon disclosures — Scope 1, 2, and 3 — ready for regulatory filing, investor disclosure, and ESG benchmarking."
      what="Carbon Visibility Reporting is the natural output of a Residue Intelligence engagement — and it stands alone for organizations that already have waste data but lack the reporting infrastructure to make it legible. We take your operational data, apply the emissions factors appropriate to your industry and geography, and produce disclosures in the formats required by the frameworks your investors and regulators care about. We do not produce aspirational reports. We produce auditable documents: traceable to source data, defensible under review, and formatted for the specific filing or disclosure you face."
      tags={["scope 1 / 2 / 3", "ESG reporting", "audit-ready", "investor disclosure", "regulatory filing", "GHG protocol", "TCFD-aligned"]}
      steps={[
        {
          title: "Data collection",
          body: "We gather operational data across facilities: energy, transport, procurement, and waste — across Scope 1, 2, and 3 boundaries.",
        },
        {
          title: "Emissions calculation",
          body: "We apply current emissions factors (GHG Protocol-aligned) and document every assumption for auditability.",
        },
        {
          title: "Gap identification",
          body: "We flag data gaps that could weaken your disclosure and recommend the fastest path to closing them.",
        },
        {
          title: "Report production",
          body: "We produce the disclosure in the format required — SEC climate rule, CDP, TCFD, or investor-specific template.",
        },
        {
          title: "Audit support",
          body: "We provide documentation packages and direct support for third-party auditors reviewing your disclosure.",
        },
      ]}
      relatedServices={[
        { name: "Residue Intelligence", href: "/services/residue-intelligence" },
        { name: "Culture Transformation", href: "/services/culture-transformation" },
      ]}
    />
  );
}
