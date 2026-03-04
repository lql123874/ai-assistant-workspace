#!/usr/bin/env python3
"""
自动更新能力面板
定期扫描已安装的库和技能，更新 dashboard.html
"""

import subprocess
import json
import os
from datetime import datetime

def get_installed_python_packages():
    """获取已安装的 Python 包"""
    try:
        result = subprocess.run(['pip3', 'list', '--format=json'], 
                              capture_output=True, text=True)
        packages = json.loads(result.stdout)
        return {pkg['name']: pkg['version'] for pkg in packages}
    except:
        return {}

def get_installed_npm_packages():
    """获取已安装的 npm 包"""
    try:
        package_json = '/home/admin/.openclaw/workspace/package.json'
        if os.path.exists(package_json):
            with open(package_json, 'r') as f:
                data = json.load(f)
                return data.get('dependencies', {})
    except:
        pass
    return {}

def scan_skills():
    """扫描技能目录"""
    skills_dir = '/home/admin/.openclaw/workspace/skills'
    skills = []
    if os.path.exists(skills_dir):
        for item in os.listdir(skills_dir):
            skill_path = os.path.join(skills_dir, item)
            if os.path.isdir(skill_path):
                skill_md = os.path.join(skill_path, 'SKILL.md')
                if os.path.exists(skill_md):
                    skills.append(item)
    return skills

def update_dashboard():
    """更新能力面板数据"""
    data = {
        'last_update': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        'python_packages': get_installed_python_packages(),
        'npm_packages': get_installed_npm_packages(),
        'skills': scan_skills()
    }
    
    # 保存数据到 JSON
    output_file = '/home/admin/.openclaw/workspace/dashboard-data.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ 能力面板数据已更新: {output_file}")
    print(f"📦 Python 包: {len(data['python_packages'])} 个")
    print(f"📦 npm 包: {len(data['npm_packages'])} 个")
    print(f"🎯 技能: {len(data['skills'])} 个")
    
    return data

if __name__ == '__main__':
    update_dashboard()
