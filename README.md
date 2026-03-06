# ⏰ 倒计时工具

> 🎯 基于 HTML 的精美倒计时页面，支持自定义配置和多种主题

[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![HTML](https://img.shields.io/badge/HTML5-5.0-E34F26?style=flat-square&logo=html5)](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-3.0-1572B6?style=flat-square&logo=css3)](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

[![Demo](https://img.shields.io/badge/Demo-在线预览-24B362?style=for-the-badge)](https://lcean.github.io/Countdown/)

---

## 📖 简介

这是一个**轻量级、可定制的倒计时工具**，基于纯 HTML/CSS/JavaScript 开发，无需任何服务器或后端支持。适用于：

- 🎉 **节日倒计时** - 新年、春节、圣诞节等
- 🎂 **生日倒计时** - 重要纪念日
- 🚀 **项目上线** - 产品发布倒计时
- 📅 **活动提醒** - 会议、考试、旅行等
- ⏱️ **个人目标** - 健身、学习、戒烟等

---

## ✨ 功能特性

| 功能 | 说明 | 状态 |
|------|------|------|
| 🎨 **自定义主题** | 支持多种配色方案 | ✅ |
| ⏰ **精准计时** | 精确到秒的倒计时 | ✅ |
| 📱 **响应式设计** | 适配手机、平板、电脑 | ✅ |
| 🔧 **配置分离** | 独立 config.js 配置文件 | ✅ |
| 🎵 **动态效果** | 数字滚动、背景动画 | ✅ |
| 🌙 **夜间模式** | 自动/手动切换主题 | ✅ |
| 📢 **提醒功能** | 倒计时结束提示 | ✅ |

---

## 🚀 快速开始

### 方式一：直接使用

1. 下载本项目
2. 双击打开 `index.html`
3. 开始倒计时！

### 方式二：自定义时间

1. 编辑 `config.js` 文件
2. 修改 `targetDate` 为目标时间
3. 保存并刷新页面

```javascript
// config.js
const config = {
    targetDate: "2026-12-31 23:59:59",  // 目标时间
    title: "新年倒计时",                // 标题
    message: "距离新年还有"              // 提示语
};
```

---

## 🎨 配置说明

### 基础配置

```javascript
const config = {
    // 目标时间（必填）
    targetDate: "2026-12-31 23:59:59",
    
    // 页面标题
    title: "新年倒计时",
    
    // 提示语
    message: "距离新年还有",
    
    // 主题（light / dark）
    theme: "dark",
    
    // 是否显示秒数
    showSeconds: true,
    
    // 背景类型（gradient / image / color）
    backgroundType: "gradient"
};
```

### 主题配色

```javascript
// 渐变背景
backgroundType: "gradient",
gradient: {
    start: "#667eea",
    end: "#764ba2"
}

// 图片背景
backgroundType: "image",
image: "url('your-image.jpg')"

// 纯色背景
backgroundType: "color",
color: "#1a1a2e"
```

---

## 📸 效果预览

### 深色主题
```
┌─────────────────────────────────┐
│      新年倒计时                  │
│  距离新年还有                    │
│                                 │
│    125 天 08 小时 45 分 32 秒     │
│                                 │
│  [████████████████████] 85%     │
└─────────────────────────────────┘
```

### 浅色主题
```
┌─────────────────────────────────┐
│      项目上线倒计时              │
│  距离上线还有                    │
│                                 │
│    030 天 12 小时 30 分 00 秒     │
│                                 │
│  加油！即将到来！🚀              │
└─────────────────────────────────┘
```

---

## 🛠️ 高级定制

### 修改字体

编辑 `css/styles.css`：

```css
.countdown-number {
    font-family: 'Fira Code', monospace;
    font-size: 48px;
}
```

### 添加音效

编辑 `config.js`：

```javascript
const config = {
    // ...其他配置
    sound: {
        enabled: true,
        file: "audio/countdown.mp3"
    }
};
```

### 自定义进度条

编辑 `css/styles.css`：

```css
.progress-bar {
    height: 8px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 4px;
}
```

---

## 📱 浏览器兼容性

| 浏览器 | 版本 | 状态 |
|--------|------|------|
| Chrome | 90+ | ✅ |
| Firefox | 88+ | ✅ |
| Safari | 14+ | ✅ |
| Edge | 90+ | ✅ |
| 移动端 | 现代浏览器 | ✅ |

---

## 📁 项目结构

```
Countdown/
├── index.html          # 主页面
├── config.js           # 配置文件
├── css/
│   └── styles.css      # 样式文件
├── js/
│   └── countdown.js    # 倒计时逻辑
├── audio/              # 音效文件（可选）
└── README.md           # 说明文档
```

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 提交 Bug
请在 Issue 中说明：
1. 浏览器版本
2. 问题描述
3. 复现步骤

### 功能建议
欢迎提出新功能建议！

---

## 📄 许可证

本项目采用 [MIT License](LICENSE)

---

## 🔗 相关链接

- [在线演示](https://lcean.github.io/Countdown/)
- [问题反馈](https://github.com/LceAn/Countdown/issues)
- [更新日志](https://github.com/LceAn/Countdown/commits/main)

---

<div align="center">

**⏰ 珍惜时间 · 把握当下**

Made with ❤️ by LceAn

</div>
