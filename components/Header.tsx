import Link from "next/link";

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/seikatsu-hogo", label: "生活保護" },
  { href: "/cash-out", label: "現金化の実態" },
  { href: "/news", label: "ニュース" },
];

export function Header() {
  return (
    <header className="glass sticky top-0 z-50">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="text-gradient text-xl font-extrabold tracking-tight">
            生活支援ナビ
          </span>
        </Link>

        {/* Desktop nav — pill-shaped links */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="メインナビゲーション"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-fg no-underline transition-colors hover:bg-accent-light hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
