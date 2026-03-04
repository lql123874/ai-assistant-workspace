#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from PIL import Image, ImageDraw, ImageFont
import os

# Create a poster image for the music certification event
width, height = 1080, 1920  # Vertical poster size (mobile-friendly)
background_color = (75, 0, 130)  # Purple background
accent_color = (255, 215, 0)    # Gold accent

# Create image
img = Image.new('RGB', (width, height), background_color)
draw = ImageDraw.Draw(img)

# Use default font since system fonts may not be available
try:
    title_font = ImageFont.load_default()
    body_font = ImageFont.load_default()
except:
    # Fallback
    title_font = ImageFont.load_default()
    body_font = ImageFont.load_default()

# Main title
title = "撕歌APP官方音乐人认证专场"
draw.text((width//2 - 200, 300), title, fill=(255, 255, 255), font=title_font)

# Subtitle
subtitle = "让世界听见你的声音！"
draw.text((width//2 - 150, 400), subtitle, fill=accent_color, font=title_font)

# Key benefits
draw.text((100, 500), "🔥 活动亮点", fill=(255, 255, 255), font=title_font)
benefits = [
    "✅ 官方认证徽章",
    "🚀 作品推荐权重提升", 
    "💼 商业合作机会",
    "🎯 专业成长指导"
]
for i, benefit in enumerate(benefits):
    draw.text((120, 550 + i*60), benefit, fill=(255, 255, 255), font=body_font)

# Time info
draw.text((100, 850), "⏰ 活动时间", fill=(255, 255, 255), font=title_font)
times = [
    "报名：即日起3天内",
    "审核：报名截止后1-2个工作日内",
    "结果：审核结束后1-3个工作日内"
]
for i, time_item in enumerate(times):
    draw.text((120, 900 + i*50), time_item, fill=(255, 255, 255), font=body_font)

# Participation steps
draw.text((100, 1100), "📝 参与方式", fill=(255, 255, 255), font=title_font)
steps = [
    "1. 扫码加入官方认证群",
    "2. 群内接龙报名", 
    "3. 等待审核通知",
    "4. 进入房间展示才华"
]
for i, step in enumerate(steps):
    draw.text((120, 1150 + i*50), step, fill=(255, 255, 255), font=body_font)

# QR code placeholder
draw.rectangle([width//2 - 100, 1400, width//2 + 100, 1600], outline=(255, 255, 255))
draw.text((width//2 - 30, 1500), "QR CODE", fill=(255, 255, 255), font=body_font)

# Requirements
draw.text((100, 1650), "🎯 报名要求", fill=(255, 255, 255), font=title_font)
requirements = [
    "• 撕歌APP注册用户",
    "• 演唱1-2分钟（高潮部分）",
    "• 清唱或伴奏（禁原唱）",
    "• 限前50名（先到先得！）"
]
for i, req in enumerate(requirements):
    draw.text((120, 1700 + i*40), req, fill=(255, 255, 255), font=body_font)

# Footer
footer = "用音乐表达自我，让才华被看见！"
draw.text((width//2 - 150, 1850), footer, fill=accent_color, font=title_font)

# Save the image
img.save('/home/admin/.openclaw/workspace/撕歌APP官方音乐人认证活动海报.png')
print("Poster created successfully!")