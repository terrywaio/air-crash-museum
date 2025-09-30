# GitHub Pages 部署指南

## 📋 步骤 1：在GitHub上创建仓库

1. 访问 https://github.com/new
2. 仓库名称：`air-crash-museum`（或您喜欢的名称）
3. 设置为 **Public**（公开）
4. **不要**勾选 "Add a README file"
5. 点击 **Create repository**

---

## 📋 步骤 2：推送代码到GitHub

在PowerShell中，复制粘贴以下命令（一次一行）：

```powershell
# 切换到项目目录
cd "C:\Users\ok304\Desktop\xkt\网站\air-crash-museum"

# 初始化git仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Air Crash Museum website"

# 添加远程仓库（替换YOUR_USERNAME为您的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/air-crash-museum.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

⚠️ **重要**：将 `YOUR_USERNAME` 替换为您的GitHub用户名！

---

## 📋 步骤 3：配置GitHub Pages

1. 在GitHub仓库页面，点击 **Settings**（设置）
2. 在左侧菜单找到 **Pages**
3. 在 **Source** 下拉菜单中，选择 **GitHub Actions**
4. 保存设置

---

## 📋 步骤 4：等待部署完成

1. 回到仓库主页
2. 点击 **Actions** 标签
3. 查看部署进度（第一次需要几分钟）
4. 部署成功后，访问您的网站：
   ```
   https://YOUR_USERNAME.github.io/air-crash-museum/
   ```

---

## 🎯 以后更新网站

每次修改代码后：

```powershell
cd "C:\Users\ok304\Desktop\xkt\网站\air-crash-museum"
git add .
git commit -m "描述您的修改"
git push
```

GitHub会自动重新构建和部署！

---

## 💡 优势

✅ **自动部署** - 推送代码自动构建  
✅ **免费** - 完全免费  
✅ **无需手动上传** - 不用再上传out文件夹  
✅ **版本控制** - 可以回退到任何历史版本  
✅ **更快** - GitHub的CDN速度很快  
✅ **支持自定义域名** - 可以绑定 aircrashmuseum.com

---

## 🌐 自定义域名（可选）

如果您想使用 aircrashmuseum.com：

1. 在GitHub Pages设置中，添加自定义域名：`aircrashmuseum.com`
2. 在域名DNS设置中添加CNAME记录：
   - Type: CNAME
   - Name: www
   - Value: YOUR_USERNAME.github.io
3. 添加A记录指向GitHub：
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

---

需要帮助随时告诉我！
