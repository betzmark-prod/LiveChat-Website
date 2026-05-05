import PricingTable from "@/sections/PricingTable";
import Accordion from "@/components/Accordion";
import CtaSection from "@/sections/CtaSection";
import { FAQS } from "@/constants";

export default function PricingPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pricing that scales with you
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            No hidden fees. No surprise charges. Just simple, transparent
            pricing.
          </p>
        </div>
      </div>
      <PricingTable />

      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Got questions? We&apos;ve got answers.
            </p>
          </div>
          <Accordion items={FAQS} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
