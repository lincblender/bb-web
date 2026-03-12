import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";

export const metadata = {
  title: "Privacy Policy | BidBlender",
  description: "BidBlender Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <MarketingLayout>
      <MarketingSection maxWidth="3xl" as="article">
        <MarketingPageHeader
          title="Privacy Policy"
          intro={`Last updated: ${new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}`}
        />

        <div className="mt-12 space-y-8 text-sm bb-text-muted">
          <section>
            <h2 className="bb-section-title mb-2">1. Introduction</h2>
            <p>
              BidBlender (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Opportunity Intelligence Platform at console.bidblender.com.au.
            </p>
          </section>

          <section>
            <h2 className="bb-section-title mb-2">2. Information We Collect</h2>
            <p className="mb-2">We may collect:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li><strong>Account information:</strong> Email address, name, and profile data when you sign up or sign in (including via LinkedIn).</li>
              <li><strong>Usage data:</strong> How you use the platform, including opportunities viewed, analyses run, and features accessed.</li>
              <li><strong>Organisation data:</strong> Capabilities, certifications, case studies, and other information you provide about your organisation.</li>
              <li><strong>Network data:</strong> When you connect LinkedIn or other sources, we process relationship and connection data in accordance with those services&apos; terms and your authorisations.</li>
            </ul>
          </section>

          <section>
            <h2 className="bb-section-title mb-2">3. How We Use Your Information</h2>
            <p>
              We use your information to deliver and improve the BidBlender platform, personalise your experience, run AI-powered analyses, and communicate with you about your account and our services.
            </p>
          </section>

          <section>
            <h2 className="bb-section-title mb-2">4. Data Storage and Security</h2>
            <p>
              Your data is stored securely using industry-standard practices. We use Supabase for authentication and data storage, and OpenAI for AI analysis when you choose to use those features.
            </p>
          </section>

          <section>
            <h2 className="bb-section-title mb-2">5. Third-Party Services</h2>
            <p>
              We integrate with LinkedIn (for sign-in and network intelligence), Supabase (authentication and database), and OpenAI (AI analysis). Each has its own privacy policy governing their use of your data.
            </p>
          </section>

          <section>
            <h2 className="bb-section-title mb-2">6. Your Rights</h2>
            <p>
              You may access, correct, or delete your personal information through your account settings or by contacting us. You may also withdraw consent for certain processing where applicable.
            </p>
          </section>

          <section>
            <h2 className="bb-section-title mb-2">7. Contact</h2>
            <p>
              For privacy-related questions, contact us at{" "}
              <a href="mailto:hello@bidblender.com.au" className="bb-link">
                hello@bidblender.com.au
              </a>
              .
            </p>
          </section>
        </div>
      </MarketingSection>
    </MarketingLayout>
  );
}
