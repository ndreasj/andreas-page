import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, formatDate } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description: "Writing by Andreas.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <header className="mb-16">
        <h1 className="text-2xl font-light text-white tracking-tight">
          Articles
        </h1>
        <p className="text-[#6b6b6b] text-sm mt-2">
          {articles.length} {articles.length === 1 ? "piece" : "pieces"}
        </p>
      </header>

      <ul className="space-y-0 divide-y divide-[#1e1e1e]">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/articles/${article.slug}`}
              className="group flex items-start justify-between py-7 gap-8"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-[#e8e8e8] font-normal text-base group-hover:text-white transition-colors">
                    {article.title}
                  </h2>
                  <span className="text-[#3a3a3a] text-xs hidden sm:block">
                    {article.readingTime}
                  </span>
                </div>
                <p className="text-[#6b6b6b] text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
              <time className="text-xs text-[#3a3a3a] whitespace-nowrap pt-1 shrink-0">
                {formatDate(article.date)}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
