// 第五章：社会基石
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { occupationDistribution, orgByField } from '../data';
import FadeContent from '../components/react-bits/FadeContent/FadeContent';

const pieColors = ['#C41E23','#D4906A','#E8C97A','#4ADE80'];
const barColors = ['#C41E23','#D4906A','#E8C97A','#C46B51','#8B1A1F','#B0B0B0','#D4A843','#4ADE80'];

export default function Chapter5() {
  return (
    <section id="chapter5" className="chapter">
      <div className="chapter-container">
        <h2 className="chapter-title">无论学什么，都能发光</h2>

        <p className="narrative-text">
          农牧渔民<span className="num">2606.8万</span>人，在田间地头；专业技术人员<span className="num">1669.2万</span>人，在实验室、手术室、讲台；管理人员<span className="num">1186.2万</span>人，在企业一线；还有<span className="num">253.7万</span>名学生党员——<span className="hl">在图书馆、在社团、在每一次志愿服务里。</span>党员不是新闻里的"领导"，而是各个行业里具体的人。
        </p>

        <p className="narrative-text">
          你可能纠结"这个专业，入党有什么用"。答案很简单：<span className="hl">你的专业能力 × 党组织的平台 = 让你做的事真正影响社会。</span>学计算机？党组织里有攻坚"卡脖子"技术的科研团队。学医学？基层的乡村医生计划需要你。学教育？支教、教育扶贫——有无数的渠道让你的知识抵达最需要它的人。
        </p>

        <div className="callout-box">
          <p>
            <span className="hl">别把入党当作"毕业前的一项指标"。</span>把它看作——你即将进入的任何一个行业里，已经有一群最优秀的人在等你。<span className="hl">你不是去"服从安排"，你是去"大展拳脚"。</span>
          </p>
        </div>

        <div className="chapter-grid-2" style={{ marginTop: 32 }}>
          <div className="data-card">
            <h3 style={{ color: 'var(--text-secondary)', marginBottom: 16, letterSpacing: '0.04em', textAlign: 'center' }}>2025年党员职业分布（万人）</h3>
            <div className="chart-wrapper tall">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={occupationDistribution} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" horizontal={false} />
                  <XAxis type="number" stroke="#949494" tick={{ fill: '#B0B0B0', fontSize: 11 }} />
                  <YAxis type="category" dataKey="category" stroke="#949494" tick={{ fill: '#B0B0B0', fontSize: 11 }} width={80} />
                  <Tooltip contentStyle={{ background: '#1A1A1A', border: '1px solid rgba(212,168,67,0.4)', borderRadius: 8 }} />
                  <Bar dataKey="count2025" radius={[0, 6, 6, 0]} maxBarSize={30}>
                    {occupationDistribution.map((_, i) => (<Cell key={i} fill={barColors[i]} />))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <FadeContent>
            <div className="data-card">
              <h3 style={{ color: 'var(--text-secondary)', marginBottom: 16, letterSpacing: '0.04em', textAlign: 'center' }}>党组织覆盖的主要领域</h3>
              <div className="chart-wrapper" style={{ overflow: 'visible' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                    <Pie data={orgByField} cx="50%" cy="50%" innerRadius={50} outerRadius={110} paddingAngle={3} dataKey="count" nameKey="field"
                      label={({ field, count }) => `${field}\n${count}万`} labelLine={{ stroke: '#949494' }}>
                      {orgByField.map((_, i) => (<Cell key={i} fill={pieColors[i]} stroke="none" />))}
                    </Pie>
                    <Tooltip contentStyle={{ background: '#1A1A1A', border: '1px solid rgba(212,168,67,0.4)', borderRadius: 8 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
