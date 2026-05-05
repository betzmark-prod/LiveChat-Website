"use client";

import { useState } from "react";

const TECH_STACKS = [
  {
    id: "vanilla",
    name: "Vanilla JS",
    code: `<script 
  src="https://cdn.livechat.com/loader.js?siteId=YOUR_SITE_ID" 
  async
></script>`,
    language: "html",
  },
  {
    id: "react",
    name: "React",
    code: `import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.livechat.com/loader.js?siteId=YOUR_SITE_ID";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Optional: cleanup on unmount
      document.body.removeChild(script);
    };
  }, []);

  return <div>Your App</div>;
}`,
    language: "javascript",
  },
  {
    id: "nextjs",
    name: "Next.js",
    code: `import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://cdn.livechat.com/loader.js?siteId=YOUR_SITE_ID"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}`,
    language: "javascript",
  },
  {
    id: "angular",
    name: "Angular",
    code: `<!-- Add this to your src/index.html before </body> -->
<script 
  src="https://cdn.livechat.com/loader.js?siteId=YOUR_SITE_ID" 
  async
></script>`,
    language: "html",
  },
];

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState("vanilla");

  return (
    <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row gap-12">
      <aside className="w-full md:w-64 shrink-0">
        <div className="sticky top-24">
          <h3 className="font-semibold text-lg mb-4">Getting Started</h3>
          <ul className="space-y-3 mb-8">
            <li>
              <a href="#quickstart" className="text-primary-600 font-medium">
                Quickstart
              </a>
            </li>
            <li>
              <a
                href="#installation"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
              >
                Installation
              </a>
            </li>
            <li>
              <a
                href="#configuration"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
              >
                Configuration
              </a>
            </li>
          </ul>

          <h3 className="font-semibold text-lg mb-4">Customization</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#theming"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
              >
                Theming
              </a>
            </li>
            <li>
              <a
                href="#positioning"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
              >
                Positioning
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <main className="flex-1 max-w-3xl prose prose-primary dark:prose-invert">
        <section id="quickstart">
          <h1>Documentation</h1>
          <p className="lead">
            Everything you need to integrate LiveChat into your website or
            application.
          </p>

          <h2>1. Get your Site ID</h2>
          <p>
            Sign up for a LiveChat account. Once logged in, you&apos;ll receive
            your unique <code>siteId</code> from the dashboard settings. This ID
            is required to link your website to your chat agent.
          </p>

          <h2 id="installation">2. Choose your Tech Stack</h2>
          <p>
            Select your framework below to see the corresponding installation
            guide.
          </p>

          {/* Tabs UI */}
          <div className="not-prose border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden mb-8">
            <div className="flex border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 p-1">
              {TECH_STACKS.map((stack) => (
                <button
                  key={stack.id}
                  onClick={() => setActiveTab(stack.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeTab === stack.id
                      ? "bg-white dark:bg-gray-800 text-primary-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  {stack.name}
                </button>
              ))}
            </div>
            <div className="bg-gray-900 p-6 relative">
              <pre className="m-0 overflow-x-auto text-sm leading-relaxed text-gray-300">
                <code>{TECH_STACKS.find((s) => s.id === activeTab).code}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="configuration">
          <h2>Configuration</h2>
          <p>
            Customize the look and behavior of your widget using URL query
            parameters.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="py-3 font-semibold">Parameter</th>
                  <th className="py-3 font-semibold">Values</th>
                  <th className="py-3 font-semibold">Default</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-900">
                <tr id="positioning">
                  <td className="py-4 font-mono text-sm">position</td>
                  <td className="py-4 text-sm text-gray-600 dark:text-gray-400">
                    <code>left</code>, <code>right</code>
                  </td>
                  <td className="py-4 text-sm">
                    <code>right</code>
                  </td>
                </tr>
                <tr id="theming">
                  <td className="py-4 font-mono text-sm">theme</td>
                  <td className="py-4 text-sm text-gray-600 dark:text-gray-400">
                    <code>light</code>, <code>dark</code>
                  </td>
                  <td className="py-4 text-sm">
                    <code>light</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 rounded-lg p-6 my-12">
          <h4 className="text-primary-800 dark:text-primary-300 font-semibold mt-0 mb-2">
            Branding Note
          </h4>
          <p className="text-primary-700 dark:text-primary-400 mb-0">
            LiveChat is proudly <strong>Powered by SynapseChat</strong>. Please
            ensure all integrations respect the brand guidelines found in our
            assets folder.
          </p>
        </div>
      </main>
    </div>
  );
}
