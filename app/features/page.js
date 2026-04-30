import FeaturesGrid from '@/sections/FeaturesGrid';
import Benefits from '@/sections/Benefits';
import CtaSection from '@/sections/CtaSection';

export const metadata = {
  title: 'Features | LiveChat',
  description: 'Explore the powerful features of LiveChat, from real-time AI responses to seamless human escalation.',
};

export default function FeaturesPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful features for modern support</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to automate your customer support, engage visitors, and drive more conversions.
          </p>
        </div>
      </div>
      <FeaturesGrid />
      <Benefits />
      <CtaSection />
    </>
  );
}
