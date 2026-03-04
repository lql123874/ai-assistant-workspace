# GitHub 配置

## 账户信息
- **用户名**: lql123874
- **GitHub 主页**: https://github.com/lql123874
- **账户类型**: Free Plan
- **私有仓库配额**: 10000

## 认证配置
- **Token 存储**: /home/admin/.openclaw/workspace/github-setup/github-token.txt
- **权限**: repo (完整仓库访问)
- **Git 配置**: credential.helper = store

## 使用方法

### 克隆仓库
```bash
git clone https://TOKEN@github.com/lql123874/repo-name.git
# 将 TOKEN 替换为实际的 GitHub token
```

### 推送到 GitHub
```bash
cd /path/to/repo
git remote add github https://TOKEN@github.com/lql123874/repo-name.git
# 将 TOKEN 替换为实际的 GitHub token
git push github master
```

### 使用 GitHub API
```bash
curl -H "Authorization: token YOUR_TOKEN" \
  https://api.github.com/user/repos
# 将 YOUR_TOKEN 替换为实际的 GitHub token
```

## 安全提示
- Token 文件权限已设置为 600（仅所有者可读写）
- 目录权限已设置为 700（仅所有者可访问）
- 不要在公开场合泄露 token

## 配置时间
2026-03-04 11:50 - 初始配置完成
