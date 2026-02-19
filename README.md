# 面试汪 - AI 面试平台 (Next.js)

这是面试汪的 Next.js 版本，基于 React 和 TypeScript 构建。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **状态管理**: Zustand
- **HTTP 客户端**: Axios
- **日期处理**: Day.js

## 项目结构

```
man-shi-web/
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── interview/         # 面试相关页面
│   ├── login/             # 登录页面
│   └── ...
├── components/            # React 组件
│   ├── home/             # 首页组件
│   ├── AppHeader.tsx     # 头部导航
│   ├── Footer.tsx        # 页脚
│   └── DefaultLayout.tsx # 默认布局
├── stores/               # Zustand 状态管理
│   ├── userStore.ts      # 用户状态
│   └── uiStore.ts        # UI 状态
├── api/                  # API 接口
│   ├── user.ts           # 用户相关接口
│   └── interview.ts      # 面试相关接口
├── lib/                  # 工具库
│   └── request.ts        # Axios 封装
├── constants/            # 常量配置
│   └── seo.ts            # SEO 配置
└── public/               # 静态资源

```

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm start
```

## 核心功能

### 三大核心服务

1. **面试押题** - 基于 JD 和简历智能预测高频面试题
2. **专项面试模拟** - 1v1 深度模拟面试训练
3. **行测+HR面试** - 综合素质全面评估

### 主要特性

- ✅ 响应式设计，支持移动端
- ✅ SEO 优化，完整的 meta 标签配置
- ✅ 用户认证与状态管理
- ✅ API 请求拦截与错误处理
- ✅ 像素级还原 Nuxt 版本设计

## 环境变量

创建 `.env.local` 文件：

```env
NEXT_PUBLIC_API_BASE_URL=/dev-api
NEXT_PUBLIC_RESUME_PREVIEW_URL=https://lgdsunday.club/
```

## API 代理配置

开发环境下，`/dev-api` 会被代理到 `http://localhost:8888`，配置在 `next.config.ts` 中。

## 与 Nuxt 版本的对应关系

| Nuxt 概念 | Next.js 对应 |
|----------|-------------|
| `pages/` | `app/` (App Router) |
| `components/` | `components/` |
| `composables/` | `hooks/` (自定义 hooks) |
| `stores/` (Pinia) | `stores/` (Zustand) |
| `plugins/` | `lib/` |
| `nuxt.config.js` | `next.config.ts` |
| `useRuntimeConfig()` | `process.env.NEXT_PUBLIC_*` |
| `useFetch()` | `axios` + custom hooks |

## 部署

### Vercel (推荐)

```bash
vercel
```

### 其他平台

```bash
npm run build
npm start
```

## License

MIT
