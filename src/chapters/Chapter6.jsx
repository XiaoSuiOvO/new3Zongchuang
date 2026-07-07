import { memo } from 'react';
// 第六章：薪火相传
import CountUp from '../components/react-bits/CountUp/CountUp';

const Chapter = memo(function Chapter6() {
  return (
    <section id="chapter6" className="chapter">
      <div className="chapter-container">
        <h2 className="chapter-title">下一个百年，轮到你了</h2>

        <p className="narrative-text" style={{ maxWidth: '65ch', margin: '16px auto' }}>
          这片环形图里，<span className="hl">金色的那一圈</span>是十八大以来入党的<span className="num">3018.7万人</span>——占全体党员近三分之一。从新中国成立前的<span className="num">4.3万名</span>老党员，到社会主义建设时期的<span className="num">1167.4万</span>，到改革开放后的<span className="num">5938.1万</span>，四代人见证了同一个组织在四个时代里如何不断自我更新。<span className="hl">105年了，这个组织从来没有断过代。</span>
        </p>

        <p className="narrative-text" style={{ maxWidth: '65ch', margin: '16px auto' }}>
          从1921年的<span className="num">58颗火种</span>，到2025年的<span className="num">1亿余面旗帜</span>，这一路走了105年。<span className="hl">下一个105年写什么——取决于今天正在看这行字的你。</span>
        </p>

        <div className="callout-box" style={{ textAlign: 'center', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
          <p style={{ fontSize: '1.15rem', lineHeight: 2 }}>
            "组织上入党，一生一次。<br />
            <span className="hl" style={{ fontSize: '1.25rem' }}>思想上入党，一生一世。</span>"<br /><br />
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>选择一种信仰，然后用一生践行它。<br />一百年前有人做出了这个选择。<br />一百年后——<span className="hl">轮到你了。</span></span>
          </p>
        </div>

        <div className="data-card" style={{ marginTop: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#E8C97A', letterSpacing: '0.1em', margin: 0 }}>薪火相传</h3>
            <div className="stat-label" style={{ marginTop: 8, fontSize: 15 }}>
              每 <span style={{ color: 'var(--gold-light)', fontWeight: 700 }}>3个</span> 党员中就有 <span style={{ color: 'var(--red-primary)', fontWeight: 700 }}>1个</span> 是新时代入党
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
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
    </section>
  );
}
);
export default Chapter
