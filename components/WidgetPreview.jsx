"use client";
import { useState } from "react";
import {
  MessageSquareText,
  Send,
  X,
  Bot,
  User,
  Paperclip,
  MoreHorizontal,
} from "lucide-react";

export default function WidgetPreview() {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hi there! 👋 Welcome to LiveChat. How can I help you today?",
    },
    { id: 2, type: "user", text: "Im looking for pricing information." },
    {
      id: 3,
      type: "bot",
      text: "I can help with that! Our pricing starts at $29/mo for the Starter plan. Would you like me to compare all our plans?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChatHistory([
      ...chatHistory,
      { id: Date.now(), type: "user", text: message },
    ]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: "bot",
          text: "Thanks for your message! Our human agents are currently reviewing your request.",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="relative w-full max-w-[380px] mx-auto h-[600px] bg-gray-50 dark:bg-gray-900 rounded-[2rem] border-8 border-gray-200 dark:border-gray-800 overflow-hidden shadow-2xl flex flex-col justify-end p-4">
      {/* Fake Background Website content */}
      <div className="absolute inset-0 p-6 opacity-30 pointer-events-none">
        <div className="w-1/2 h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
        <div className="w-full h-4 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
        <div className="w-full h-4 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
        <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded mb-8"></div>
        <div className="w-full h-32 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
      </div>

      {/* The Widget */}
      {isOpen ? (
        <div className="relative z-10 w-full h-[450px] bg-white dark:bg-gray-950 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-primary-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm">LiveChat AI Support</h4>
                <p className="text-xs text-primary-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>{" "}
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50/50 dark:bg-gray-900/50 space-y-4">
            {chatHistory.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} gap-2`}
              >
                {msg.type === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 flex-shrink-0 flex items-center justify-center mt-1">
                    <Bot
                      size={12}
                      className="text-primary-600 dark:text-primary-400"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                    msg.type === "user"
                      ? "bg-primary-600 text-white rounded-tr-sm"
                      : "bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-tl-sm text-gray-800 dark:text-gray-200 shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
            <form onSubmit={handleSend} className="flex items-center gap-2">
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600"
              >
                <Paperclip size={18} />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-50 dark:bg-gray-900 border-none rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <Send size={14} className="ml-0.5" />
              </button>
            </form>
            <div className="text-center mt-2">
              <span className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                Powered by{" "}
                <MessageSquareText size={10} className="text-primary-500" />{" "}
                Synapse
              </span>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="absolute bottom-4 right-4 w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-700 transition-transform hover:scale-105 active:scale-95"
        >
          <MessageSquareText size={28} />
        </button>
      )}
    </div>
  );
}
