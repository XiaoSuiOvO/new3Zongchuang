// 第三章：知识重塑 — "你手中的书本，就是改变中国的力量"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend
} from 'recharts';
import { educationData } from '../data';
import BlurText from '../components/react-bits/BlurText/BlurText';
import CountUp from '../components/react-bits/CountUp/CountUp';
import FadeContent from '../components/react-bits/FadeContent/FadeContent';

const educationColors = {
  illiterate: '#5C0E12',
  primary: '#8B1A1F',
  junior: '#C46B51',
  senior: '#D4A843',
};

export default function Chapter3() {
  const stackedData = educationData.map(d => ({
    period: d.period,
    '文盲/半文盲': d.illiterate,
    '小学': d.primary,
    '初中及以下': d.junior,
    '大专及以上': d.senior,
    note: d.note,
  }));

  return (
    <section id="chapter3" className="chapter">
      <div className="chapter-container">
        <BlurText text="第三章 · 知识重塑" className="chapter-subtitle" />
        <h2 className="chapter-title">你手中的书本，就是力量</h2>

        <div className="data-card" style={{ marginBottom: 24 }}>
          <div className="chart-wrapper tall">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stackedData} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
                stackOffset="expand" layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis type="number" tickFormatter={v => `${Math.round(v * 100)}%`} stroke="#949494" tick={{ fill: '#B0B0B0' }} />
                <YAxis type="category" dataKey="period" stroke="#949494" tick={{ fill: '#B0B0B0', fontSize: 14 }} width={60} />
                <Tooltip
                  contentStyle={{ background: '#1A1A1A', border: '1px solid rgba(212,168,67,0.4)', borderRadius: 8 }}
                  labelStyle={{ color: '#D4A843', fontWeight: 700 }}
                  formatter={(value) => [`${value}%`, '']}
                />
                <Legend wrapperStyle={{ color: '#B0B0B0' }} />
                <Bar dataKey="文盲/半文盲" stackId="a" fill={educationColors.illiterate} maxBarSize={40} />
                <Bar dataKey="小学" stackId="a" fill={educationColors.primary} />
                <Bar dataKey="初中及以下" stackId="a" fill={educationColors.junior} />
                <Bar dataKey="大专及以上" stackId="a" fill={educationColors.senior} radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <FadeContent>
          <div className="data-card chapter-grid-3" style={{ marginBottom: 24 }}>
            <div>
              <div className="stat-number" style={{ color: 'var(--red-primary)' }}>
                <CountUp to={5976.5} decimals={1} duration={2} />万
              </div>
              <div className="stat-label">大专以上学历党员</div>
            </div>
            <div>
              <div className="stat-number" style={{ color: 'var(--gold-light)' }}>
                <CountUp to={59} duration={1.5} />%
              </div>
              <div className="stat-label">占党员总数比例</div>
            </div>
            <div>
              <div className="stat-number" style={{ color: 'var(--gold)' }}>
                <CountUp to={54.8} duration={1.5} />%
              </div>
              <div className="stat-label">2025年新党员中大专以上占比</div>
            </div>
          </div>
        </FadeContent>

        <div className="chapter-question">
          今天的中国共产党，正在成为知识精英最密集的组织。你的学历和学识，在这里会被珍视。
        </div>

        <p className="narrative-text">
          1949年，党员中<span className="num">69%是文盲半文盲</span>。不是因为他们不想学习——那个年代，
          整个中国都穷，能吃饱饭就不错了，哪有钱读书？但共产党有一个传统：
          <span className="hl">一边干革命，一边学文化</span>。识字班、夜校、扫盲运动……
          这个党用了70年时间，把自己从一支"工农武装"锻造成了一支"知识铁军"。
        </p>

        <p className="narrative-text">
          看那条堆积图的变化——<span className="hl">金色的"大专及以上"从几乎为零，
          一路扩张到今天占据大半壁江山。</span>
          2025年，大专以上学历党员达到<span className="num">5976.5万人</span>，占总数的59%。
          而在2025年新发展的党员中，超过一半——<span className="num">54.8%</span>——拥有大专以上学历。
        </p>

        <p className="narrative-text">
          这对你意味着什么？意味着<span className="hl">你今天的课堂笔记、实验室数据、期末论文——</span>
          不会被浪费。在这个组织里，你会遇到和你一样优秀、甚至比你更优秀的人。
          他们读过的书不比你少，思考的问题不比你浅，
          而他们选择加入这个组织，<span className="hl">因为这里能让知识发挥最大的社会价值。</span>
        </p>

        <div className="callout-box">
          <p>
            有人说"入党会影响学业"——数据告诉你恰恰相反。<br />
            <span className="hl">中国最聪明的大脑正在向党组织聚集。</span>
            从高校实验室到航天发射场，从硅谷归国精英到乡村支教老师——
            他们用行动证明：<span className="hl">信仰科学和信仰共产主义，从来不是对立的。</span>
            相反，当一个科学家把个人才华融入国家需求时，他能改变的远不止一篇论文。
          </p>
        </div>
      </div>
    </section>
  );
}
