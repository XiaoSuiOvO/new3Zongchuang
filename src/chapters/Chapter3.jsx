// 第三章：知识重塑
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { educationData } from '../data';
import CountUp from '../components/react-bits/CountUp/CountUp';
import FadeContent from '../components/react-bits/FadeContent/FadeContent';

const eduColors = { illiterate: '#5C0E12', primary: '#8B1A1F', junior: '#C46B51', senior: '#D4A843' };

export default function Chapter3() {
  const stacked = educationData.map(d => ({ period: d.period, '文盲/半文盲': d.illiterate, '小学': d.primary, '初中及以下': d.junior, '大专及以上': d.senior }));
  return (
    <section id="chapter3" className="chapter">
      <div className="chapter-container">
        <h2 className="chapter-title">你手中的书本，就是力量</h2>

        <p className="narrative-text">
          1949年，党员中<span className="num">69%是文盲半文盲</span>。但共产党有一个传统：<span className="hl">一边干革命，一边学文化</span>。识字班、夜校、扫盲运动……这个党用了70年，把自己从"工农武装"锻造成了"知识铁军"。2025年，大专以上学历党员达<span className="num">5976.5万人</span>，占总数59%；新发展党员中超过一半拥有大专以上学历。
        </p>

        <div className="callout-box">
          <p>
            <span className="hl">中国最聪明的大脑正在向党组织聚集。</span>从高校实验室到航天发射场，从归国精英到乡村教师——他们用行动证明：信仰科学与信仰共产主义，从来不是对立的。当一个科学家把个人才华融入国家需求时，他能改变的远不止一篇论文。
          </p>
        </div>

        <FadeContent>
          <div className="data-card chapter-grid-3" style={{ marginTop: 32 }}>
            <div><div className="stat-number" style={{ color: 'var(--red-primary)' }}><CountUp to={5976.5} decimals={1} duration={2} />万</div><div className="stat-label">大专以上学历党员</div></div>
            <div><div className="stat-number" style={{ color: 'var(--gold-light)' }}><CountUp to={59} duration={1.5} />%</div><div className="stat-label">占党员总数比例</div></div>
            <div><div className="stat-number" style={{ color: 'var(--gold)' }}><CountUp to={54.8} duration={1.5} />%</div><div className="stat-label">新党员中大专以上占比</div></div>
          </div>
        </FadeContent>

        <div className="data-card" style={{ marginTop: 20 }}>
          <div className="chart-wrapper tall">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stacked} margin={{ top: 10, right: 30, left: 20, bottom: 10 }} stackOffset="expand" layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis type="number" tickFormatter={v => `${Math.round(v * 100)}%`} stroke="#949494" tick={{ fill: '#B0B0B0' }} />
                <YAxis type="category" dataKey="period" stroke="#949494" tick={{ fill: '#B0B0B0', fontSize: 14 }} width={60} />
                <Tooltip contentStyle={{ background: '#1A1A1A', border: '1px solid rgba(212,168,67,0.4)', borderRadius: 8 }} labelStyle={{ color: '#D4A843', fontWeight: 700 }} formatter={(value) => [`${value}%`, '']} />
                <Legend wrapperStyle={{ color: '#B0B0B0' }} />
                <Bar dataKey="文盲/半文盲" stackId="a" fill={eduColors.illiterate} maxBarSize={40} />
                <Bar dataKey="小学" stackId="a" fill={eduColors.primary} />
                <Bar dataKey="初中及以下" stackId="a" fill={eduColors.junior} />
                <Bar dataKey="大专及以上" stackId="a" fill={eduColors.senior} radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
