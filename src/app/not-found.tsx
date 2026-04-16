import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <p className="text-[#3a3a3a] text-7xl font-light mb-6">404</p>
      <p className="text-[#6b6b6b] text-sm mb-8">This page does not exist.</p>
      <Link
        href="/"
        className="text-xs text-[#6b6b6b] hover:text-[#e8e8e8] transition-colors"
      >
        &larr; Go home
      </Link>
    </div>
  );
}
