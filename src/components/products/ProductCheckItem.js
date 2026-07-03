import { Check } from "lucide-react";

export default function ProductCheckItem({ children }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-slate-700 md:text-base">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)]/60">
        <Check className="h-3 w-3 text-[var(--primary)]" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}
