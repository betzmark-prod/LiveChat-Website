'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-white dark:bg-gray-950 transition-all duration-200"
          >
            <button
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              onClick={() => toggleItem(index)}
            >
              <span className="font-semibold text-gray-900 dark:text-gray-100">{item.question}</span>
              <ChevronDown 
                className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                size={20} 
              />
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
