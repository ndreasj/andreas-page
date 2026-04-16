export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#2a2a2a] mt-24">
      <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
        <p className="text-xs text-[#6b6b6b]">
          &copy; {year} Andreas. All rights reserved.
        </p>
        <p className="text-xs text-[#3a3a3a]">Andreas Page</p>
      </div>
    </footer>
  );
}
