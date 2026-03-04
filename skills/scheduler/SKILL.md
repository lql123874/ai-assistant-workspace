# Scheduler Skill - 定时任务管理

定时任务和自动化调度技能，支持 cron 表达式和一次性任务。

## 功能

1. **创建定时任务** - 使用 cron 表达式或时间间隔
2. **查看任务列表** - 显示所有已配置的定时任务
3. **执行任务** - 立即运行指定任务
4. **删除任务** - 移除不需要的定时任务
5. **任务历史** - 查看任务执行记录

## 使用 OpenClaw Cron

OpenClaw 内置了强大的 cron 功能，可以直接使用 `cron` 工具。

### 创建定时任务

```python
# 使用 cron 工具创建任务
cron.add({
    "name": "每日报告",
    "schedule": {
        "kind": "cron",
        "expr": "0 9 * * *",  # 每天早上9点
        "tz": "Asia/Shanghai"
    },
    "payload": {
        "kind": "agentTurn",
        "message": "生成今日工作报告"
    },
    "sessionTarget": "isolated"
})
```

### 常用 Cron 表达式

- `0 9 * * *` - 每天早上 9:00
- `0 */2 * * *` - 每 2 小时
- `0 9 * * 1` - 每周一早上 9:00
- `0 0 1 * *` - 每月 1 号凌晨
- `*/30 * * * *` - 每 30 分钟

### 一次性任务

```python
# 在指定时间执行一次
cron.add({
    "name": "提醒",
    "schedule": {
        "kind": "at",
        "at": "2026-03-04T15:00:00+08:00"
    },
    "payload": {
        "kind": "agentTurn",
        "message": "提醒：会议开始"
    },
    "sessionTarget": "isolated"
})
```

### 周期性任务

```python
# 每隔一段时间执行
cron.add({
    "name": "健康检查",
    "schedule": {
        "kind": "every",
        "everyMs": 3600000  # 每小时 (毫秒)
    },
    "payload": {
        "kind": "systemEvent",
        "text": "执行系统健康检查"
    },
    "sessionTarget": "main"
})
```

## 任务类型

### systemEvent (主会话)
- 适用于：系统级事件、简单通知
- sessionTarget: "main"
- 直接注入到主会话

### agentTurn (隔离会话)
- 适用于：复杂任务、需要 AI 处理的工作
- sessionTarget: "isolated"
- 在独立会话中运行，完成后通知

## 管理命令

### 查看所有任务
```bash
cron list
```

### 查看任务状态
```bash
cron status
```

### 立即运行任务
```bash
cron run --jobId <job-id>
```

### 删除任务
```bash
cron remove --jobId <job-id>
```

### 查看任务历史
```bash
cronjobId <job-id>
```

## 实用示例

### 1. 每日早报
```python
{
    "name": "每日早报",
    "schedule": {"kind": "cron", "expr": "0 8 * * *", "tz": "Asia/Shanghai"},
    "payload": {
        "kind": "agentTurn",
        "message": "总结昨天的工作，列出今天的待办事项"
    },
    "sessionTarget": "isolated"
}
```

### 2. 定期备份
```python
{
    "name": "工作空间备份",
    "schedule": {"kind": "cron", "expr": "0 2 * * *", "tz": "Asia/Shanghai"},
    "payload": {
        "kind": "agentTurn",
        "message": "备份工作空间到 GitHub 和 Gitee"
    },
    "sessionTarget": "isolated"
}
```

### 3. 股票监控
```python
{
    "name": "股票价格监控",
    "schedule": {"kind": "every", "everyMs": 1800000},  # 每30分钟
    "payload": {
        "kind": "agentTurn",
        "message": "检查关注的股票价格，如有重要变化则通知"
    },
    "sessionTarget": "isolated"
}
```

### 4. 提醒事项
```python
{
    "name": "会议提醒",
    "schedule": {"kind": "at", "at": "2026-03-04T14:30:00+08:00"},
    "payload": {
        "kind": "agentTurn",
        "message": "提醒：15:00 有重要会议"
    },
    "sessionTarget": "isolated"
}
```

## 注意事项

1. **时区设置** - 确保使用正确的时区（Asia/Shanghai）
2. **任务命名** - 使用清晰的名称便于管理
3. **资源消耗** - 避免过于频繁的任务
4. **错误处理** - 任务失败会记录在历史中
5. **会话选择** - 简单通知用 main，复杂任务用 isolated

## 工具集成

可以在定时任务中调用其他技能：
- searxng - 定期搜索信息
- stock-analysis - 定期分析股票
- event-planning - 活动提醒

## 最佳实践

1. 使用 cron 表达式进行精确调度
2. 重要任务设置通知
3. 定期清理过期任务
4. 监控任务执行状态
5. 合理设置任务频率
