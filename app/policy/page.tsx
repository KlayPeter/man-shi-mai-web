import DefaultLayout from '@/components/DefaultLayout';

export default function PolicyPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">隐私政策</h1>
          <div className="bg-white rounded-lg shadow-md p-8 prose max-w-none">
            <h2>1. 信息收集</h2>
            <p>我们收集必要的用户信息以提供服务。</p>
            <h2>2. 信息使用</h2>
            <p>用户信息仅用于提供和改进服务。</p>
            <h2>3. 信息保护</h2>
            <p>我们采用企业级加密技术保护用户数据安全。</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
