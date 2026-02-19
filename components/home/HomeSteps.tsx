export default function HomeSteps() {
  return (
    <section className="py-10 md:py-22 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            极简三步，开启 AI 面试
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            无需复杂配置，3 分钟即可开始你的第一次 AI 面试体验
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="relative text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">上传简历</h3>
            <p className="text-gray-600">
              上传你的简历和目标岗位 JD，AI 自动分析匹配
            </p>
          </div>
          <div className="relative text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">选择服务</h3>
            <p className="text-gray-600">
              选择押题、模拟或行测服务，开始你的面试准备
            </p>
          </div>
          <div className="relative text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">获取反馈</h3>
            <p className="text-gray-600">
              实时获取 AI 评估与改进建议，持续提升面试能力
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
