export interface Photo {
  id: string;
  src: string;
  alt: string;
  location?: string;
  date: string;
  width: number;
  height: number;
}

// Using Unsplash for placeholder images
export const photos: Photo[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Mountain landscape at dawn",
    location: "Swiss Alps",
    date: "2026-03-15",
    width: 800,
    height: 600,
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    alt: "City street at night",
    location: "Stockholm",
    date: "2026-03-10",
    width: 800,
    height: 1067,
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    alt: "Forest trail in fog",
    location: "Tyresta",
    date: "2026-02-28",
    width: 800,
    height: 533,
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1518655048521-f130df041f66?w=800&q=80",
    alt: "Close-up of coffee cup on wooden desk",
    location: "Home",
    date: "2026-02-14",
    width: 800,
    height: 533,
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800&q=80",
    alt: "Snowy pine trees at dusk",
    location: "Dalarna",
    date: "2026-01-30",
    width: 800,
    height: 533,
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?w=800&q=80",
    alt: "Calm lake at sunrise",
    location: "Vättern",
    date: "2026-01-18",
    width: 800,
    height: 533,
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    alt: "Stars over mountain ridge",
    location: "Jämtland",
    date: "2025-12-22",
    width: 800,
    height: 533,
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    alt: "Narrow alley between stone walls",
    location: "Visby",
    date: "2025-11-14",
    width: 800,
    height: 1067,
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    alt: "Wooden pier extending into still water",
    location: "Archipelago",
    date: "2025-10-05",
    width: 800,
    height: 533,
  },
];

export function getAllPhotos(): Photo[] {
  return [...photos].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
