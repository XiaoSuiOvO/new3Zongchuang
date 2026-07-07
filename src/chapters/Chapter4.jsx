// 第四章：青春接力
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ageDistribution, youthRecruitment } from '../data';
import CountUp from '../components/react-bits/CountUp/CountUp';
import FadeContent from '../components/react-bits/FadeContent/FadeContent';

const ageColors = ['#4ADE80','#60C070','#7CB860','#98B050','#B4A840','#D0A030','#E89020','#C41E23'];

export default function Chapter4() {
  const youthData = ageDistribution.slice(0, 2);
  const totalYouth = youthData.reduce((s, d) => s + d.count, 0);
  return (
    <section id="chapter4" className="chapter">
      <div className="chapter-container">
        <h2 className="chapter-title">大多数新党员，和你一样年轻</h2>

        <p className="narrative-text">
          2025年，全国新发展党员<span className="num">208.6万</span>人中，<span className="hl">35岁及以下占84.0%——175.3万人。</span>175.3万是什么概念？相当于清北复交浙五所顶尖高校在校生加起来都不够。他们和你上着一样的课、刷着一样的B站——<span className="hl">但他们多做了一个决定：加入中国共产党。</span>
        </p>

        <p className="narrative-text">
          新发展党员中女性占比<span className="num">46.5%</span>、少数民族占比<span className="num">10.2%</span>。无论你的性别、民族、籍贯，大门都是敞开的。一大代表平均年龄28岁；今天新党员超八成不到35岁。<span className="hl">105年来，"年轻"一直是这个组织最稳定的基因。</span>
        </p>

        <div className="callout-box">
          <p>
            <span className="hl">入党不是"追随上一代"，而是和你身边最优秀的同龄人一起，站到改变社会的前线去。</span>不是"被同化"——<span className="hl">是你们这代人正在重新定义它。</span>你带进去的每一个新想法，都会让这个百年组织变得更年轻。
          </p>
        </div>

        <FadeContent>
          <div className="data-card chapter-grid-3" style={{ marginTop: 32 }}>
            <div><div className="stat-number" style={{ color: 'var(--gold-light)' }}><CountUp to={totalYouth} decimals={1} duration={2} />万</div><div className="stat-label">35岁以下党员总数</div></div>
            <div><div className="stat-number" style={{ color: '#4ADE80' }}><CountUp to={175.3} decimals={1} duration={1.5} />万</div><div className="stat-label">2025年新发展青年党员</div></div>
            <div><div className="stat-number" style={{ color: 'var(--red-primary)' }}><CountUp to={84} duration={1.5} />%</div><div className="stat-label">青年占新发展党员比例</div></div>
          </div>
        </FadeContent>

        <div className="chapter-grid-2" style={{ marginTop: 20 }}>
          <div className="data-card">
            <h3 style={{ color: 'var(--text-secondary)', marginBottom: 16, letterSpacing: '0.04em', textAlign: 'center' }}>2025年党员年龄分布</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[...ageDistribution].reverse()} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" horizontal={false} />
                  <XAxis type="number" stroke="#949494" tick={{ fill: '#B0B0B0', fontSize: 11 }} />
                  <YAxis type="category" dataKey="age" stroke="#949494" tick={{ fill: '#B0B0B0', fontSize: 11 }} width={100} />
                  <Tooltip contentStyle={{ background: '#1A1A1A', border: '1px solid rgba(212,168,67,0.4)', borderRadius: 8 }} formatter={(value) => [`${value}万`, '党员数']} />
                  <Bar dataKey="count" radius={[0, 4, 4, 0]} maxBarSize={30}>
                    {[...ageDistribution].reverse().map((_, i) => (<Cell key={i} fill={ageColors[i]} />))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="data-card">
            <h3 style={{ color: 'var(--text-secondary)', marginBottom: 16, letterSpacing: '0.04em', textAlign: 'center' }}>新发展党员中 · 青年占比</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={youthRecruitment} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="year" stroke="#949494" tick={{ fill: '#B0B0B0', fontSize: 14 }} />
                  <YAxis stroke="#949494" tick={{ fill: '#B0B0B0' }} domain={[0, 100]} tickFormatter={v => `${v}%`} />
                  <Tooltip contentStyle={{ background: '#1A1A1A', border: '1px solid rgba(212,168,67,0.4)', borderRadius: 8 }} formatter={(value) => [`${value}%`, '青年占比']} />
                  <Bar dataKey="youthPct" fill="#D4A843" radius={[8, 8, 0, 0]} maxBarSize={80} label={{ position: 'top', fill: '#D4A843', fontSize: 18, fontWeight: 700, formatter: v => `${v}%` }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
