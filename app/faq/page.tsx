import DefaultLayout from '@/components/DefaultLayout';

export default function FAQPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">常见问题</h1>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">什么是面试汪？</h3>
              <p className="text-gray-600">
                面试汪是一个专业的 AI 面试平台，提供面试押题、专项面试模拟、行测+HR面试三大核心服务，帮助求职者更好地准备面试。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">如何开始使用？</h3>
              <p className="text-gray-600">
                注册账号后，上传你的简历和目标岗位 JD，选择你需要的服务类型，即可开始 AI 面试体验。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">服务如何收费？</h3>
              <p className="text-gray-600">
                新用户注册即送 20 旺旺币，可用于兑换任意服务。后续可通过充值获取更多旺旺币。
              </p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
