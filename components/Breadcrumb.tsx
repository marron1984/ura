import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="パンくずリスト" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-fg-secondary">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 rounded-full bg-accent-light px-2.5 py-1 text-xs font-medium text-accent no-underline transition-colors hover:bg-accent/10"
          >
            <Home className="h-3 w-3" />
            トップ
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3 w-3 text-fg-secondary/40" />
            {item.href ? (
              <Link
                href={item.href}
                className="rounded-full px-2.5 py-1 text-xs font-medium text-fg-secondary no-underline transition-colors hover:bg-accent-light hover:text-accent"
              >
                {item.label}
              </Link>
            ) : (
              <span className="rounded-full bg-bg-card px-2.5 py-1 text-xs font-semibold text-fg">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
