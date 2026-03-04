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

# Try to use system fonts, fallback to default if not available
try:
    title_font = ImageFont.truetype("/usr/share/fonts/google-droid/DroidSansFallbackFull.ttf", 60)
    subtitle_font = ImageFont.truetype("/usr/share/fonts/google-droid/DroidSansFallbackFull.ttf", 40)
    body_font = ImageFont.truetype("/usr/share/fonts/google-droid/DroidSansFallbackFull.ttf", 32)
    small_font = ImageFont.truetype("/usr/share/fonts/google-droid/DroidSansFallbackFull.ttf", 28)
except:
    try:
        title_font = ImageFont.truetype("DejaVuSans-Bold.ttf", 60)
        subtitle_font = ImageFont.truetype("DejaVuSans.ttf", 40)
        body_font = ImageFont.truetype("DejaVuSans.ttf", 32)
        small_font = ImageFont.truetype("DejaVuSans.ttf", 28)
    except:
        # Use default font as last resort
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        body_font = ImageFont.load_default()
        small_font = ImageFont.load_default()

# Add decorative elements
# Top wave pattern
for i in range(0, width, 20):
    draw.arc([i-10, -30, i+10, 30], 0, 180, fill=accent_color, width=3)

# Bottom wave pattern  
for i in range(0, width, 20):
    draw.arc([i-10, height-30, i+10, height+30], 180, 360, fill=accent_color, width=3)

# Music notes decoration
music_notes = ["♪", "♫", "♬"]
note_positions = [(100, 200), (width-150, 300), (200, height-400), (width-250, height-500)]
for i, (x, y) in enumerate(note_positions):
    try:
        draw.text((x, y), music_notes[i % len(music_notes)], fill=accent_color, font=title_font)
    except:
        # If unicode music notes don't work, draw simple circles
        draw.ellipse([x, y, x+30, y+30], outline=accent_color, width=3)

# Main title
title = "撕歌APP官方音乐人认证专场"
title_bbox = draw.textbbox((0, 0), title, font=title_font)
title_width = title_bbox[2] - title_bbox[0]
title_x = (width - title_width) // 2
draw.text((title_x, 400), title, fill=(255, 255, 255), font=title_font)

# Subtitle
subtitle = "让世界听见你的声音！"
subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
subtitle_x = (width - subtitle_width) // 2
draw.text((subtitle_x, 500), subtitle, fill=accent_color, font=subtitle_font)

# Key benefits section
benefits_y = 650
benefits_title = "🔥 活动亮点"
draw.text((80, benefits_y), benefits_title, fill=(255, 255, 255), font=subtitle_font)

benefits = [
    "✅ 官方认证徽章",
    "🚀 作品推荐权重提升", 
    "💼 商业合作机会",
    "🎯 专业成长指导"
]

for i, benefit in enumerate(benefits):
    draw.text((100, benefits_y + 80 + i*60), benefit, fill=(255, 255, 255), font=body_font)

# Time section
time_y = benefits_y + 80 + len(benefits)*60 + 40
time_title = "⏰ 活动时间"
draw.text((80, time_y), time_title, fill=(255, 255, 255), font=subtitle_font)

times = [
    "报名：即日起3天内",
    "审核：报名截止后1-2个工作日内",
    "结果：审核结束后1-3个工作日内"
]

for i, time_item in enumerate(times):
    draw.text((100, time_y + 80 + i*50), time_item, fill=(255, 255, 255), font=body_font)

# Participation section
participate_y = time_y + 80 + len(times)*50 + 40
participate_title = "📝 参与方式"
draw.text((80, participate_y), participate_title, fill=(255, 255, 255), font=subtitle_font)

steps = [
    "1. 扫码加入官方认证群",
    "2. 群内接龙报名", 
    "3. 等待审核通知",
    "4. 进入房间展示才华"
]

for i, step in enumerate(steps):
    draw.text((100, participate_y + 80 + i*50), step, fill=(255, 255, 255), font=body_font)

# QR code placeholder
qr_y = participate_y + 80 + len(steps)*50 + 60
draw.rectangle([width//2 - 150, qr_y, width//2 + 150, qr_y + 300], outline=(255, 255, 255), width=3)
draw.text((width//2 - 50, qr_y + 130), "QR CODE", fill=(255, 255, 255), font=body_font)

# Requirements section
req_y = qr_y + 350
req_title = "🎯 报名要求"
draw.text((80, req_y), req_title, fill=(255, 255, 255), font=subtitle_font)

requirements = [
    "• 撕歌APP注册用户",
    "• 演唱1-2分钟（高潮部分）",
    "• 清唱或伴奏（禁原唱）",
    "• 限前50名（先到先得！）"
]

for i, req in enumerate(requirements):
    draw.text((100, req_y + 80 + i*45), req, fill=(255, 255, 255), font=body_font)

# Footer slogan
footer = "用音乐表达自我，让才华被看见！"
footer_bbox = draw.textbbox((0, 0), footer, font=subtitle_font)
footer_width = footer_bbox[2] - footer_bbox[0]
footer_x = (width - footer_width) // 2
draw.text((footer_x, height - 150), footer, fill=accent_color, font=subtitle_font)

# Save the image
img.save('/home/admin/.openclaw/workspace/撕歌APP官方音乐人认证活动海报.png')
print("Poster created successfully!")