'use client';

import { useUIStore } from '@/stores/uiStore';
import { useRouter } from 'next/navigation';

export default function AuthPromptModal() {
  const { authPromptOpen, hideAuthPrompt, authRedirectPath } = useUIStore();
  const router = useRouter();

  if (!authPromptOpen) return null;

  const handleLogin = () => {
    hideAuthPrompt();
    router.push(`/login?redirect=${encodeURIComponent(authRedirectPath)}`);
  };

  const handleCancel = () => {
    hideAuthPrompt();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={handleCancel}>
      <div className="bg-white rounded-lg max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 space-y-6">
          {/* 图标和标题 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">需要登录</h2>
            <p className="text-sm text-gray-600">
              此功能需要登录后才能使用，请先登录您的账号
            </p>
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleLogin}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              立即登录
            </button>
            <button
              onClick={handleCancel}
              className="w-full px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
