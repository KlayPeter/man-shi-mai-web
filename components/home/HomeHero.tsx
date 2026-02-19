'use client';

import Link from 'next/link';
import LiveInterviewCount from './LiveInterviewCount';

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-green-400/20 to-purple-400/20 blur-3xl opacity-60"></div>
        <div className="absolute top-[20%] -left-[10%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-emerald-400/20 to-sky-400/20 blur-3xl opacity-60"></div>
      </div>
      <div className="container mx-auto px-4 py-10 md:pb-22 relative">
        {/* 实时面试人数展示卡片 */}
        <div className="w-full max-w-sm mb-8">
          <LiveInterviewCount />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-xs font-medium text-green-700 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              押题 · 模拟 · 行测 · 三大服务全覆盖
            </div>

            <div className="mb-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-semibold shadow-lg shadow-emerald-500/30">
              🎁 新用户送 20 旺旺币，可兑换任意服务
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              全链路 AI 面试服务<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                从押题到实战，一站式搞定
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              面试汪提供
              <span className="font-semibold text-green-600">面试押题</span>、
              <span className="font-semibold text-green-600">专项面试模拟</span>、
              <span className="font-semibold text-green-600">行测+HR面试</span>
              三大核心服务。不同于市面上单一的 AI 面试工具，我们覆盖面试全流程，助你面试命中率提升超
              <span className="text-emerald-600 font-bold">80%</span>。
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/interview/start"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 shadow-lg shadow-green-500/20 transition-all"
              >
                立即体验三大面试服务
              </Link>
              <Link
                href="/#features"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
              >
                了解服务详情
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-blue-100/50 text-blue-600">
                  📄
                </div>
                <div>
                  <p className="font-semibold text-gray-700">面试押题</p>
                  <p className="text-xs text-gray-500">3分钟预测高频题</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-emerald-100/50 text-emerald-600">
                  ⚡
                </div>
                <div>
                  <p className="font-semibold text-gray-700">专项面试</p>
                  <p className="text-xs text-gray-500">1v1 实战模拟</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-purple-100/50 text-purple-600">
                  💬
                </div>
                <div>
                  <p className="font-semibold text-gray-700">行测+HR</p>
                  <p className="text-xs text-gray-500">综合素质评估</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex flex-col items-center justify-center gap-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white rounded-[2rem] transform rotate-3 scale-95 border border-gray-100"></div>

            <div className="relative w-full max-w-md bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl shadow-gray-200/50 overflow-hidden ring-1 ring-gray-900/5">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-white/50">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                  <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
                </div>
                <span className="text-xs font-medium text-gray-400">模拟面试 · 示例</span>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center text-green-600 ring-2 ring-white shadow-sm">
                    👤
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900">面试官</span>
                      <span className="text-xs text-gray-400">刚刚</span>
                    </div>
                    <div className="p-4 rounded-2xl rounded-tl-none bg-white border border-gray-100 shadow-sm text-gray-700 text-sm leading-relaxed">
                      请介绍一个你主导过的性能优化案例，包含指标与落地策略。
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center text-emerald-600 ring-2 ring-white shadow-sm">
                    ✨
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900">AI 面试助手</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-700">
                        评分 85
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl rounded-tl-none bg-emerald-50/50 border border-emerald-100/50 text-gray-700 text-sm leading-relaxed">
                      <p>
                        <span className="font-medium text-emerald-800">分析反馈：</span>
                        回答结构清晰，采用了 STAR 原则。但缺少量化指标（如 P95、错误率下降百分比）。
                      </p>
                      <div className="mt-3 flex gap-2">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-white text-emerald-600 border border-emerald-100">
                          建议补充数据
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-white text-emerald-600 border border-emerald-100">
                          增加对比
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-50 bg-gray-50/50">
                <div className="h-10 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center px-4 text-sm text-gray-400">
                  输入你的回答...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
