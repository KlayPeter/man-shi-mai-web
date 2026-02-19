'use client';

import { useState } from 'react';

export default function FeedbackButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleFeedback = () => {
    window.open('https://txc.qq.com/products/771442', '_blank');
  };

  return (
    <div className="fixed right-0 bottom-24 z-50">
      <button
        onClick={handleFeedback}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white border-none rounded-l-full py-3 px-5 cursor-pointer shadow-lg shadow-purple-500/30 transition-all duration-300 font-medium text-sm ${
          isHovered ? 'translate-x-0' : 'translate-x-[calc(100%-48px)]'
        } hover:shadow-xl hover:shadow-purple-500/40`}
      >
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
        <span className={`whitespace-nowrap transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          反馈
        </span>
      </button>
    </div>
  );
}
