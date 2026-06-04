# 个人主页模板

这是一个参考 `tomorrow1sanotherday/tomorrow1sanotherday.github.io` 原始 UI 和布局生成的静态个人主页，适合部署到 GitHub Pages。News 区域参考 `messix77/messix77.github.io`，做成了固定高度、可独立滚动的窗口。

## 如何修改内容

主要改 `data.js`：

- `profile`：姓名、中文名、身份、学校、邮箱、头像路径
- `links`：Google Scholar、GitHub、Email、CV 等链接
- `intro`：个人简介，支持少量 HTML 链接
- `researchInterests`：研究方向标签
- `news`：主页动态
- `publications`：论文列表和 Paper / Code / Project 链接
- `education`、`awards`、`experience`：对应经历条目

头像默认是 `assets/profile-placeholder.svg`。你可以把自己的照片放进 `assets/`，例如 `assets/profile.jpg`，然后在 `data.js` 里把：

```js
avatar: "assets/profile-placeholder.svg"
```

改成：

```js
avatar: "assets/profile.jpg"
```

## 本地预览

直接用浏览器打开 `index.html` 即可。

如果要用本地服务器预览，可以在当前目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 部署到 GitHub Pages

把这些文件推送到你的 `<username>.github.io` 仓库，GitHub Pages 会自动把 `index.html` 作为主页入口。
