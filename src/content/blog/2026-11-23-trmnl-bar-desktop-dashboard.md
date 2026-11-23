---
title: "把 TRMNL 墨水屏看板搬到电脑上：TRMNL.Bar"
date: 2026-11-23
description: "TRMNL.Bar 是一个开源的 Metrix.Bar 扩展，可以把电脑变成 TRMNL 虚拟设备，也可以镜像已有设备的墨水屏画面。"
author: "姜一一"
tags:
  - TRMNL
  - 墨水屏
  - 开源项目
  - Metrix.Bar
---

# 把 TRMNL 墨水屏看板搬到电脑上：TRMNL.Bar

TRMNL 是一个开源的墨水屏看板系统。它可以把日历、天气、待办事项、服务器状态等信息整理成适合墨水屏阅读的页面，再通过设备显示出来。

最近看到一个挺有意思的开源项目：**[TRMNL.Bar](https://github.com/miantiao-me/TRMNL.Bar)**。它把 TRMNL 的看板带到了电脑桌面上，让原本显示在墨水屏设备上的内容，也可以直接在电脑上查看。

## 让电脑成为一台 TRMNL 设备

TRMNL.Bar 是运行在 [Metrix.Bar](https://metrix.bar/) 中的扩展。安装后，Metrix.Bar 可以作为一台虚拟设备连接到 TRMNL 服务端。

这样一来，即使手边没有 TRMNL 墨水屏硬件，也可以在电脑上查看服务端生成的看板画面。它连接的既可以是 TRMNL 官方服务，也可以是自己搭建的 TRMNL 服务端。

![TRMNL.Bar 在电脑上展示墨水屏看板的效果](https://i.134688.xyz/file/1795436632636_IMG_20261123_202203_269.webp)

## 不只是虚拟设备，也可以镜像已有设备

项目提供两种连接方式：

- **设备模式（Device）**：把 Metrix.Bar 当作一台新的虚拟设备，按照 TRMNL 服务端的播放列表显示内容。设备 ID 可以自动生成，也可以使用已经登记的 ID。
- **镜像模式（Mirror）**：读取已有 TRMNL 设备当前正在显示的画面。填入该设备的 Device API Key 后，就能在电脑上同步查看；默认每 300 秒刷新一次，也可以自行调整刷新间隔。

换句话说，如果你已经有一台 TRMNL 设备，可以把它当前的画面同步到电脑；如果没有实体设备，也可以直接把电脑作为虚拟设备接入服务端。

![电脑桌面上的 TRMNL 看板显示](https://i.134688.xyz/file/1795436634389_IMG_20261122_222313_292.webp)

## 安装和连接

项目提供了现成的 `.bar` 扩展文件，基本步骤并不复杂：

1. 从 [TRMNL.Bar 项目页面](https://github.com/miantiao-me/TRMNL.Bar)下载 `TRMNL.bar`。
2. 使用 Metrix.Bar 0.3.2 或更新版本，选择「导入 .bar…」并导入下载的文件。
3. 打开扩展设置，将 Server URL 设置为要连接的 TRMNL 服务端地址。默认地址是官方服务 `https://trmnl.com`；如果使用自建服务端，就填写自己的服务地址。
4. 根据需要选择 Device 或 Mirror 模式，再按服务端要求完成设备配对或填写设备令牌。

连接后，可以通过菜单栏中的 TRMNL 菜单查看状态、手动刷新或管理连接。网络下载失败时，程序会尽量保留上一次成功显示的画面；令牌失效后，也可以更新令牌再恢复刷新。

## 一个轻巧的桌面入口

我觉得这个项目有意思的地方，在于它没有重新发明一套看板系统，而是把 TRMNL 已经生成的画面接到了电脑上。

墨水屏看板原本更像一块独立的信息屏，现在多了一个桌面入口：可以用电脑预览自己的看板，也可以把已有设备的内容同步过来。对于正在使用 TRMNL 或自己搭建服务端的人来说，这是一个很实用的小工具。

项目采用 Apache-2.0 开源许可证，代码和安装文件都可以从 GitHub 获取。

**项目地址：** [miantiao-me/TRMNL.Bar](https://github.com/miantiao-me/TRMNL.Bar)

**相关项目：** [Metrix.Bar](https://metrix.bar/)
