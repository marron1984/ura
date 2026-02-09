import { Phone } from "lucide-react";

export function FAB() {
  return (
    <a
      href="tel:0120-279-338"
      className="fab"
      aria-label="よりそいホットラインに電話する"
      title="0120-279-338（24時間無料）"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
