import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export function AppHeader() {
  return (
    <header className="bg-background border-b">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          ponz-toolbox
        </Link>
        <div className="flex items-center gap-2">
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            shadcn/ui
          </a>
        </div>
      </div>
    </header>
  );
}
