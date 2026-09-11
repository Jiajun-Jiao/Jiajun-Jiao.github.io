# jiajun-jiao.github.io

Personal website of Jiajun Jiao, a single-page static site built with
[Astro](https://astro.build) and deployed to GitHub Pages via GitHub Actions.

## ✏️ 怎么改内容 · Editing content

**所有内容都在一个文件里:[`src/data/site.yaml`](src/data/site.yaml)。**

改简介、换工作、加论文、加项目,只需要编辑这个 YAML 文件,push 到
`master`,GitHub Actions 会自动构建发布,一两分钟后生效。

| 想改什么 | 改哪个文件 |
| --- | --- |
| 文字内容(简介 / 经历 / 论文 / 项目 / 教学…) | `src/data/site.yaml` |
| 头像 | 替换 `public/profile.jpg` |
| 配色、字体、间距 | `src/styles/global.css`(顶部的 CSS 变量) |
| 页面结构、版块顺序、左侧导航 | `src/pages/index.astro` |
| SEO 标签、主题切换按钮 | `src/layouts/Base.astro` |
| Google Analytics 统计 ID | `src/data/site.yaml` → `analytics.googleAnalyticsId` |
| 旧链接跳转规则 | `astro.config.mjs` 里的 `redirects` |

## Local development

```bash
npm install     # first time only
npm run dev     # live-reload dev server at http://localhost:4321
npm run build   # production build into dist/
npm run preview # serve the production build locally
```

## Deployment

Every push to `master` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds
the site and publishes it to GitHub Pages.

> One-time repo setting: **Settings → Pages → Build and deployment → Source**
> must be set to **GitHub Actions** (not "Deploy from a branch").

## 访问统计 · Google Analytics 4

使用 [Google Analytics 标准版](https://marketingplatform.google.com/about/analytics/)，免费。
统计 ID 配置在 `analytics.googleAnalyticsId`，留空时不加载统计脚本。

1. 登录 [Google Analytics](https://analytics.google.com/)，创建账号和 GA4 媒体资源（Property）。
2. 创建 **Web / 网站** 数据流，网站地址填 `https://jiajun-jiao.github.io`。
3. 保持 **Enhanced measurement / 增强型衡量** 开启，以统计外链点击和文件下载链接点击。
4. 复制数据流中的 **Measurement ID / 衡量 ID**（`G-` 开头），填入
   `src/data/site.yaml` 的 `analytics.googleAnalyticsId`。
5. Push 到 `master`，等待 GitHub Actions 发布成功。
6. 打开线上网站，在 GA 的 **Realtime / 实时** 报告里确认有访问。
   常规报表可能需要 24–48 小时才显示数据。

可以查看访问量、访客数、来源及大致国家/地区/城市；GA4 不提供访客完整 IP 或具体住址。
外链和文件下载事件表示链接被点击，不保证下载完成。统计只从启用后开始，无法补回历史访问。

代码只在生产构建且访问地址与 `astro.config.mjs` 中的 `site` 相符时加载统计，
本地开发和预览不会发送数据。Google signals 和广告个性化信号已关闭。
将 ID 改回空字符串并重新发布即可关闭统计。

参考：[获取 Measurement ID](https://support.google.com/analytics/answer/12270356?hl=en) ·
[增强型衡量](https://support.google.com/analytics/answer/9216061?hl=en) ·
[数据处理时间](https://support.google.com/analytics/answer/11198161?hl=en)

## Notes

- Old Jekyll-era URLs (`/cv/`, `/publications/`, `/talks/`, `/teaching/`,
  individual publication pages) redirect to the matching sections of the new
  single-page layout — configured in `astro.config.mjs`.
- The previous academicpages/Jekyll version of this site lives in git history
  (everything before the "rebuild with Astro" commit).
