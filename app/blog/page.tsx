import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { posts } from "@/data/site";
import { siteUrl } from "@/lib/site-config";
import { BlogClient } from "./blog-client";

export const metadata: Metadata = {
  title: "Insights & News | MIA Academy Blog",
  description:
    "Career advice, campus news, industry insights and student life stories from MIA Academy in Maadi, Cairo.",
  openGraph: {
    title: "Insights & News | MIA Academy",
    description: "Career advice, campus news and industry insights from MIA.",
    url: "/blog",
  },
  alternates: { canonical: "/blog" },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/blog#webpage`,
  url: `${siteUrl}/blog`,
  name: "Insights & News | MIA Academy Blog",
  isPartOf: { "@id": `${siteUrl}/#website` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `${siteUrl}/blog/${post.slug}`,
    })),
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={blogJsonLd} />
      <BlogClient />
    </>
  );
}
