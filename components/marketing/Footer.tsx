import Link from "next/link";
import Image from "next/image";
import { footerLinkGroups } from "@/lib/marketing/navigation";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-bb-dark-elevated">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-md">
            <Link href="/" className="block">
              <Image src="/wordmark.png" alt="BidBlender" width={200} height={80} className="h-16 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              BidBlender is an opportunity intelligence platform for bid teams.
              It blends CRM history, capability evidence, relationship reach, and
              tender opportunity data to help teams decide where they can actually win.
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-200">{group.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-gray-100">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} BidBlender. All rights reserved.</span>
          <p>Tender-focused opportunity intelligence for bid and growth teams.</p>
        </div>
      </div>
    </footer>
  );
}
