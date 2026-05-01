"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { MessageSquareText, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary-600 text-white p-1.5 rounded-lg group-hover:bg-primary-700 transition-colors">
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
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
          >
            Log in
          </Link>
          <Button href="/signup" variant="primary">
            Start Free Trial
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-gray-600 dark:text-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-lg px-4 py-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            >
              Log in
            </Link>
            <Button
              href="/signup"
              variant="primary"
              className="w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
