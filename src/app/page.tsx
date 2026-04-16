import Link from "next/link";
import Image from "next/image";
import { getAllArticles, formatDate } from "@/lib/articles";
import { getAllPhotos } from "@/lib/photos";

export default function HomePage() {
  const latestArticles = getAllArticles().slice(0, 3);
  const latestPhotos = getAllPhotos().slice(0, 4);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Intro */}
      <section className="mb-24">
        <h1 className="text-3xl font-light text-white mb-5 tracking-tight">
          Andreas
        </h1>
        <p className="text-[#a0a0a0] text-lg leading-relaxed max-w-xl">
          Writing and photographs. Mostly about ideas, places, and small
          observations. Based in Stockholm.
        </p>
      </section>

      {/* Latest Articles */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xs font-medium tracking-widest text-[#6b6b6b] uppercase">
            Recent Writing
          </h2>
          <Link
            href="/articles"
            className="text-xs text-[#6b6b6b] hover:text-[#e8e8e8] transition-colors"
          >
            All articles &rarr;
          </Link>
        </div>
        <ul className="space-y-0 divide-y divide-[#1e1e1e]">
          {latestArticles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}`}
                className="group flex items-start justify-between py-6 gap-6"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#e8e8e8] font-normal text-base group-hover:text-white transition-colors mb-2">
                    {article.title}
                  </h3>
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
      </section>

      {/* Latest Photos */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xs font-medium tracking-widest text-[#6b6b6b] uppercase">
            Recent Photos
          </h2>
          <Link
            href="/photos"
            className="text-xs text-[#6b6b6b] hover:text-[#e8e8e8] transition-colors"
          >
            All photos &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {latestPhotos.map((photo) => (
            <Link
              key={photo.id}
              href="/photos"
              className="group relative aspect-square overflow-hidden bg-[#1a1a1a] rounded-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
