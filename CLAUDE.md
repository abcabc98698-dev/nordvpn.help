# CLAUDE.md

This file gives AI coding assistants the working context and conventions needed when editing this repository.

## Project

NordVPN 官方授权专线网络官网落地页 (nordvpn.help) — 企业级 IEPL 专线 & VLESS 极速节点。
项目目标为建立权威、安全、专业的品牌官方授权门户形象，最大化注册与套餐选购转化率，并保护全站 SEO 权重不流失。

统一注册链接：`https://sahude.gsyvipaff.com/#/?code=keqgvT5Y`（必须携带 `rel="nofollow noopener noreferrer"`）。

## Current Stack

| Layer | Choice |
| --- | --- |
| Framework | Astro 6 (Content Layer) |
| Styling | Tailwind CSS v4 with `@theme` tokens |
| Content | MDX, `@astrojs/mdx` |
| Icons | `@lucide/astro` |
| SEO | `@astrojs/sitemap`, `@astrojs/rss`, JSON-LD Schema, robots.txt |
| Type checking | TypeScript, `astro check` |

## Commands

```bash
pnpm install
pnpm dev --host
pnpm build
pnpm preview
```
