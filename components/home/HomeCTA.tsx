import Link from 'next/link';

export default function HomeCTA() {
  return (
    <section className="py-10 md:py-22 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            准备好开始你的 AI 面试之旅了吗？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            新用户注册即送 20 旺旺币，立即体验三大核心服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/interview/start"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 shadow-lg shadow-green-500/30 transition-all"
            >
              立即开始免费体验
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
            >
              了解更多
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
