#!/usr/bin/env bash
# OpenHull 官网 Cloudflare Pages 部署：wrangler 直传静态目录
# 排除与 deploy.sh（腾讯服务器）一致：.git/tools/部署脚本不入站
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
  --project-name=openhull-site --branch=main --commit-dirty=true
rm -rf "$(dirname "$STAGING")"
echo "线上地址：https://openhull-site.pages.dev"
