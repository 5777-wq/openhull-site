#!/usr/bin/env bash
# OpenHull 官网 Cloudflare Pages 部署：wrangler 直传静态目录
# 排除开发文件：.git/tools/部署脚本不入站
# （腾讯服务器通道 2026-10-02 退役——安全组未放行 80，从未公开上线）
# 用法一（推荐，一次性）：先 `npx wrangler login` 完成浏览器授权
# 用法二（CI/免交互）：export CLOUDFLARE_API_TOKEN=<Pages:Edit token>
# 之后：bash deploy-cloudflare.sh
set -euo pipefail
cd "$(dirname "$0")"
STAGING="$(mktemp -d)/site"
mkdir -p "$STAGING"
tar cf - \
  --exclude=./.git \
  --exclude=./tools \
  --exclude=./deploy.sh \
  --exclude=./deploy-cloudflare.sh \
  --exclude=./.assetsignore \
  --exclude=./.gitignore \
  . | tar xf - -C "$STAGING"
npx -y wrangler@latest pages deploy "$STAGING" \
  --project-name=openhull --branch=main --commit-dirty=true
rm -rf "$(dirname "$STAGING")"
echo "线上地址：https://openhull.pages.dev"
