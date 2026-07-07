// 第六章：薪火相传
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { entryPeriodData } from '../data';
import CountUp from '../components/react-bits/CountUp/CountUp';
import ShinyText from '../components/react-bits/ShinyText/ShinyText';

const ringColors = ['#5C0E12', '#8B1A1F', '#C46B51', '#D4A843'];

const RingLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, period }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if (percent < 0.05) return null;
  return (
    <text x={x} y={y} fill="#F5F5F5" textAnchor="middle" dominantBaseline="central" fontSize={11}>
      <tspan x={x} dy="-0.4em">{period.split('\n')[0]}</tspan>
      <tspan x={x} dy="1.3em" fill="#D4A843" fontWeight={700}>{(percent * 100).toFixed(1)}%</tspan>
    </text>
  );
};

export default function Chapter6() {
  return (
    <section id="chapter6" className="chapter">
      <div className="chapter-container">
        <h2 className="chapter-title">下一个百年，轮到你了</h2>

        <p className="narrative-text" style={{ textAlign: 'center', maxWidth: '65ch', margin: '16px auto', fontSize: '1.1rem' }}>
          这片环形图里，<span className="hl">金色的那一圈</span>，是十八大以来入党的<span className="num">3018.7万人</span>——占全体党员的近三分之一。而在他们入党之前，有新中国成立前就加入的<span className="num">4.3万名</span>老党员，有社会主义建设时期加入的<span className="num">1167.4万人</span>，有改革开放后加入的<span className="num">5938.1万人</span>。
        </p>

        <p className="narrative-text" style={{ textAlign: 'center', maxWidth: '65ch', margin: '16px auto', fontSize: '1.1rem' }}>
          这四代人，见证了同一个组织在四个截然不同的时代里，如何不断自我更新。老党员慢慢老去，但新党员<span className="hl">以每年超过200万的速度涌入</span>——像潮水一样，一浪推着一浪。<span className="hl">105年了，这个组织从来没有断过代。</span>
        </p>

        <p className="narrative-text" style={{ textAlign: 'center', maxWidth: '65ch', margin: '16px auto', fontSize: '1.1rem' }}>
          从1921年的<span className="num">58颗火种</span>，到2025年扎根各行各业的<span className="num">1亿余面旗帜</span>，这一路走了105年。而<span className="hl">下一个105年写什么——取决于今天正在看这行字的你。</span>
        </p>

        <div className="callout-box" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.15rem', lineHeight: 2 }}>
            "组织上入党，一生一次。<br />
            <span className="hl" style={{ fontSize: '1.25rem' }}>思想上入党，一生一世。</span>"<br /><br />
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              ——选择一种信仰，然后用一生去践行它。一百年前有人做出了这个选择。一百年后——<span className="hl">轮到你了。</span>
            </span>
          </p>
        </div>

        <div className="chapter-grid-2" style={{ marginTop: 32 }}>
          <div className="data-card">
            <h3 style={{ color: 'var(--text-secondary)', marginBottom: 16, letterSpacing: '0.04em' }}>不同时代的入党烙印</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={entryPeriodData.map(d => ({ period: d.period, value: d.count2025 }))} cx="50%" cy="50%"
                    innerRadius={45} outerRadius={120} paddingAngle={2} dataKey="value" labelLine={false} label={<RingLabel />}>
                    {entryPeriodData.map((_, i) => (<Cell key={i} fill={ringColors[i]} stroke="none" />))}
                  </Pie>
                  <Tooltip contentStyle={{ background: '#1A1A1A', border: '1px solid rgba(212,168,67,0.4)', borderRadius: 8 }} formatter={(value) => [`${value.toLocaleString()}万`, '党员数']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="data-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <ShinyText text="薪火相传" speed={3}
                style={{ fontSize: '1.8rem', fontWeight: 900, color: '#E8C97A', letterSpacing: '0.1em', textAlign: 'center', display: 'block' }} />
              <div className="stat-label" style={{ marginTop: 8, fontSize: 15 }}>
                每 <span style={{ color: 'var(--gold-light)', fontWeight: 700 }}>3个</span> 党员中就有 <span style={{ color: 'var(--red-primary)', fontWeight: 700 }}>1个</span> 是新时代入党
              </div>
            </div>
            <div className="chapter-grid-2" style={{ gap: 16 }}>
              <div style={{ textAlign: 'center' }}>
                <div className="stat-number" style={{ color: 'var(--gold-light)' }}><CountUp to={3018.7} decimals={1} duration={2} />万</div>
                <div className="stat-label">十八大以来入党</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="stat-number" style={{ color: 'var(--red-primary)' }}><CountUp to={29.8} decimals={1} duration={2} />%</div>
                <div className="stat-label">占总党员近三分之一</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
