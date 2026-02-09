import Link from "next/link";
import { Home, Shield, AlertTriangle, Newspaper } from "lucide-react";

const items = [
  { href: "/", label: "トップ", icon: Home },
  { href: "/seikatsu-hogo", label: "生活保護", icon: Shield },
  { href: "/cash-out", label: "現金化", icon: AlertTriangle },
  { href: "/news", label: "ニュース", icon: Newspaper },
];

export function BottomNav() {
  return (
    <nav className="bottom-nav md:hidden" aria-label="モバイルナビゲーション">
      <ul className="flex h-full items-center justify-around px-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 text-fg-secondary no-underline transition-colors hover:text-accent"
            >
              <item.icon className="h-5 w-5" strokeWidth={2} />
              <span className="text-[10px] font-semibold leading-none">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
