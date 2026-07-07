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

## Notes

- Old Jekyll-era URLs (`/cv/`, `/publications/`, `/talks/`, `/teaching/`,
  individual publication pages) redirect to the matching sections of the new
  single-page layout — configured in `astro.config.mjs`.
- The previous academicpages/Jekyll version of this site lives in git history
  (everything before the "rebuild with Astro" commit).
