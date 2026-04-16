import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug, formatDate } from "@/lib/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  // Render plain-text content with basic paragraph/heading support
  const sections = article.content.split("\n\n");

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      {/* Back link */}
      <Link
        href="/articles"
        className="text-xs text-[#6b6b6b] hover:text-[#e8e8e8] transition-colors mb-14 inline-block"
      >
        &larr; All articles
      </Link>

      {/* Header */}
      <header className="mb-14">
        <h1 className="text-3xl font-light text-white tracking-tight mb-5 text-balance">
          {article.title}
        </h1>
        <div className="flex items-center gap-4 text-xs text-[#6b6b6b]">
          <time>{formatDate(article.date)}</time>
          <span className="text-[#2a2a2a]">&bull;</span>
          <span>{article.readingTime}</span>
        </div>
      </header>

      {/* Body */}
      <div className="prose-custom space-y-6">
        {sections.map((section, i) => {
          if (section.startsWith("## ")) {
            return (
              <h2
                key={i}
                className="text-lg font-medium text-white mt-12 mb-2 first:mt-0"
              >
                {section.replace("## ", "")}
              </h2>
            );
          }
          return (
            <p
              key={i}
              className="text-[#a0a0a0] text-base leading-[1.85] font-light"
            >
              {section}
            </p>
          );
        })}
      </div>

      {/* Footer nav */}
      <div className="mt-20 pt-8 border-t border-[#1e1e1e]">
        <Link
          href="/articles"
          className="text-xs text-[#6b6b6b] hover:text-[#e8e8e8] transition-colors"
        >
          &larr; Back to all articles
        </Link>
      </div>
    </article>
  );
}
