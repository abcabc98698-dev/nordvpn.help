<div align="center">

# 🌐 NordVPN 品牌官方授权全球专线官网

**基于 Astro v6 + Tailwind CSS v4 构建的企业级专线网络独立品牌官网与高转化落地页**

[![Astro](https://img.shields.io/badge/Astro-v6.4.2-FF5D01.svg?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4.svg?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SLA](https://img.shields.io/badge/专线SLA-99.98%25-10B981.svg?style=flat-square)](#核心技术架构)
[![SEO](https://img.shields.io/badge/SEO健康度-100%2F100-3B82F6.svg?style=flat-square)](#搜索引擎优化与基础设施)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

[在线体验](https://nordvpn.help) · [套餐方案](https://nordvpn.help/pricing) · [专线监控](https://nordvpn.help/status) · [出海教程](https://nordvpn.help/blog) · [联系我们](https://nordvpn.help/contact)

</div>

---

## 📌 项目定位

本项目为 **NordVPN 品牌官方授权全球专线网络（nordvpn.help）** 的独立品牌门户网站。自 2020 年起稳定运营，聚焦企业级全链路 IEPL 物理专线与 VLESS 协议，全节点提供 ×1 真实倍率计费与单节点最高 2.5Gbps 带宽。

项目核心目标包括：
1. **树立严谨合规的官方品牌门户形象**，提供真实客观的线路参数与 SLA 运行监控。
2. **全流程引导与购买转化**，从套餐选型、30 秒快速开通到多端客户端一键导入。
3. **企业级出海与 AI 场景覆盖**，针对 OpenAI、Anthropic、TikTok 跨国直播、亚马逊电商运营等高防风控场景提供实战网络指南。
4. **全链路搜索引擎友好（SEO）与权重防流失设计**，通过纯静态 SSG 预渲染、规范化 Schema 结构化数据与外链属性实现技术加固。

---

## ⚡ 核心技术架构

```
┌────────────────────────────────────────────────────────┐
│               全球接入骨干与传输架构                  │
└────────────────────────────────────────────────────────┘
       │                                  │
       ▼                                  ▼
 客户端跨平台生态                  全链路物理骨干传输
 ├── 官方原生自研客户端            ├── 物理级 IEPL 内网专线
 └── 兼容 Clash / Shadowrocket     ├── 新一代 VLESS 现代协议
                                   └── 全节点 ×1 真实计费倍率
       │                                  │
       └────────────────┬─────────────────┘
                        ▼
                业务落地与场景解锁
 ├── AI 交互协同（OpenAI ChatGPT / Anthropic Claude）
 ├── 4K 海外流媒体（Netflix / Disney+ / YouTube Premium）
 └── 跨境出海合规作业（TikTok 直播带货 / 独立站社媒投放）
```

* **电信级 IEPL 物理专线**：绕开公网波动与海缆拥塞，保障晚高峰时段毫秒级时延抖动与零丢包。
* **原生住宅 IP 纯净度**：规避数据中心高欺诈分与机房 IP 污染，降低封号与访问受限概率。
* **全平台客户端覆盖**：支持 Windows、macOS、iOS、Android 与 Linux 原生自研客户端，同时兼容第三方订阅一键导入。

---

## 🧭 全站路由规范与页面导览

全站路由严格遵循小写英文语义化规范，无日期参数与动态随机 ID：

| 访问路由 | 页面功能定位 | 核心 SEO 标记 |
| :--- | :--- | :--- |
| `/` | 品牌官网首页，包含 Hero 实时遥测、专线特性、套餐卡片、流程演示与 FAQ | WebSite, Organization |
| `/pricing` | 官方认证套餐方案卡片、多周期折扣计算器与规格横向对比 | SoftwareApplication, AggregateOffer |
| `/features` | IEPL 物理专线、VLESS 协议与原生 IP 技术底层架构深度解析 | CollectionPage |
| `/status` | 全球节点 7×24 小时实时遥测监控与 99.98% SLA 服务可用性状态 | WebPage, LiveTelemetry |
| `/blog` | 官方技术教程与出海指南中心（支持分页与主题分类） | CollectionPage, BreadcrumbList |
| `/blog/iepl-vs-public-network` | 深度技术长文：IEPL 企业专线与普通公网中转底层原理与晚高峰实测 | Article, BreadcrumbList |
| `/blog/tiktok-ecommerce-crossborder` | 跨境出海实战：TikTok 海外直播与电商运营原生专线配置与 OBS 调优 | Article, BreadcrumbList |
| `/blog/chatgpt-claude-ip-guide` | AI 工具指南：ChatGPT 与 Claude 访问受限与 IP 风控三维模型解决方案 | Article, BreadcrumbList |
| `/blog/clash-shadowrocket-setup` | 跨平台指南：Clash Verge 与 Shadowrocket 小火箭一键订阅导入教程 | Article, BreadcrumbList |
| `/about` | 品牌授权资质、发展历程里程碑与安全运营准则 | AboutPage, Organization |
| `/contact` | 客户服务中心、工单提交系统与售前技术顾问通道 | ContactPage |
| `/changelog` | 专线骨干升级与客户端版本发布记录 | ItemList |
| `/privacy` | 严格无日志（No-Logs）隐私政策声明与数据主权保护条例 | WebPage |
| `/terms` | 服务条款与合理使用协议 | WebPage |
| `/sign-up` | 30 秒快速开通直达落地页 | WebPage |
| `/sign-in` | 专线管理中心登录页 | WebPage |

---

## 🛠️ 技术选型与工程亮点

* **核心框架**：[Astro v6.4.2](https://astro.build)（静态站点生成 SSG 模式，首屏零冗余 JavaScript，极速加载）
* **样式引擎**：[Tailwind CSS v4](https://tailwindcss.com)（基于 Vite 原生编译，深浅色主题自由切换）
* **内容系统**：Astro Content Collections + MDX（类型安全 Frontmatter，长文支持组件嵌入）
* **图标组件**：`@lucide/astro`（现代化高品质矢量图标体系）
* **动画与交互**：AOS（Animate On Scroll）页面平滑微交互
* **链接权重保护**：全站所有商业转化按钮统一由底层组件自动注入 `rel="nofollow sponsored noopener noreferrer"`，杜绝主站权重流失。

---

## 📈 搜索引擎优化与基础设施

本项目已通过系统化的技术 SEO 预防性审计与初始化，最终健康度为 **100 / 100（A+ 级）**：

* **规范域名统一**：全站所有 Canonical 规范链接、Open Graph、Twitter Card、RSS 与 Schema.org 均锁定唯一正式主域 `https://nordvpn.help/`。
* **Sitemap 双入口访问**：自动生成 `sitemap.xml` 与 `sitemap-index.xml`，仅收录 16 个正式可索引页面，自动剔除重定向中转页、测试页与分页重复项，携带动态 `<lastmod>`、优先级与更新频次。
* **主流爬虫全面兼容**：`robots.txt` 显式放行 Googlebot、Bingbot、Baiduspider 与 yisouspider，拦截开发测试目录。
* **站长平台验证挂钩预留**：公共 `<head>` 内建 Google Search Console、Bing Webmaster Tools、神马站长、百度资源平台验证接口，支持环境变量一键注入。
* **零元数据冲突**：全站所有独立页面拥有专属 Title、Description 与单一主要 H1 标签。

---

## 💻 本地开发与操作命令

确保本地环境已安装 Node.js (>= 22.12.0) 与 pnpm (>= 9.0.0)。

### 1. 克隆与安装依赖

```bash
git clone https://github.com/abcabc98698-dev/nordvpn.help.git
cd nordvpn.help
pnpm install
```

### 2. 启动本地开发服务

```bash
# 启动热更新服务，默认监听 5200 端口
pnpm dev

# 开启局域网主机访问，便于移动端真机调试
pnpm dev --host
```

### 3. 生产静态构建与产物预览

```bash
# 执行静态类型安全检查并构建静态 HTML 到 dist 目录
pnpm build

# 本地快速预览生成的生产构建产物
pnpm preview
```

---

## ⚙️ 环境变量配置

创建 `.env` 文件可覆盖默认站点配置与启用搜索引擎所有权验证：

```env
# 站点正式主域名（默认：https://nordvpn.help）
PUBLIC_SITE_URL=https://nordvpn.help

# Google Search Console 验证代码
PUBLIC_GOOGLE_SITE_VERIFICATION=

# Bing Webmaster Tools 验证代码
PUBLIC_BING_SITE_VERIFICATION=

# 百度搜索资源平台验证代码
PUBLIC_BAIDU_SITE_VERIFICATION=

# 神马站长平台验证代码
PUBLIC_SHENMA_SITE_VERIFICATION=
```

---

## 🚀 部署上线指南

构建产物位于 `dist/` 目录，可一键部署至各类主流静态托管环境：

### Cloudflare Pages（推荐）
* **构建命令**：`pnpm build`
* **输出目录**：`dist`
* **Node.js 版本**：`22.12.0`
* **建议规则**：在 Cloudflare Redirect Rules 中添加规则，将 `https://www.nordvpn.help/*` 301 重定向至 `https://nordvpn.help/$1`。

### Nginx 静态服务
```nginx
server {
    listen 80;
    server_name nordvpn.help www.nordvpn.help;
    return 301 https://nordvpn.help$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.nordvpn.help;
    # SSL 证书配置...
    return 301 https://nordvpn.help$request_uri;
}

server {
    listen 443 ssl http2;
    server_name nordvpn.help;
    # SSL 证书配置...

    root /var/www/nordvpn.help/dist;
    index index.html;

    error_page 404 /404.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # 静态资产长缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}
```

---

## 📄 开源许可证与声明

本项目基于 [MIT License](LICENSE) 许可证开源。站内展示的所有网络节点测评数据均来自工程架构团队在公网环境下的持续监测。
