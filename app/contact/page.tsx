import DefaultLayout from '@/components/DefaultLayout';

export default function ContactPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">联系我们</h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">微信</h3>
                <p className="text-gray-600">LGD_Sunday</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">邮箱</h3>
                <p className="text-gray-600">lgd_sunday@163.com</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">工作时间</h3>
                <p className="text-gray-600">周一至周五 9:00-18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
