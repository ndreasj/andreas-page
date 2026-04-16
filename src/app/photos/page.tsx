import type { Metadata } from "next";
import Image from "next/image";
import { getAllPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Photos",
  description: "Photographs by Andreas.",
};

export default function PhotosPage() {
  const photos = getAllPhotos();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <header className="mb-16">
        <h1 className="text-2xl font-light text-white tracking-tight">
          Photos
        </h1>
        <p className="text-[#6b6b6b] text-sm mt-2">
          {photos.length} {photos.length === 1 ? "photograph" : "photographs"}
        </p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative aspect-square overflow-hidden bg-[#1a1a1a] rounded-sm"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-300"
            />
            {/* Hover overlay with location */}
            {photo.location && (
              <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white text-xs font-light tracking-wide">
                  {photo.location}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
