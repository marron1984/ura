import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="パンくずリスト" className="mb-6 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="text-muted hover:text-foreground no-underline">
            トップ
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3 w-3" />
            {item.href ? (
              <Link href={item.href} className="text-muted hover:text-foreground no-underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
