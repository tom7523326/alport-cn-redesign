# 中国 Alport 综合征家长协会 · 官网重设计

> 蓝天下，你我同行 — Under the Blue Sky, We Walk Together

按照全球顶尖患者组织（NORD / Alport Syndrome Foundation / Cystic Fibrosis Foundation / Alport UK）的标准，为「中国 Alport 综合征家长协会」（[alport.cn](http://www.alport.cn)）重新设计的全新静态官网。

## 三大产品目标

1. **联系更多患者** — 9 个分场景社群一键加入，48 小时内匹配回复
2. **建立医患沟通平台** — 12 位国内权威专家档案 + 6 大诊疗中心 + 线上咨询会回放 + 一对一咨询通道
3. **同步全球诊疗进展** — 药物管线可视化、临床试验筛选、月度文献速递、基因治疗专题

## 信息架构（7 个一级菜单）

| 菜单 | 对应路径 | 核心目标 |
|---|---|---|
| 首页 | `index.html` | 三屏说清楚「我们是谁、能帮你做什么、马上加入」 |
| 关于 Alport | `about-alport.html` | 9 章疾病科普 + 侧边目录 + FAQ |
| 医患平台 | `doctors.html` | 找专家 / 推荐医院 / 咨询会回放 / 提问墙 |
| 科研进展 | `research.html` | 药物管线 / 临床试验 / 文献速递 / 基因治疗专题 |
| 患者社区 | `community.html` | 9 个社群入口 / 真实故事 / 护理指南下载 |
| 关于协会 | `about-us.html` | 11 年大事记 / 团队 / 2025 年报 / 财务公开 |
| 加入我们 | `get-involved.html` | 患者登记 / 月捐三档 / 志愿者 / 机构合作 |

## 视觉设计系统

- **主色**：蓝天蓝 `#1E40AF / #2563EB`（呼应「蓝天下你我同行」）
- **温度色**：生命橙 `#EA580C / #F59E0B`（强 CTA、月捐、温情）
- **科研色**：生命绿 `#10B981`（药物管线、新进展）
- **字体**：`Noto Serif SC`（标题）+ `PingFang SC`（正文）+ `Inter`（数字）

## 技术栈

- 纯静态 HTML + CSS + Vanilla JS（无构建过程，可直接部署到任意静态托管）
- 设计 Token 集中于 `css/design-system.css`（860 行）
- 共享导航与页脚由 `js/site.js` 注入，单点维护
- 响应式：1080 / 960 / 640 / 480 / 380 五档断点
- 包含 JSON-LD 结构化数据、OG / Twitter Card meta、可访问性 ARIA

## 本地预览

```bash
python3 -m http.server 8765
# 然后访问 http://localhost:8765
```

## 文件清单

```
.
├── index.html              首页
├── about-alport.html       关于 Alport 综合征
├── doctors.html            医患平台
├── research.html           全球科研进展
├── community.html          患者社区
├── about-us.html           关于协会
├── get-involved.html       加入我们
├── css/design-system.css   设计系统
└── js/site.js              共享脚本与微交互
```

## 数据来源

所有内容来自《中国 Alport 综合征家长协会 2025 年工作总结报告》（32 页 PDF），保证真实可追溯。

## License

© 2014 – 2026 中国 Alport 综合征家长协会 保留所有权利。
内容版权归协会所有，代码部分按 MIT 协议开源，欢迎其他罕见病组织参考。
