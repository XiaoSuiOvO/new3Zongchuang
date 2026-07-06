// ========== 建党105周年数据 ==========
// 数据来源：中共中央组织部历年《中国共产党党内统计公报》

// 第一章：党员总量五节点增长曲线
export const memberGrowth = [
  { year: 1921, count: 0.0058, label: '建党(约58人)' },
  { year: 1945, count: 121, label: '中共七大' },
  { year: 1949, count: 449, label: '新中国成立' },
  { year: 1956, count: 1073, label: '中共八大' },
  { year: 1969, count: 2200, label: '中共九大' },
  { year: 1977, count: 3500, label: '中共十一大' },
  { year: 1978, count: 3698, label: '改革开放' },
  { year: 1982, count: 3965, label: '中共十二大' },
  { year: 1992, count: 5100, label: '中共十四大' },
  { year: 2002, count: 6694, label: '中共十六大' },
  { year: 2007, count: 7415, label: '中共十七大' },
  { year: 2012, count: 8512.7, label: '中共十八大' },
  { year: 2014, count: 8779.3, label: '' },
  { year: 2017, count: 8944.7, label: '中共十九大' },
  { year: 2018, count: 9059.4, label: '' },
  { year: 2019, count: 9191.4, label: '' },
  { year: 2021, count: 9514.8, label: '建党百年' },
  { year: 2023, count: 9918.5, label: '' },
  { year: 2024, count: 10027.1, label: '首破1亿' },
  { year: 2025, count: 10128.6, label: '2025年' },
];

// 关键节点标注
export const memberGrowthAnnotations = [
  { year: 1921, count: 0.0058, label: '1921·建党', dy: -30 },
  { year: 1949, count: 449, label: '1949·新中国成立', dy: -30 },
  { year: 1978, count: 3698, label: '1978·改革开放', dy: -30 },
  { year: 2012, count: 8512.7, label: '2012·十八大', dy: 20 },
  { year: 2025, count: 10128.6, label: '2025·突破1亿', dy: -30 },
];

// 第二章：百年基层组织数量增长
export const organizationGrowth = [
  { year: 1949, members: 449, orgs: 20, label: '新中国成立' },
  { year: 1978, members: 3698, orgs: 211, label: '改革开放' },
  { year: 2012, members: 8512.7, orgs: 420.1, label: '十八大' },
  { year: 2021, members: 9514.8, orgs: 486.4, label: '建党百年' },
  { year: 2023, members: 9918.5, orgs: 517.6, label: '' },
  { year: 2024, members: 10027.1, orgs: 525, label: '' },
  { year: 2025, members: 10128.6, orgs: 543.1, label: '2025年' },
];

// 城乡覆盖率
export const coverageRate = [
  { area: '行政村', orgs: 48.4, rate: 99.9 },
  { area: '乡镇', orgs: 12.4, rate: 99.9 },
  { area: '城市街道', orgs: 0.9158, rate: 99.9 },
  { area: '社区', orgs: 3.0, rate: 99.9 },
];

// 第三章：党员学历结构变化（百分比）
export const educationData = [
  { period: '1921', illiterate: 0, primary: 0, junior: 5, senior: 95, note: '多为留学生与大学生' },
  { period: '1949', illiterate: 69, primary: 27.66, junior: 3.34, senior: 0, note: '工农占83%' },
  { period: '1956', illiterate: 28.4, primary: 54.6, junior: 17, senior: 1.05, note: '八大时期' },
  { period: '1978', illiterate: 11.9, primary: 46.5, junior: 41.57, senior: 2.89, note: '改革开放初期' },
  { period: '2000', illiterate: 2.55, primary: 0, junior: 0, senior: 21.1, note: '研究生0.64%' },
  { period: '2024', illiterate: 0, primary: 0, junior: 0, senior: 57.6, note: '大专以上5778.6万' },
  { period: '2025', illiterate: 0, primary: 0, junior: 0, senior: 59, note: '大专以上5976.5万' },
];

// 第四章：2025年党员年龄分层
export const ageDistribution = [
  { age: '30岁及以下', count: 1209.4, pct: 12.2 },
  { age: '31-35岁', count: 1011.5, pct: 10.7 },
  { age: '36-40岁', count: 1219.1, pct: 11.4 },
  { age: '41-45岁', count: 992.7, pct: 9.7 },
  { age: '46-50岁', count: 904.7, pct: 9.0 },
  { age: '51-55岁', count: 946.0, pct: 9.4 },
  { age: '56-60岁', count: 853.8, pct: 8.6 },
  { age: '61岁及以上', count: 2991.4, pct: 28.9 },
];

// 新发展党员青年占比
export const youthRecruitment = [
  { year: 2024, total: 213.1, youth: 178.4, youthPct: 83.7, female: 97.9, femalePct: 46.0, minority: 22.3, minorityPct: 10.5, educated: 115.9, educatedPct: 54.4 },
  { year: 2025, total: 208.6, youth: 175.3, youthPct: 84.0, female: 97.1, femalePct: 46.5, minority: 21.3, minorityPct: 10.2, educated: 114.3, educatedPct: 54.8 },
];

// 性别与民族
export const genderEthnicity = [
  { year: 2024, female: 3099.5, femalePct: 30.9, minority: 773.4, minorityPct: 7.7 },
  { year: 2025, female: 3191.4, femalePct: 31.5, minority: 787.8, minorityPct: 7.8 },
];

// 第五章：2025年党员职业分布
export const occupationDistribution = [
  { category: '农牧渔民', count2024: 2614.4, pct2024: 26.1, count2025: 2606.8, pct2025: null },
  { category: '离退休人员', count2024: 2146.9, pct2024: 21.4, count2025: 2208.2, pct2025: null },
  { category: '专业技术\n人员', count2024: 1639.4, pct2024: 16.3, count2025: 1669.2, pct2025: null },
  { category: '管理人员', count2024: 1156.3, pct2024: 11.5, count2025: 1186.2, pct2025: null },
  { category: '党政机关\n工作人员', count2024: 759.2, pct2024: 7.6, count2025: 742.9, pct2025: null },
  { category: '其他职业\n人员', count2024: 784.9, pct2024: 7.8, count2025: 789.8, pct2025: null },
  { category: '工人', count2024: 663.9, pct2024: 6.6, count2025: 671.8, pct2025: null },
  { category: '学生', count2024: 262.2, pct2024: 2.6, count2025: 253.7, pct2025: null },
];

// 各领域基层党组织分布（2025年）
export const orgByField = [
  { field: '企业', count: 169.2 },
  { field: '事业单位', count: 101.7 },
  { field: '机关', count: 80.9 },
  { field: '社会组织', count: 20.1 },
];

// 第六章：按入党时间分段
export const entryPeriodData = [
  { period: '新中国成立前\n入党', count2024: 5.4, count2025: 4.3 },
  { period: '建国后至\n十一届三中全会前', count2024: 1230.9, count2025: 1167.4 },
  { period: '三中全会后至\n十八大前', count2024: 5980, count2025: 5938.1 },
  { period: '十八大以来\n入党', count2024: 2810.8, count2025: 3018.7 },
];

// 十八大以来累计发展数据
export const since18th = {
  totalDeveloped: 2810.8, // 十八大以来入党党员总数(万)
  totalApplicants: 2142.0, // 全国入党申请人(万)
  totalActivists: 1061.1,  // 入党积极分子(万)
};
