import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/photos", label: "Photos" },
];

export default function Navbar() {
  return (
    <header className="border-b border-[#2a2a2a]">
      <nav className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-wide text-[#e8e8e8] hover:text-white transition-colors"
        >
          Andreas
        </Link>
        <ul className="flex items-center gap-7">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-[#6b6b6b] hover:text-[#e8e8e8] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
