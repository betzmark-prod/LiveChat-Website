import Button from "@/components/Button";
import { Mail, MessageSquare, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | LiveChat",
  description:
    "Get in touch with the LiveChat team for support, sales, or partnership inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Whether you have a question about features, trials, pricing, need a
            demo, or anything else, our team is ready to answer all your
            questions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="flex-1 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 shrink-0">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Chat with sales</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Speak to our friendly team to see how LiveChat can help
                  you.
                </p>
                <a
                  href="mailto:sales@livechat.com"
                  className="text-primary-600 font-medium hover:underline"
                >
                  sales@livechat.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We&apos;re here to help with any technical issues or account
                  inquiries.
                </p>
                <a
                  href="mailto:support@livechat.com"
                  className="text-primary-600 font-medium hover:underline"
                >
                  support@livechat.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Visit us</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  100 Innovation Drive
                  <br />
                  Suite 400
                  <br />
                  San Francisco, CA 94103
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <Button
                  type="button"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
