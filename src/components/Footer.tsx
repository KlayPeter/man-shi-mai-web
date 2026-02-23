'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SvgIcon from '@/components/SvgIcon'
import Icon from '@/components/ui/Icon'

export default function Footer() {
  const [copySuccess, setCopySuccess] = useState(false)

  const copyWeChat = async () => {
    const wechatId = 'LGD_Sunday'
    try {
      await navigator.clipboard.writeText(wechatId)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      const textArea = document.createElement('textarea')
      textArea.value = wechatId
      textArea.style.position = 'fixed'
      textArea.style.opacity = '0'
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
      } catch (fallbackErr) {
        alert('复制失败，请手动复制：' + wechatId)
      }
      document.body.removeChild(textArea)
    }
  }

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">关于我们</h3>
            <div className="flex items-center gap-2 mb-3">
              <SvgIcon name="hero" className="h-6 w-6" />
              <span className="text-base font-semibold text-neutral-900">面试麦</span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              极简三步，完成 AI 面试。专业的 AI 面试平台，帮助您更好地准备面试。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/interview/start" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  开始 AI 面试
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  常见问题
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  联系我们
                </Link>
              </li>
              <li>
                <a
                  href="https://www.lgdsunday.club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors inline-flex items-center gap-1"
                >
                  简历汪
                  <Icon name="i-heroicons-arrow-top-right-on-square" className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">联系我们</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-neutral-600">
                <Icon name="i-heroicons-chat-bubble-left-right" className="w-4 h-4 text-green-600 shrink-0" />
                <span>微信：</span>
                <button
                  onClick={copyWeChat}
                  className="font-mono hover:text-neutral-900 transition-colors"
                >
                  LGD_Sunday
                </button>
                {copySuccess && <span className="text-green-600 text-xs">已复制</span>}
              </li>
              <li className="flex items-center gap-2 text-neutral-600">
                <Icon name="i-heroicons-envelope" className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="mailto:lgd_sunday@163.com" className="font-mono hover:text-neutral-900 transition-colors">
                  lgd_sunday@163.com
                </a>
              </li>
              <li className="relative flex items-start gap-2 text-neutral-600 group">
                <Icon name="i-heroicons-qr-code" className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span className="cursor-pointer">关注公众号获取更多信息</span>
                <div className="absolute bottom-full left-0 mb-2 opacity-0 transition-all duration-200 z-50 w-[520px] invisible group-hover:opacity-100 group-hover:visible">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-3">
                    <Image
                      src="/sunday-gong-zhong-hao.png"
                      alt="微信公众号二维码"
                      width={520}
                      height={520}
                      className="w-[520px] object-contain"
                    />
                    <p className="text-xs text-center text-neutral-600 mt-2 whitespace-nowrap">
                      扫码关注公众号
                    </p>
                  </div>
                  <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-200"></div>
                  <div className="absolute top-full left-4 -mt-px w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">相关产品</h3>
            <a
              href="https://www.lgdsunday.club/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                <Icon name="i-heroicons-document-text" className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="font-semibold text-neutral-900">简历汪</div>
                <div className="text-xs text-neutral-500">免费在线制作简历</div>
              </div>
              <Icon name="i-heroicons-arrow-top-right-on-square" className="w-4 h-4 ml-auto text-neutral-400 group-hover:text-neutral-600" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>© {new Date().getFullYear()} 面试麦 · AI 面试平台</p>
              <span className="hidden md:inline">|</span>
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-700 transition-colors"
              >
                鲁 ICP 备 2025206060 号-1
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/agreement" className="hover:text-neutral-700 transition-colors">
                用户协议
              </Link>
              <span>|</span>
              <Link href="/policy" className="hover:text-neutral-700 transition-colors">
                隐私政策
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
