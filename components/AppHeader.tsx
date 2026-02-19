'use client';

import Link from 'next/link';
import { useUserStore } from '@/stores/userStore';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function AppHeader() {
  const { isLogin, userInfo, logout } = useUserStore();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogout = () => {
    setShowLogoutConfirm(false);
    setShowUserMenu(false);
    logout();
  };

  return (
    <>
      <header
        className={`w-full sticky top-0 z-50 border-b border-gray-200 transition-all ${
          scrolled ? 'shadow-sm bg-white/80 backdrop-blur' : 'bg-white/70 backdrop-blur'
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐶</span>
            <Link href="/" className="text-xl font-semibold text-gray-900">
              面试汪
            </Link>
            <span className="hidden sm:inline-block text-xs text-gray-500 translate-y-px">
              押题·模拟·行测 三位一体
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link
              href="/interview/start"
              className={`transition-colors ${
                pathname === '/interview/start' ? 'text-gray-900 font-bold' : 'hover:text-gray-900'
              }`}
            >
              开启 AI 服务
            </Link>
            <Link
              href="/history"
              className={`transition-colors ${
                pathname === '/history' ? 'text-gray-900 font-bold' : 'hover:text-gray-900'
              }`}
            >
              服务记录
            </Link>
            <Link
              href="/profile?tab=redeem"
              className={`transition-colors ${
                pathname === '/profile' ? 'text-gray-900 font-bold' : 'hover:text-gray-900'
              }`}
            >
              兑换服务
            </Link>
            <Link
              href="/faq"
              className={`transition-colors ${
                pathname === '/faq' ? 'text-gray-900 font-bold' : 'hover:text-gray-900'
              }`}
            >
              常见问题
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                pathname === '/contact' ? 'text-gray-900 font-bold' : 'hover:text-gray-900'
              }`}
            >
              联系我们
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            {!isLogin ? (
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                登录
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    {userInfo?.username?.[0]?.toUpperCase() || 'U'}
                  </div>
                  <span>{userInfo?.username || '未命名用户'}</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setShowUserMenu(false)}
                    >
                      个人中心
                    </Link>
                    <Link
                      href="/history"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setShowUserMenu(false)}
                    >
                      服务记录
                    </Link>
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        setShowLogoutConfirm(true);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      退出登录
                    </button>
                  </div>
                )}
              </div>
            )}
            <a
              href={`https://www.lgdsunday.club${isLogin && userInfo ? `?token=${localStorage.getItem('token')}` : ''}`}
              className="text-xs inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700 transition-all font-medium border border-green-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>免费制作简历（简历汪）</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* 退出登录确认弹窗 */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowLogoutConfirm(false)}>
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">确认退出</h3>
            <p className="text-gray-600 mb-6">是否确定退出当前账号？未保存的面试进度可能不会保留。</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              >
                确定退出
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
