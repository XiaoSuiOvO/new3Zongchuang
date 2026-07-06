// 第二章：扎根中国 — "你在哪里，组织就在哪里"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell
} from 'recharts';
import { organizationGrowth, coverageRate } from '../data';
import BlurText from '../components/react-bits/BlurText/BlurText';
import FadeContent from '../components/react-bits/FadeContent/FadeContent';

const orgColors = ['#C41E23', '#B83230', '#A34340', '#C46B51', '#D4906A', '#E8C97A', '#D4A843'];

export default function Chapter2() {
  return (
    <section id="chapter2" className="chapter">
      <div className="chapter-container">
        <BlurText text="第二章 · 扎根中国" className="chapter-subtitle" />
        <h2 className="chapter-title">无论你在哪里，我们都在</h2>

        <FadeContent>
          <div className="data-card" style={{ marginBottom: 24 }}>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={organizationGrowth} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="year" stroke="#949494" tick={{ fill: '#B0B0B0', fontSize: 13 }} />
                  <YAxis stroke="#949494" tick={{ fill: '#B0B0B0', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ background: '#1A1A1A', border: '1px solid rgba(212,168,67,0.4)', borderRadius: 8 }}
                    labelStyle={{ color: '#D4A843', fontWeight: 700 }}
                    itemStyle={{ color: '#F5F5F5' }}
                    formatter={(value) => [`${value.toLocaleString()}万个`, '基层组织']}
                  />
                  <Bar dataKey="orgs" radius={[6, 6, 0, 0]} maxBarSize={50}>
                    {organizationGrowth.map((_, i) => (
                      <Cell key={i} fill={orgColors[i]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </FadeContent>

        <div className="data-card" style={{ marginBottom: 24 }}>
          <h3 style={{ color: 'var(--text-secondary)', marginBottom: 16, letterSpacing: '0.05em' }}>
            在你生活的地方，党组织覆盖率
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--text-secondary)' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th style={{ padding: '10px', textAlign: 'left', color: 'var(--gold-light)' }}>你所在的地方</th>
                <th style={{ padding: '10px', textAlign: 'right', color: 'var(--gold-light)' }}>已建党组织</th>
                <th style={{ padding: '10px', textAlign: 'right', color: 'var(--gold-light)' }}>覆盖率</th>
              </tr>
            </thead>
            <tbody>
              {coverageRate.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '12px 10px' }}>{row.area}</td>
                  <td style={{ padding: '12px 10px', textAlign: 'right', fontFamily: 'monospace', color: 'var(--text-primary)' }}>
                    {row.orgs.toLocaleString()}万
                  </td>
                  <td style={{ padding: '12px 10px', textAlign: 'right', color: '#4ADE80', fontWeight: 700 }}>
                    {row.rate}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="chapter-question">
          543万个基层党组织，遍布中国的每一个角落——包括你脚下的这片土地。
        </div>

        <p className="narrative-text">
          1949年新中国成立时，全国只有大约<span className="num">20万个</span>基层党组织。
          那时候，很多偏远乡村连一条像样的路都没有，更别说一个党支部了。
          而今天——<span className="num">543.1万个</span>党组织像毛细血管一样，
          深入到中国的每一座城市、每一个乡镇、每一条街道。
        </p>

        <p className="narrative-text">
          想想这意味着什么：<span className="hl">无论你来自哪里、学什么专业、将来去哪个城市工作——</span>
          你的身边就有一个党组织。不是你去找组织，而是<span className="hl">组织就在你身边</span>。
          从北上广深的写字楼，到青藏高原的牧民定居点，<span className="num">99.9%</span>的覆盖率不是一句口号——
          它是543万个党支部日复一日的真实存在。
        </p>

        <p className="narrative-text">
          你可能觉得"党组织"离你很遥远。但下次路过你所在学院的公告栏时，
          留意一下——大概率会有一个"学生党支部"的联系方式贴在某个角落。
          你身边的班长、社团负责人、甚至你那个每天和你一起熬夜赶作业的室友，
          可能就是一名党员。<span className="hl">他们看起来和你没什么不同，但他们在做一些"额外"的事。</span>
        </p>

        <div className="callout-box">
          <p>
            <span className="hl">入党之后，你不是一个人在奋斗。</span><br />
            从你郑重地递上入党申请书的那天起，身后就站着一个
            有105年历史、1亿名成员、543万个基层组织的集体。
            他们会培养你、支持你、给你平台、帮你成长。
            你想组织一次支教活动？想为家乡做点什么？想发起一个公益项目？
            <span className="hl">组织的力量，会让你的想法变成现实。</span>
          </p>
        </div>
      </div>
    </section>
  );
}
