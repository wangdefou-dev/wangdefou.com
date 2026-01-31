# 个人品牌网站构建规划 (Vite + React 版)

## 1. 核心目标与定位
打造一个展示“超级个体”形象的现代化个人网站，结合 Zephyr 的“方法论/服务输出”和 Leo Bai 的“数据/结果导向”风格。

*   **核心关键词**: AI 实战、产品构建、流量增长、超级个体。
*   **视觉风格**: 极简主义 (Minimalism)、科技感、黑白灰为主，强调排版和微交互。

## 2. 页面架构 (Site Map)
采用 **React 单页应用 (SPA)** 结构，支持平滑滚动导航。

### 2.1 Hero Section (首屏)
*   **元素**:
    *   **大标题 (H1)**: 强有力的 Slogan，例如 "Building the Future with AI & Product Thinking"。
    *   **副标题**: 简短介绍，如 "AI Product Manager | Indie Hacker | Content Creator"。
    *   **CTA 按钮**: "View My Work" (跳转作品) & "Get in Touch" (跳转联系)。
    *   **视觉重心**: 右侧放置个人形象照（或抽象 3D/几何图形），左侧文字。
    *   **动态效果**: 文字渐入动画 (Framer Motion)。

### 2.2 About Section (关于我)
*   **布局**: 左右分栏或居中叙述。
*   **内容**:
    *   **个人标签**: 类似于 Zephyr 的标签云 (e.g., INTP, AI Explorer, 0-1 Builder)。
    *   **简短传记**: 讲述转型经历、核心理念。
    *   **技能栈 (Tech Stack)**: 动态滚动的图标墙 (React, TypeScript, AI Tools, Growth Hacking)。

### 2.3 Projects / Portfolio (作品展示) - 参考 Leo Bai
*   **布局**: Bento Grid (便当盒式网格布局) 或 卡片列表。
*   **卡片内容**:
    *   **项目名称 & 图标**。
    *   **核心数据/结果**: 高亮显示，如 "30天获客10k+", "ARR $5k"。
    *   **一句话描述**。
    *   **技术/领域标签**: (e.g., AI, Crypto, SaaS)。
    *   **链接**: Demo & Case Study。

### 2.4 Services (提供的服务) - 参考 Zephyr
*   **布局**: 三列式卡片。
*   **内容示例**:
    *   **AI 产品咨询**: 落地方法论、转型指导。
    *   **MVP 开发**: 快速构建、技术选型。
    *   **流量增长**: 社交媒体冷启动策略。

### 2.5 Contact & Social Proof
*   **Testimonials (可选)**: 客户或合作伙伴的评价。
*   **Footer**:
    *   大号文字链接: "Let's work together."
    *   社交媒体图标: X (Twitter), GitHub, WeChat, Email。
    *   版权信息。

## 3. 技术栈选型 (更新版)
*   **构建工具**: **Vite** (极速、轻量)
*   **核心库**: **React 18+**
*   **语言**: **TypeScript**
*   **样式**: **TailwindCSS** (原子化 CSS)
*   **UI 组件**: 手写或使用 Radix UI Primitives (保证轻量且高定制)
*   **动画**: **Framer Motion** (处理复杂的进入和滚动动画)
*   **图标**: **Lucide React**
*   **部署**: Vercel / Netlify / GitHub Pages (静态托管)

## 4. 开发步骤
1.  **初始化**: 使用 Vite 创建 React + TypeScript 项目，配置 TailwindCSS。
2.  **组件开发**: 构建基础 UI 组件 (Button, Card, SectionContainer)。
3.  **页面组装**:
    *   **Header/Navbar**: 响应式导航栏，支持滚动跳转。
    *   **Hero**: 实现首屏视觉冲击。
    *   **Features/About**: 个人介绍与技能。
    *   **Portfolio**: 项目展示网格。
    *   **Services**: 服务卡片。
    *   **Footer**: 联系方式。
4.  **内容填充**: 填入您的真实文案和链接。
5.  **优化**: 移动端适配、SEO Meta 标签 (通过 React Helmet)、性能优化。
