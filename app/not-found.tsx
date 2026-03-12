import Link from "next/link";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <MarketingLayout>
      <section className="bb-bg-base flex min-h-[60vh] flex-col items-center justify-center px-6 py-20">
        <p className="text-6xl font-bold text-bb-powder-blue/30">404</p>
        <h1 className="mt-4 text-2xl font-bold bb-text-primary md:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-center bb-text-muted">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary">
            Back to home
          </Button>
          <Button href="/auth/signin" variant="secondary">
            Sign in
          </Button>
        </div>
      </section>
    </MarketingLayout>
  );
}
