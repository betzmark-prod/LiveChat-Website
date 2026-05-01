import Link from "next/link";
import { MessageSquareText } from "lucide-react";
import { NAV_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary-600 text-white p-1.5 rounded-lg">
                <MessageSquareText size={20} className="fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none">
                  LiveChat
                </span>
                <span className="text-[9px] text-gray-500 font-bold tracking-wider mt-1 uppercase">
                  Powered by Synapse
                </span>
              </div>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
              The AI-powered embeddable chat widget that turns visitors into
              customers and automates support.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Product
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary-600 text-sm transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary-600 text-sm transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary-600 text-sm transition-colors"
                >
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary-600 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary-600 text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary-600 text-sm transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} LiveChat. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Social icons placeholder */}
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500">
              X
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500">
              in
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
