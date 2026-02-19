import DefaultLayout from '@/components/DefaultLayout';

export default function AgreementPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">用户协议</h1>
          <div className="bg-white rounded-lg shadow-md p-8 prose max-w-none">
            <h2>1. 服务条款</h2>
            <p>欢迎使用面试汪服务。请仔细阅读本协议。</p>
            <h2>2. 用户权利与义务</h2>
            <p>用户在使用本服务时，应遵守相关法律法规。</p>
            <h2>3. 隐私保护</h2>
            <p>我们重视用户隐私，详见隐私政策。</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
