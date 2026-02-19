import DefaultLayout from '@/components/DefaultLayout';

export default function InterviewStartPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">开始 AI 面试</h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-4">
              选择你想要的面试服务类型，开始你的 AI 面试之旅。
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-500 transition-colors cursor-pointer">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-xl font-bold mb-2">面试押题</h3>
                <p className="text-gray-600 text-sm">3-5 分钟快速生成高频面试题</p>
              </div>
              <div className="border-2 border-emerald-200 rounded-lg p-6 hover:border-emerald-500 transition-colors cursor-pointer">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">专项面试</h3>
                <p className="text-gray-600 text-sm">1v1 深度模拟面试训练</p>
              </div>
              <div className="border-2 border-purple-200 rounded-lg p-6 hover:border-purple-500 transition-colors cursor-pointer">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-2">行测+HR</h3>
                <p className="text-gray-600 text-sm">综合素质全面评估</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
