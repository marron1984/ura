import Link from "next/link";
import { Phone, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border-strong">
      <div className="mx-auto max-w-3xl px-4 py-10">
        {/* Emergency CTA */}
        <div className="anim-up card-glow mb-8 p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/10">
              <Phone className="h-5 w-5 text-danger" />
            </div>
            <div>
              <p className="text-base font-bold text-fg">今すぐ相談したい方</p>
              <p className="mt-1 text-sm text-fg-secondary">
                よりそいホットライン：
                <a
                  href="tel:0120-279-338"
                  className="font-bold text-danger underline"
                >
                  0120-279-338
                </a>
                （24時間無料）
              </p>
            </div>
          </div>
        </div>

        {/* Links */}
        <nav
          className="mb-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm"
          aria-label="フッターナビゲーション"
        >
          {[
            { href: "/seikatsu-hogo", label: "生活保護ガイド" },
            { href: "/cash-out", label: "現金化の実態" },
            { href: "/news", label: "ニュース一覧" },
            { href: "/", label: "トップページ" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 text-fg-secondary no-underline transition-colors hover:text-accent"
            >
              <ExternalLink className="h-3 w-3" />
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-fg-secondary/60">
          &copy; 2025 生活支援ナビ —
          当サイトの情報は一般的な参考情報であり、個別の法的助言ではありません。
        </p>
      </div>
    </footer>
  );
}
