import DefaultLayout from '@/components/DefaultLayout';

export default function HistoryPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">面试历史</h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 text-center py-12">
              暂无面试记录，<a href="/interview/start" className="text-green-600 hover:underline">开始你的第一次面试</a>
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
