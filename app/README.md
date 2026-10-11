# 孙学实践基地 — SUN STUDIES

> 孙哥，播客听完了，网站已经上线了。
> I Listened. I Learned. I Shipped.

一个年轻人听完四小时播客后，决定不再只做笔记，而是打开 AI，亲手搭建一个网站。
项目主题：**AI × Health × Learning × Action**。

本站为独立个人学习与创意实践项目，与孙宇晨及其关联企业、项目不存在官方合作或授权关系。内容不构成投资或医疗建议。

---

## 技术栈

- **Astro 5**（静态站点生成，输出纯静态文件）
- **TypeScript**（strict 模式）
- **Tailwind CSS 4**（通过 `@tailwindcss/vite` 集成）
- 部署目标：**Cloudflare Pages**（无需数据库、无需付费服务器）

## 本地开发

```bash
npm install        # 安装依赖
npm run dev        # 本地开发，默认 http://localhost:4321
npm run build      # 生产构建，输出到 dist/
npm run preview    # 本地预览构建结果
```

## 项目结构

```
sun-studies/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/        # 8 个页面区块 + 导航
│   │   ├── Nav.astro
│   │   ├── Hero.astro         # 01 首屏
│   │   ├── Dashboard.astro    # 02 项目仪表盘
│   │   ├── Lessons.astro      # 03 孙学第一课
│   │   ├── Timeline.astro     # 04 AI 实践日志
│   │   ├── HealthLab.astro    # 05 大健康实验室
│   │   ├── Domains.astro      # 06 四个域名
│   │   ├── Contact.astro      # 07 合作与收购
│   │   └── Footer.astro       # 08 页脚
│   ├── config/
│   │   └── domains.ts     # ★ 多域名品牌配置（唯一数据源）+ 联系邮箱
│   ├── data/
│   │   └── timeline.ts    # ★ 实践日志数据（更新日志只改这里）
│   ├── layouts/
│   │   └── Layout.astro   # 全局布局 + SEO meta + 入场动画
│   ├── pages/
│   │   └── index.astro    # 单页入口 + 域名切换脚本
│   └── styles/
│       └── global.css     # Tailwind 主题与设计系统
├── astro.config.mjs
├── package.json
└── README.md
```

## 多域名机制

四个域名共用同一套代码：

| 域名 | 品牌副标题 |
| --- | --- |
| sunwukong.health | 孙悟空健康实验室（主域名） |
| suwukong.health | 创意与健康实验 |
| boji.health | 运动、训练与健康 |
| dashui.health | 睡眠、恢复与健康 |

- 品牌配置集中在 `src/config/domains.ts`，运行时按 `window.location.hostname` 切换导航、Hero 品牌条与页脚的品牌名/副标题，并同步页面标题。
- 新增域名：在 `domainConfig` 里加一条记录即可，无需改动任何组件。
- SEO 收敛：`astro.config.mjs` 的 `site` 与页面 canonical 均指向主域名 `sunwukong.health`，避免四个域名内容重复导致的收录竞争。其余域名保留品牌访问功能。

## 联系邮箱配置

`src/config/domains.ts` 中的 `CONTACT_EMAIL`（默认 `hi@sunwukong.health`）是"提交合作意向 / 咨询域名购买"两个按钮的收件地址，采用 mailto 方案。
建议通过 **Cloudflare Email Routing**（免费）把该地址转发到你的真实邮箱，或直接在配置里改成其他地址。

## 部署到 Cloudflare Pages（绑定四个 Dynadot 域名）

1. **推送代码到 GitHub**
   ```bash
   git init && git add -A && git commit -m "feat: sun studies v1"
   git remote add origin <你的仓库地址> && git push -u origin main
   ```
2. **创建 Pages 项目**：Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git，选择仓库。
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - 之后每次 push 到 main 都会自动部署。
3. **把域名迁入 Cloudflare DNS**（Pages 自定义域名要求域名使用 Cloudflare 作为 DNS）：
   - 在 Cloudflare 添加站点 `sunwukong.health`，按提示到 Dynadot 后台把 NS 记录改为 Cloudflare 分配的两个 nameserver（Dynadot → 域名管理 → DNS Settings → Name Servers）。
   - 其余三个域名重复同样操作。
4. **绑定自定义域名**：Pages 项目 → Custom domains → Set up a domain，依次添加四个域名。Cloudflare 会自动签发 HTTPS 证书并开启强制 HTTPS。
5. **访问策略**：四个域名都直接指向同一个 Pages 项目，**不做跳转**，保留访问者输入的原始域名，前端按 hostname 显示对应品牌。搜索引擎通过 canonical 统一收录主域名。

> 说明：本项目交付的是代码与构建产物；实际部署需要你自己的 Cloudflare 账户操作，以上步骤即为完整教程。

## 验收清单

- [x] 首页完整展示 8 个内容区块
- [x] 现代科技感 + 适度幽默，无虚构融资/合作/背书
- [x] 桌面 / 平板 / 手机响应式，支持 `prefers-reduced-motion`
- [x] 四个域名共用一套代码，品牌配置集中可改
- [x] 联系按钮为真实可用的 mailto（邮箱集中在配置中）
- [x] SEO：title / description / OG / favicon / canonical / 语义化 HTML
- [x] `npm run build` 通过，产物可直接部署 Cloudflare Pages

---

项目精神：**孙哥，我没有先融资。我先把网站部署了。**
