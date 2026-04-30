export const metadata = {
  title: "Documentation | LiveChat",
  description:
    "Learn how to integrate and configure LiveChat on your website.",
};

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row gap-12">
      <aside className="w-full md:w-64 shrink-0">
        <div className="sticky top-24">
          <h3 className="font-semibold text-lg mb-4">Getting Started</h3>
          <ul className="space-y-3 mb-8">
            <li>
              <a href="#" className="text-primary-600 font-medium">
                Quickstart
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
              >
                Installation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
              >
                Configuration
              </a>
            </li>
          </ul>

          <h3 className="font-semibold text-lg mb-4">Advanced</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
              >
                Custom Styling
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
              >
                API Reference
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
              >
                Webhooks
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <main className="flex-1 max-w-3xl prose prose-primary dark:prose-invert">
        <h1>Quickstart Guide</h1>
        <p className="lead">
          Get LiveChat up and running on your website in less than 5 minutes.
        </p>

        <h2>1. Create an Account</h2>
        <p>
          First, sign up for a free LiveChat account. Once logged in,
          you&apos;ll be directed to your dashboard where you can find your
          unique widget ID.
        </p>

        <h2>2. Add the Snippet</h2>
        <p>
          Copy the following JavaScript snippet and paste it just before the
          closing <code>&lt;/head&gt;</code> tag of your website.
        </p>

        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`<script>
  window.LiveChatConfig = {
    widgetId: 'YOUR_WIDGET_ID'
  };
</script>
<script src="https://cdn.livechat.com/widget.js" async></script>`}</code>
        </pre>

        <h2>3. Customize</h2>
        <p>
          Navigate to the <strong>Appearance</strong> section in your dashboard
          to customize the widget&apos;s colors, logo, and initial greeting
          message to match your brand.
        </p>

        <div className="bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 rounded-lg p-6 my-8">
          <h4 className="text-primary-800 dark:text-primary-300 font-semibold mt-0 mb-2">
            Pro Tip
          </h4>
          <p className="text-primary-700 dark:text-primary-400 mb-0">
            For React/Next.js applications, we recommend using our official NPM
            package instead of the direct script tag for better performance and
            type safety.
          </p>
        </div>
      </main>
    </div>
  );
}
