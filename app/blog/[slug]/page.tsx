import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/site/JsonLd";
import { posts } from "@/data/site";
import { siteUrl } from "@/lib/site-config";
import { BlogDetailClient } from "./blog-detail-client";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Article not found | MIA", robots: { index: false } };
  }
  return {
    title: `${post.title} | MIA Academy`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      images: [{ url: post.image, alt: post.title }],
    },
    alternates: { canonical: `/blog/${post.slug}` },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    url: `${siteUrl}/blog/${post.slug}`,
    image: post.gallery.map((image) => `${siteUrl}${image}`),
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <BlogDetailClient post={post} />
    </>
  );
}
