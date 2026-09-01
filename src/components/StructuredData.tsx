import { socialLinks } from "@/lib/config/social";
import { siteUrl } from "@/lib/i18n/config";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "METHER",
  url: siteUrl,
  email: "info@almether.com",
  slogan: "Engineering Tomorrow.",
  sameAs: socialLinks.map((social) => social.href),
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
      }}
    />
  );
}
