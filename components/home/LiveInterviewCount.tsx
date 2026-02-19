'use client';

import { useState, useEffect } from 'react';

export default function LiveInterviewCount() {
  const [count, setCount] = useState<number | null>(null);
  const [countUpdated, setCountUpdated] = useState(false);

  useEffect(() => {
    // 模拟获取在线人数
    const fetchData = async () => {
      try {
        // 这里应该调用实际的 API
        // const response = await getMockInterviewCountAPI();
        // setCount(response.count);
        
        // 模拟数据
        const newCount = Math.floor(Math.random() * 50) + 120;
        
        if (count !== null && count !== newCount) {
          setCountUpdated(true);
          setTimeout(() => {
            setCountUpdated(false);
          }, 600);
        }
        
        setCount(newCount);
      } catch (err) {
        console.error('获取模拟面试人数失败:', err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // 30秒刷新一次

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white/90 backdrop-blur-sm px-6 py-3 shadow-lg shadow-gray-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-200/30 hover:-translate-y-1">
      {/* 背景装饰 */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-green-400/10 blur-2xl transition-all duration-500 group-hover:bg-green-400/20"></div>
      <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-emerald-400/10 blur-xl transition-all duration-500 group-hover:bg-emerald-400/20"></div>

      <div className="relative flex justify-between">
        {/* 标题和图标 */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">实时在线</p>
            <p className="text-xs text-gray-400">正在模拟面试</p>
          </div>
        </div>

        {/* 数字展示 */}
        <div>
          {count !== null ? (
            <div className={`flex items-baseline gap-2 ${countUpdated ? 'animate-pulse' : ''}`}>
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 transition-all duration-300">
                {count}
              </span>
              <span className="text-sm font-semibold text-gray-500">位同学</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="h-10 w-20 animate-pulse rounded-lg bg-gradient-to-r from-gray-200 to-gray-100"></div>
              <span className="text-sm text-gray-400">加载中...</span>
            </div>
          )}
        </div>
      </div>

      {/* 装饰性边框动画 */}
      <div className="absolute inset-0 rounded-2xl border-2 border-green-500/0 transition-all duration-300 group-hover:border-green-500/20"></div>
    </div>
  );
}
