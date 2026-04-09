import { AppHeader } from "@/components/app/app-header";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-background flex min-h-dvh flex-col">
      <AppHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-4 py-10">
        <div className="space-y-2">
          <h1 className="text-3xl leading-9 font-semibold tracking-tight">ponz-toolbox</h1>
          <p className="text-muted-foreground max-w-2xl text-sm">
            Next.js(App Router) + TypeScript + Tailwind + shadcn/ui の初期セットアップ完了。
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "default", size: "default" })}
          >
            Next.js Docs
          </a>
          <a
            href="https://ui.shadcn.com/docs"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline", size: "default" })}
          >
            shadcn/ui Docs
          </a>
        </div>
      </main>
    </div>
  );
}
