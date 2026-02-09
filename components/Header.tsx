import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/seikatsu-hogo", label: "生活保護" },
  { href: "/cash-out", label: "現金化の実態" },
  { href: "/news", label: "ニュース" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-xl font-bold text-foreground no-underline"
        >
          生活支援ナビ
        </Link>

        {/* Mobile: CSS-only hamburger menu */}
        <input
          type="checkbox"
          id="nav-toggle"
          className="peer hidden"
          aria-label="メニューを開く"
        />
        <label
          htmlFor="nav-toggle"
          className="flex cursor-pointer items-center justify-center p-2 md:hidden"
          aria-label="メニュー"
        >
          <Menu className="block h-6 w-6 peer-checked:hidden" />
          <X className="hidden h-6 w-6 peer-checked:block" />
        </label>

        {/* Desktop nav */}
        <nav className="hidden gap-1 md:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-base font-medium text-foreground no-underline hover:bg-accent-light"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile nav (peer of checkbox) */}
        <nav
          className="invisible absolute left-0 top-full w-full border-b border-border bg-white opacity-0 transition-all peer-checked:visible peer-checked:opacity-100 md:hidden"
          aria-label="モバイルナビゲーション"
        >
          <ul className="flex flex-col divide-y divide-border">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-6 py-4 text-lg font-medium text-foreground no-underline hover:bg-accent-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
