'use client';

import DefaultLayout from '@/components/DefaultLayout';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { isLogin, userInfo } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push('/login');
    }
  }, [isLogin, router]);

  if (!isLogin) {
    return null;
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">个人中心</h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">用户信息</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">用户名：</span>
                    {userInfo?.username || '未设置'}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">邮箱：</span>
                    {userInfo?.email || '未设置'}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">旺旺币余额</h3>
                <p className="text-3xl font-bold text-green-600">20</p>
                <p className="text-sm text-gray-500 mt-1">可用于兑换面试服务</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
