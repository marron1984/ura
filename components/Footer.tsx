import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-gray-50 mt-12">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Quick links */}
        <nav className="mb-6 grid grid-cols-2 gap-3 text-base" aria-label="フッターナビゲーション">
          <Link href="/seikatsu-hogo" className="text-foreground no-underline hover:underline">
            生活保護ガイド
          </Link>
          <Link href="/cash-out" className="text-foreground no-underline hover:underline">
            現金化の実態
          </Link>
          <Link href="/news" className="text-foreground no-underline hover:underline">
            ニュース一覧
          </Link>
          <Link href="/" className="text-foreground no-underline hover:underline">
            トップページ
          </Link>
        </nav>

        {/* Emergency info */}
        <div className="rounded-lg border-2 border-danger bg-red-50 p-4 mb-6">
          <p className="text-lg font-bold text-danger mb-1">
            今すぐ相談したい方
          </p>
          <p className="text-base text-foreground">
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

        <p className="text-sm text-muted">
          &copy; 2025 生活支援ナビ — 当サイトの情報は一般的な参考情報であり、
          個別の法的助言ではありません。
        </p>
      </div>
    </footer>
  );
}
