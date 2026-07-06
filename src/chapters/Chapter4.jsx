// 第四章：青春接力 — "你没看错：84%的新党员都是年轻人"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell
} from 'recharts';
import { ageDistribution, youthRecruitment } from '../data';
import BlurText from '../components/react-bits/BlurText/BlurText';
import CountUp from '../components/react-bits/CountUp/CountUp';
import FadeContent from '../components/react-bits/FadeContent/FadeContent';
import ShinyText from '../components/react-bits/ShinyText/ShinyText';

const ageColors = ['#4ADE80', '#60C070', '#7CB860', '#98B050', '#B4A840', '#D0A030', '#E89020', '#C41E23'];

export default function Chapter4() {
  const youthData = ageDistribution.slice(0, 2);
  const totalYouth = youthData.reduce((s, d) => s + d.count, 0);

  return (
    <section id="chapter4" className="chapter">
      <div className="chapter-container">
        <BlurText text="第四章 · 青春接力" className="chapter-subtitle" />
        <h2 className="chapter-title">
          <ShinyText
            text="大多数新党员，和你一样年轻"
            speed={3}
            style={{
              fontSize: 'inherit', fontWeight: 'inherit',
              background: 'linear-gradient(180deg, #E8C97A 0%, #D4A843 50%, #B8860B 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', display: 'inline',
            }}
          />
        </h2>

        <div className="chapter-grid-2">
          <div className="data-card">
            <h3 style={{ color: 'var(--text-secondary)', marginBottom: 16, letterSpacing: '0.04em' }}>
              2025年党员年龄分布
            </h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[...ageDistribution].reverse()} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" horizontal={false} />
                  <XAxis type="number" stroke="#949494" tick={{ fill: '#B0B0B0', fontSize: 11 }} />
                  <YAxis type="category" dataKey="age" stroke="#949494" tick={{ fill: '#B0B0B0', fontSize: 11 }} width={100} />
                  <Tooltip
                    contentStyle={{ background: '#1A1A1A', border: '1px solid rgba(212,168,67,0.4)', borderRadius: 8 }}
                    formatter={(value) => [`${value}万 (${ageDistribution.find(d=>d.count===value)?.pct}%)`, '党员数']}
                  />
                  <Bar dataKey="count" radius={[0, 4, 4, 0]} maxBarSize={30}>
                    {[...ageDistribution].reverse().map((_, i) => (
                      <Cell key={i} fill={ageColors[i]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="data-card">
            <h3 style={{ color: 'var(--text-secondary)', marginBottom: 16, letterSpacing: '0.04em' }}>
              新发展党员中 · 35岁以下占比
            </h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={youthRecruitment} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="year" stroke="#949494" tick={{ fill: '#B0B0B0', fontSize: 14 }} />
                  <YAxis stroke="#949494" tick={{ fill: '#B0B0B0' }} domain={[0, 100]} tickFormatter={v => `${v}%`} />
                  <Tooltip
                    contentStyle={{ background: '#1A1A1A', border: '1px solid rgba(212,168,67,0.4)', borderRadius: 8 }}
                    formatter={(value) => [`${value}%`, '青年占比']}
                  />
                  <Bar dataKey="youthPct" fill="#D4A843" radius={[8, 8, 0, 0]} maxBarSize={80}
                    label={{ position: 'top', fill: '#D4A843', fontSize: 18, fontWeight: 700, formatter: v => `${v}%` }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <FadeContent>
          <div className="data-card chapter-grid-3" style={{ marginBottom: 24 }}>
            <div>
              <div className="stat-number" style={{ color: 'var(--gold-light)' }}>
                <CountUp to={totalYouth} decimals={1} duration={2} />万
              </div>
              <div className="stat-label">35岁以下党员总数</div>
            </div>
            <div>
              <div className="stat-number" style={{ color: '#4ADE80' }}>
                <CountUp to={175.3} decimals={1} duration={1.5} />万
              </div>
              <div className="stat-label">2025年新发展青年党员</div>
            </div>
            <div>
              <div className="stat-number" style={{ color: 'var(--red-primary)' }}>
                <CountUp to={84} duration={1.5} />%
              </div>
              <div className="stat-label">青年占新发展党员比例</div>
            </div>
          </div>
        </FadeContent>

        <div className="chapter-question">
          如果你觉得入党是"少数人的选择"——数据告诉你，你错了。84%的新党员都不到35岁。这不是"少数"，这是"大多数"。
        </div>

        <p className="narrative-text">
          很多人对入党的印象还停留在"中年干部"、"办公室政治"——
          但数字不会撒谎：2025年，全国新发展党员<span className="num">208.6万</span>人中，
          <span className="hl">35岁及以下的年轻人占了整整84.0%——175.3万人。</span>
          这个比例还在逐年攀升。
        </p>

        <p className="narrative-text">
          175.3万人是什么概念？相当于<span className="hl">北京大学、清华大学、复旦大学、上海交大、
          浙江大学五所顶尖高校的在校生加起来，都凑不够这个数。</span>
          去年一年，就有这么多和你年龄相仿的年轻人，郑重地写下了入党申请书。
          他们和你上着一样的课、刷着一样的B站、追着一样的番——
          <span className="hl">但他们多做了一个决定：加入中国共产党。</span>
        </p>

        <p className="narrative-text">
          而且，2025年新发展党员中女性占比<span className="num">46.5%</span>、
          少数民族占比<span className="num">10.2%</span>。
          这个组织不是只属于某一类人——<span className="hl">无论你的性别、民族、籍贯，
          大门都是敞开的。</span> 一大代表平均年龄28岁；今天，
          新党员中超过八成不到35岁。105年来，<span className="hl">"年轻"一直是这个组织最稳定的基因。</span>
        </p>

        <div className="callout-box">
          <p>
            <span className="hl">所以，入党不是"追随上一代的脚步"——</span><br />
            而是和你身边最优秀、最有行动力的同龄人一起，
            站到改变社会的前线去。
            入党不是"被同化"——<span className="hl">是你们这代人，正在重新定义它。</span><br />
            你带进去的每一个新想法、每一种新视野，
            都会让这个百年组织变得更年轻、更贴近时代。
          </p>
        </div>
      </div>
    </section>
  );
}
