# Web Search API Skill - 网络搜索 API

多源网络搜索技能，整合多个搜索引擎和 API。

## 功能

1. **SearXNG 搜索** - 隐私优先的元搜索引擎（已集成）
2. **多源搜索** - 同时查询多个搜索引擎
3. **专项搜索** - 新闻、图片、视频、学术等
4. **结果聚合** - 合并和去重搜索结果
5. **智能过滤** - 根据相关性排序和过滤

## 搜索源

### 1. SearXNG（主要）
- **优势**: 隐私保护、无追踪、聚合多个搜索引擎
- **位置**: `/home/admin/.openclaw/workspace/skills/searxng/`
- **使用**: 优先使用，适合所有搜索需求

### 2. Web Fetch
- **功能**: 直接抓取网页内容
- **工具**: `web_fetch` 
- **用途**: 获取特定网页的详细内容

### 3. 命令行工具
- **jc**: 解析命令行输出为 JSON
- **curl**: HTTP 请求
- **beautifulsoup4**: HTML 解析

## 使用方法

### 基础搜索

```python
# 使用 searxng skill
# 1. 阅读 skill 文档
read('/home/admin/.openclaw/workspace/skills/searxng/SKILL.md')

# 2. 执行搜索
exec('python3 /home/admin/.openclaw/workspace/skills/searxng/scripts/searxng.py "搜索关键词"')
```

### 网页内容获取

```python
# 使用 web_fetch 工具
web_fetch(url='https://example.com', extractMode='markdown')
```

### 多源搜索策略

1. **快速查询** - 仅使用 SearXNG
2. **深度搜索** - SearXNG + 直接抓取关键网页
3. **验证信息** - 交叉对比多个来源

## 搜索类型

### 通用搜索
```bash
python3 searxng.py "Python 自动化工具"
```

### 新闻搜索
```bash
python3 searxng.py "最新科技新闻" --category news
```

### 学术搜索
```bash
python3 searxng.py "机器学习论文" --category science
```

### 图片搜索
```bash
python3 searxng.py "风景图片" --category images
```

## 搜索技巧

### 1. 精确搜索
使用引号包裹关键词：`"exact phrase"`

### 2. 排除关键词
使用减号：`Python -Django`

### 3. 站内搜索
使用 site: `site:github.com Python tools`

### 4. 文件类型
使用 filetype: `filetype:pdf 机器学习`

### 5. 时间范围
添加时间限定：`Python 2026`

## 结果处理

### 解析 HTML
```python
from bs4 import BeautifulSoup
import requests

response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')
```

### 提取关键信息
```python
# 提取标题
titles = soup.find_all('h1', 'h2', 'h3')

# 提取链接
links = soup.find_all('a', href=True)

# 提取文本
text = soup.get_text()
```

### 转换为 JSON
```python
import json

results = {
    'query': '搜索词',
    'results': [
        {'title': '...', 'url': '...', 'snippet': '...'}
    ]
}

json.dumps(results, ensure_ascii=False, indent=2)
```

## 实用场景

### 1. 股票信息搜索
```python
# 搜索股票最新消息
searxng("永辉超市 601933 最新消息")

# 获取财报数据
web_fetch("https://finance.example.com/stock/601933")
```

### 2. 技术文档查询
```python
# 搜索 API 文档
searxng("Python pandas API documentation")

# 获取具体页面
web_fetch("https://pandas.pydata.org/docs/")
```

### 3. 新闻监控
```python
# 定期搜索关键词
searxng("AI 人工智能 最新进展")
```

### 4. 竞品分析
```python
# 搜索竞品信息
searxng("竞品名称 用户评价")
```

## API 集成

### GitHub API
```bash
curl -H "Authorization: token YOUR_TOKEN" \
  https://api.github.com/search/repositories?q=python+automation
```

### 使用 jc 解析
```bash
curl https://api.example.com/data | jc --json
```

## 搜索优化

### 1. 缓存结果
- 避免重复搜索
- 保存常用查询结果

### 2. 批量搜索
- 一次性搜索多个关键词
- 并行处理提高效率

### 3. 结果过滤
- 按相关性排序
- 去除重复和低质量结果

### 4. 智能重试
- 搜索失败自动重试
- 切换备用搜索源

## 隐私保护

1. **使用 SearXNG** - 不追踪用户
2. **避免直接访问** - 通过代理或 VPN
3. **清理历史** - 定期清除搜索记录
4. **匿名化** - 不包含个人信息

## 工具组合

### 搜索 + 分析
```python
# 1. 搜索信息
results = searxng("股票分析")

# 2. 提取关键数据
data = extract_data(results)

# 3. 生成报告
report = generate_report(data)
```

### 搜索 + 定时
```python
# 定时搜索并通知
cron.add({
    "schedule": {"kind": "cron", "expr": "0 9 * * *"},
    "payload": {
        "kind": "agentTurn",
        "message": "搜索今日科技新闻并总结"
    }
})
```

## 最佳实践

1. **优先使用 SearXNG** - 隐私和质量兼顾
2. **合理使用频率** - 避免被限流
3. **验证信息来源** - 交叉对比多个结果
4. **保存重要结果** - 建立知识库
5. **定期更新** - 保持搜索工具最新

## 故障排除

### SearXNG 无响应
- 检查服务状态
- 重启 SearXNG 实例
- 使用备用搜索方式

### 网页抓取失败
- 检查网络连接
- 验证 URL 有效性
- 使用 User-Agent

### 结果质量差
- 优化搜索关键词
- 使用高级搜索语法
- 尝试不同搜索源
