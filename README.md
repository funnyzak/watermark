# Watermark
  
  [![Build Status][build-status-image]][build-status]
  [![Docker Pulls](https://img.shields.io/docker/pulls/funnyzak/watermark)](https://hub.docker.com/r/funnyzak/watermark/tags)
  [![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/funnyzak/watermark)](https://hub.docker.com/r/funnyzak/watermark/tags)
  
在线纯前端图片加水印, 拒绝上传保证个人信息安全。
用来在各种证件上添加 **”仅用于办理XXXX，他用无效。”**，防止证件被他人盗用！

## 预览

在线使用：[https://watermark.yycc.dev](https://watermark.yycc.dev)

![预览](https://cdn.jsdelivr.net/gh/funnyzak/watermark/.github/assets/preview.png)

## Docker部署

```bash
docker run -d -p 80:80 --name watermark funnyzak/watermark:latest
```

## Development

推荐使用 Node.js 14+ 版本。

```bash
# 克隆项目
git clone git@github.com:funnyzak/watermark.git && cd watermark
# 安装依赖并启动
yarn && yarn start
```

## CopyRight

Powered by [dxcweb/watermark](https://github.com/dxcweb/watermark)

[build-status-image]: https://github.com/funnyzak/watermark/actions/workflows/docker_build.yml/badge.svg
[build-status]: https://github.com/funnyzak/watermark/actions
