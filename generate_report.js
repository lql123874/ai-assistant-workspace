const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle, AlignmentType, HeadingLevel } = require("docx");
const fs = require("fs");

const doc = new Document({
    sections: [{
        properties: {},
        children: [
            // 标题
            new Paragraph({
                text: "永辉超市 (601933.SH) 股票分析报告",
                heading: HeadingLevel.TITLE,
                alignment: AlignmentType.CENTER,
                spacing: { after: 400 }
            }),
            
            // 报告日期
            new Paragraph({
                text: "报告日期：2026 年 3 月 2 日",
                alignment: AlignmentType.RIGHT,
                spacing: { after: 200 }
            }),
            
            // 核心数据
            new Paragraph({
                text: "核心数据概览",
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 400, after: 200 }
            }),
            
            new Table({
                width: { size: 100, type: WidthType.PERCENTAGE },
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "当前股价", bold: true })] }),
                            new TableCell({ children: [new Paragraph({ text: "约 4.25 元" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "市值", bold: true })] }),
                            new TableCell({ children: [new Paragraph({ text: "约 379 亿元" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "1 年涨跌幅", bold: true })] }),
                            new TableCell({ children: [new Paragraph({ text: "-20.26%" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "动态市盈率", bold: true })] }),
                            new TableCell({ children: [new Paragraph({ text: "-45.16（亏损状态）" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "动态市净率", bold: true })] }),
                            new TableCell({ children: [new Paragraph({ text: "11.57" })] }),
                        ],
                    }),
                ],
            }),
            
            // 一、公司概况
            new Paragraph({
                text: "一、公司概况",
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
                text: "永辉超市是中国领先的连锁超市龙头企业，曾被誉为'超市一哥'。公司正在进行重大战略调整，从'规模扩张'转向'质量增长'，重新定位'新永辉、新品质'的战略发展方向。"
            }),
            
            // 二、财务数据分析
            new Paragraph({
                text: "二、财务数据分析",
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 400, after: 200 }
            }),
            
            new Paragraph({ text: "2.1 业绩表现", heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 } }),
            
            new Table({
                width: { size: 100, type: WidthType.PERCENTAGE },
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "年度", bold: true })] }),
                            new TableCell({ children: [new Paragraph({ text: "归母净利润（亿元）", bold: true })] }),
                            new TableCell({ children: [new Paragraph({ text: "状态", bold: true })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "2022" })] }),
                            new TableCell({ children: [new Paragraph({ text: "-27.63" })] }),
                            new TableCell({ children: [new Paragraph({ text: "亏损" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "2023" })] }),
                            new TableCell({ children: [new Paragraph({ text: "-13.29" })] }),
                            new TableCell({ children: [new Paragraph({ text: "亏损" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "2024" })] }),
                            new TableCell({ children: [new Paragraph({ text: "-14.65" })] }),
                            new TableCell({ children: [new Paragraph({ text: "亏损" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "2025（预计）" })] }),
                            new TableCell({ children: [new Paragraph({ text: "-21.4" })] }),
                            new TableCell({ children: [new Paragraph({ text: "亏损" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "2025 扣非后" })] }),
                            new TableCell({ children: [new Paragraph({ text: "-29.4" })] }),
                            new TableCell({ children: [new Paragraph({ text: "亏损" })] }),
                        ],
                    }),
                ],
            }),
            
            new Paragraph({
                text: "关键数据：自 2021 年以来连续净利润亏损，5 年累计亏损或超 100 亿元。",
                italics: true,
                spacing: { before: 200 }
            }),
            
            new Paragraph({ text: "2.2 亏损原因分析", heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 100 } }),
            new Paragraph({
                text: "1. 门店调改成本：深度调改 315 家门店，资产报废及一次性投入约 9.1 亿元\n" +
                    "2. 停业装修损失：门店停业装修产生的毛利额损失约 3 亿元\n" +
                    "3. 关店损失：关闭 381 家与未来战略定位不符的门店，产生资产报废损失、人员优化离职补偿、租赁相关违约赔偿等"
            }),
            
            // 三、风险分析
            new Paragraph({
                text: "三、风险分析",
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 400, after: 200 }
            }),
            
            new Paragraph({ text: "3.1 行业风险", heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 } }),
            new Table({
                width: { size: 100, type: WidthType.PERCENTAGE },
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "风险类型", bold: true })] }),
                            new TableCell({ children: [new Paragraph({ text: "风险程度", bold: true })] }),
                            new TableCell({ children: [new Paragraph({ text: "说明", bold: true })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "行业竞争加剧" })] }),
                            new TableCell({ children: [new Paragraph({ text: "高" })] }),
                            new TableCell({ children: [new Paragraph({ text: "零售行业竞争白热化，仓储会员店、新零售模式崛起" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "消费需求放缓" })] }),
                            new TableCell({ children: [new Paragraph({ text: "高" })] }),
                            new TableCell({ children: [new Paragraph({ text: "宏观经济环境下行，终端消费需求不及预期" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "电商冲击" })] }),
                            new TableCell({ children: [new Paragraph({ text: "高" })] }),
                            new TableCell({ children: [new Paragraph({ text: "直播电商兴起，用户线上消费习惯固化" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "转型不确定性" })] }),
                            new TableCell({ children: [new Paragraph({ text: "中高" })] }),
                            new TableCell({ children: [new Paragraph({ text: "战略调整效果需时间验证" })] }),
                        ],
                    }),
                ],
            }),
            
            new Paragraph({ text: "3.2 公司特有风险", heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 100 } }),
            new Paragraph({
                text: "• 连续亏损风险：若 2026 年无法扭亏，可能面临 ST 风险\n" +
                    "• 现金流压力：大规模关店调改消耗现金储备\n" +
                    "• 管理层变动：名创优品叶国富 62 亿收购后，管理层整合存在不确定性\n" +
                    "• 资产出售损失：近期出售参股子公司永辉云金科技剩余股权，预计产生投资损失约 9088 万元"
            }),
            
            // 四、投资机会与估值分析
            new Paragraph({
                text: "四、投资机会与估值分析",
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 400, after: 200 }
            }),
            
            new Paragraph({ text: "4.1 积极因素", heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 } }),
            new Paragraph({
                text: "• 战略调整落地：2026 年门店调整完成后，若自有品牌占比提升至 40%，营收恢复正增长且利润率改善，PE 有望从负转正\n" +
                    "• 估值修复空间：参考行业平均 PE（约 20 倍），未来两年股价存在翻倍潜力\n" +
                    "• 核心优势保留：生鲜供应链和线上线下融合的核心优势仍在\n" +
                    "• 分析师评级：7 位分析师中，4 位建议买入，3 位推荐卖出，2 位建议维持现状，评级共识为'中性'\n" +
                    "• 目标价位：部分分析给出目标价 6.8-7.8 元，对应 2026 年估值修复"
            }),
            
            // 五、买入点与建仓策略
            new Paragraph({
                text: "五、买入点与建仓策略",
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 400, after: 200 }
            }),
            
            new Paragraph({ text: "5.1 买入点位建议", heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 } }),
            new Table({
                width: { size: 100, type: WidthType.PERCENTAGE },
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "价位区间", bold: true })] }),
                            new TableCell({ children: [new Paragraph({ text: "操作建议", bold: true })] }),
                            new TableCell({ children: [new Paragraph({ text: "理由", bold: true })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "3.8-4.0 元" })] }),
                            new TableCell({ children: [new Paragraph({ text: "激进建仓" })] }),
                            new TableCell({ children: [new Paragraph({ text: "接近阶段性底部，风险收益比较高" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "4.0-4.3 元" })] }),
                            new TableCell({ children: [new Paragraph({ text: "分批建仓" })] }),
                            new TableCell({ children: [new Paragraph({ text: "当前价位，可小仓位试探" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "4.5 元以上" })] }),
                            new TableCell({ children: [new Paragraph({ text: "观望" })] }),
                            new TableCell({ children: [new Paragraph({ text: "等待回调或转型明确信号" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "突破 5.5 元" })] }),
                            new TableCell({ children: [new Paragraph({ text: "追涨确认" })] }),
                            new TableCell({ children: [new Paragraph({ text: "趋势反转信号" })] }),
                        ],
                    }),
                ],
            }),
            
            new Paragraph({ text: "5.2 建仓时机", heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 100 } }),
            new Paragraph({
                text: "最佳建仓窗口：\n" +
                    "• 2026 年 Q1-Q2：等待 2025 年年报正式披露后，利空出尽\n" +
                    "• 门店调改完成后：关注单店营收和利润率改善数据\n" +
                    "• 季度业绩转正信号：首次出现单季度盈利时"
            }),
            
            new Paragraph({ text: "5.3 投资策略建议", heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 100 } }),
            new Table({
                width: { size: 100, type: WidthType.PERCENTAGE },
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "投资者类型", bold: true })] }),
                            new TableCell({ children: [new Paragraph({ text: "建议", bold: true })] }),
                            new TableCell({ children: [new Paragraph({ text: "仓位", bold: true })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "保守型" })] }),
                            new TableCell({ children: [new Paragraph({ text: "观望" })] }),
                            new TableCell({ children: [new Paragraph({ text: "0%" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "平衡型" })] }),
                            new TableCell({ children: [new Paragraph({ text: "小仓位试探" })] }),
                            new TableCell({ children: [new Paragraph({ text: "5-10%" })] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "激进型" })] }),
                            new TableCell({ children: [new Paragraph({ text: "中等仓位布局" })] }),
                            new TableCell({ children: [new Paragraph({ text: "15-20%" })] }),
                        ],
                    }),
                ],
            }),
            
            // 六、风险提示
            new Paragraph({
                text: "六、风险提示",
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
                text: "重要声明：本报告仅供参考，不构成投资建议。股市有风险，投资需谨慎。",
                italics: true,
                shading: { fill: "F0F0F0" },
                spacing: { after: 200 }
            }),
            new Paragraph({
                text: "关键风险警示：\n\n" +
                    "1. ST 风险：若 2026 年继续亏损，可能被实施退市风险警示\n" +
                    "2. 转型失败风险：门店调改效果不及预期\n" +
                    "3. 竞争加剧风险：盒马、山姆等竞争对手持续扩张\n" +
                    "4. 流动性风险：主力资金近期呈净流出状态（2 月 26 日净流出 1.27 亿元）\n" +
                    "5. 股东减持风险：关注大股东及高管减持动向"
            }),
            
            // 七、结论与建议
            new Paragraph({
                text: "七、结论与建议",
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
                text: "综合评级：中性偏谨慎",
                bold: true,
                spacing: { after: 200 }
            }),
            new Paragraph({
                text: "核心观点：\n\n" +
                    "永辉超市正处于'破局之困'的关键转型期。公司面临传统大卖场衰落与仓储会员店、新零售模式崛起的双重压力。虽然 5 年累计亏损超百亿，但公司仍在积极调整，关闭低效门店、优化供应链、推进数字化升级。"
            }),
            
            new Paragraph({ text: "关键观察指标：", heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 100 } }),
            new Paragraph({
                text: "• 2025 年年报正式披露（关注亏损是否收窄）\n" +
                    "• 2026 年 Q1 单店销售数据\n" +
                    "• 自有品牌占比提升进度\n" +
                    "• 经营性现金流改善情况"
            }),
            
            new Paragraph({
                text: "时间窗口：2026 年 Q2 可能是重要观察节点，若转型成效初现，估值修复空间较大；若继续恶化，需警惕进一步下跌风险。",
                italics: true,
                spacing: { before: 300 }
            }),
            
            // 页脚
            new Paragraph({
                text: "\n\n---\n报告生成时间：2026 年 3 月 2 日\n数据来源：公开市场信息、公司公告、券商研报",
                alignment: AlignmentType.CENTER,
                spacing: { before: 600 }
            }),
        ],
    }],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("/home/admin/.openclaw/workspace/永辉超市股票分析报告.docx", buffer);
    console.log("文档生成成功！");
}).catch((err) => {
    console.error("生成失败:", err);
    process.exit(1);
});
