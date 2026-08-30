# Countdown

一个无需后端的年度倒计时页面，显示距离下一年的剩余时间和当前年度进度，并支持浅色/渐变主题切换。

[在线预览](https://lcean.github.io/Countdown/)

## 特点

- 根据浏览器当前年份自动生成下一年目标，不需要每年手动改日期
- 展示天、小时、分钟和秒
- 展示当前年度进度并自动限制在 `0%` 到 `100%`
- 使用 `localStorage` 保存主题选择
- 纯 HTML、CSS 和 JavaScript，可直接静态托管

## 使用

克隆仓库后直接打开 `index.html`，或使用任意静态文件服务器：

```bash
python -m http.server 8000
```

随后访问 `http://127.0.0.1:8000`。

## 自定义

默认配置位于 `js/config.js`：

```javascript
const CONFIG = CountdownTime.createYearConfig();
```

如需固定活动日期，可改为普通对象，保留以下字段：`title`、`targetDate`、`message`、`completedMessage`、`defaultTheme`、`showSeconds`、`showProgress` 和 `yearProgress`。

日期计算纯函数位于 `js/time-utils.js`，浏览器界面逻辑位于 `js/countdown.js`。

## 验证

需要 Node.js 18 或更高版本：

```bash
npm test
```

测试覆盖年度自动切换、剩余时间拆分和进度范围。

## 目录

- `index.html`：页面入口
- `css/styles.css`：页面样式
- `js/time-utils.js`：日期计算函数
- `js/config.js`：当前配置
- `js/countdown.js`：DOM 更新与主题交互
- `test/`：Node.js 内置测试

<!-- repo-readme-standard:v1 -->
## 仓库维护信息

- 项目类型：静态网页工具
- 当前状态：维护中
- 可见性：public
- 维护节奏：每年跨年后检查在线页面和浏览器兼容性
- 相关仓库：未发现功能相同、可直接合并的仓库
- 许可：当前仓库没有根目录 `LICENSE`，再分发前需先确认许可边界
- 维护边界：归档、删除、历史重写或强制推送需单独确认

---

## 文档

- [CHANGELOG.md](CHANGELOG.md) — 更新日志
- [ROADMAP.md](ROADMAP.md) — 未来更新计划
