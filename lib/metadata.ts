import { Metadata } from "next";

const BASE_URL = "https://residua.vercel.app";
const SITE_NAME = "Residua";
const DEFAULT_DESCRIPTION =
  "Residua helps organizations understand what they leave behind — the waste in their buildings, the carbon in their operations, and the unresolved tensions in the communities where they build. Environmental & Civic Intelligence consulting.";

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
