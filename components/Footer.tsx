'use client';

import Link from 'next/link';

export default function Footer() {
  const copyWeChat = async () => {
    const wechatId = 'LGD_Sunday';
    try {
      await navigator.clipboard.writeText(wechatId);
      alert('微信号已复制到剪贴板');
    } catch (err) {
      alert('复制失败，请手动复制：' + wechatId);
    }
  };

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* 关于我们 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">关于我们</h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-base font-semibold text-gray-900">面试汪</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              极简三步，完成 AI 面试。专业的 AI 面试平台，帮助您更好地准备面试。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/interview/start" className="text-gray-600 hover:text-gray-900 transition-colors">
                  开始 AI 面试
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                  常见问题
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  联系我们
                </Link>
              </li>
              <li>
                <a
                  href="https://www.lgdsunday.club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
                >
                  简历汪
                </a>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">联系我们</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-600">
                <span>微信：</span>
                <button
                  onClick={copyWeChat}
                  className="font-mono hover:text-gray-900 transition-colors"
                >
                  LGD_Sunday
                </button>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <a
                  href="mailto:lgd_sunday@163.com"
                  className="font-mono hover:text-gray-900 transition-colors"
                >
                  lgd_sunday@163.com
                </a>
              </li>
            </ul>
          </div>

          {/* 相关产品 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">相关产品</h3>
            <a
              href="https://www.lgdsunday.club/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                📄
              </div>
              <div>
                <div className="font-semibold text-gray-900">简历汪</div>
                <div className="text-xs text-gray-500">免费在线制作简历</div>
              </div>
            </a>
          </div>
        </div>

        {/* 分割线 */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>© {new Date().getFullYear()} 面试汪 · AI 面试平台</p>
              <span className="hidden md:inline">|</span>
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 transition-colors"
              >
                鲁 ICP 备 2025206060 号-1
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/agreement" className="hover:text-gray-700 transition-colors">
                用户协议
              </Link>
              <span>|</span>
              <Link href="/policy" className="hover:text-gray-700 transition-colors">
                隐私政策
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
