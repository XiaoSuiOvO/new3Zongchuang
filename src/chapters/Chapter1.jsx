// 第一章：星火燎原 — "从一叶扁舟到星辰大海"
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { memberGrowth } from '../data';
import BlurText from '../components/react-bits/BlurText/BlurText';
import CountUp from '../components/react-bits/CountUp/CountUp';
import FadeContent from '../components/react-bits/FadeContent/FadeContent';

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{ background: '#1A1A1A', border: '1px solid rgba(212,168,67,0.4)', borderRadius: 8, padding: '12px 16px' }}>
      <p style={{ color: '#D4A843', fontWeight: 700, margin: 0 }}>{d.year}年</p>
      <p style={{ color: '#F5F5F5', margin: '4px 0 0' }}>
        党员：<span style={{ color: '#C41E23', fontWeight: 700 }}>{d.count >= 1 ? d.count.toLocaleString() : d.count}万</span>
      </p>
      {d.label && <p style={{ color: '#B0B0B0', fontSize: 12, margin: '2px 0 0' }}>{d.label}</p>}
    </div>
  );
};

export default function Chapter1() {
  return (
    <section id="chapter1" className="chapter">
      <div className="chapter-container">
        <BlurText text="第一章 · 星火燎原" className="chapter-subtitle" />
        <h2 className="chapter-title">从一叶扁舟，到星辰大海</h2>

        <FadeContent>
          <div className="data-card chapter-grid-3" style={{ marginBottom: 24 }}>
            <div>
              <div className="stat-number" style={{ color: 'var(--gold-light)' }}>
                <CountUp to={58} duration={2} />
              </div>
              <div className="stat-label">1921年 · 最初的星火</div>
            </div>
            <div>
              <div className="stat-number" style={{ color: 'var(--red-primary)' }}>
                <CountUp to={10128} duration={2.5} />万
              </div>
              <div className="stat-label">2025年 · 如今的光芒</div>
            </div>
            <div>
              <div className="stat-number" style={{ color: 'var(--gold)' }}>
                105年
              </div>
              <div className="stat-label">从未停止的接力</div>
            </div>
          </div>
        </FadeContent>

        <div className="data-card">
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={memberGrowth} margin={{ top: 30, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="year" stroke="#949494" tick={{ fill: '#B0B0B0', fontSize: 12 }} />
                <YAxis stroke="#949494" tick={{ fill: '#B0B0B0', fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <defs>
                  <linearGradient id="lineGrad1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C41E23" />
                    <stop offset="100%" stopColor="#D4A843" />
                  </linearGradient>
                </defs>
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="url(#lineGrad1)"
                  strokeWidth={3}
                  dot={{ fill: '#D4A843', strokeWidth: 0, r: 4 }}
                  activeDot={{ fill: '#C41E23', stroke: '#D4A843', strokeWidth: 2, r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chapter-question">
          一百多年前，一群平均年龄只有28岁的年轻人，在一条小船上做了一个决定。这个决定，改变了中国。
        </div>

        <p className="narrative-text">
          那是1921年7月，上海法租界的一栋石库门房子里，13个人围坐在一张长桌前。
          他们中<span className="hl">最大的45岁，最小的只有19岁</span>——和你差不多的年纪。
          后来巡捕来了，他们转移到嘉兴南湖的一条游船上继续开会。
          那条船不大，但装下了一个民族的未来。
        </p>

        <p className="narrative-text">
          那时候的中国，内忧外患，民不聊生。这13个人完全可以像当时大多数知识分子一样，
          出国留学、找份安稳工作、过自己的小日子。
          <span className="hl">但他们选择了最难的那条路</span>——建立一个组织，用一生的时间去改变这个国家。
          当时全国加起来，不过<span className="num">58个党员</span>。
        </p>

        <p className="narrative-text">
          没有人能想到，105年后，这个小小的组织变成了拥有
          <span className="num">超过一亿名成员</span>的世界第一大党。
          从58到1亿——这不是一串冷冰冰的数字，这是<span className="hl">一代又一代人选择相信、选择加入、选择奉献</span>的结果。
        </p>

        <div className="callout-box">
          <p>
            <span className="hl">每一百个中国人里，就有7个是共产党员。</span><br />
            他们可能是你的大学老师、你实习医院的医生、你回家路上那个社区志愿者。
            他们就在你身边，做着平凡但不普通的事。
            100多年前那13个年轻人的决定，今天正在被一亿人继续书写。
            <span className="hl">而你——也可以成为下一个提笔的人。</span>
          </p>
        </div>

        <p className="narrative-text">
          上大学的时候，我们都想过一个问题：<span className="hl">我想成为什么样的人？我想为这个世界做点什么？</span>
          1921年的那群年轻人，用一辈子回答了这个问题。
          今天，轮到你了。
        </p>
      </div>
    </section>
  );
}
