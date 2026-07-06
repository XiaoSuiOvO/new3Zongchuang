import { useState, useEffect, useCallback, memo } from 'react';
import Hyperspeed from './components/react-bits/Hyperspeed/Hyperspeed';
import ShinyText from './components/react-bits/ShinyText/ShinyText';
import FadeContent from './components/react-bits/FadeContent/FadeContent';
import Chapter1 from './chapters/Chapter1';
import Chapter2 from './chapters/Chapter2';
import Chapter3 from './chapters/Chapter3';
import Chapter4 from './chapters/Chapter4';
import Chapter5 from './chapters/Chapter5';
import Chapter6 from './chapters/Chapter6';

// ========== 不变的配置抽到组件外部 ==========
const heroHyperspeedConfig = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  distortion: 'stretch',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 3,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 10,
  lightPairsPerRoadWay: 30,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [120, 160],
  carLightsLength: [400 * 0.05, 400 * 0.15],
  carLightsRadius: [0.05, 0.14],
  carLightsSpeed: [0.05, 0.14],
  color: [0x8B0000, 0xB22222, 0xC41E23],
  background: 0x0D0D0D,
};

const ctaHyperspeedConfig = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  distortion: 'stretch',
  length: 400,
  roadWidth: 8,
  islandWidth: 2,
  lanesPerRoad: 3,
  fov: 100,
  fovSpeedUp: 150,
  speedUp: 1.5,
  carLightsFade: 0.3,
  totalSideLightSticks: 8,
  lightPairsPerRoadWay: 25,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [120, 160],
  carLightsLength: [400 * 0.05, 400 * 0.15],
  carLightsRadius: [0.05, 0.14],
  carLightsSpeed: [0.05, 0.14],
  color: [0xC41E23, 0xD4A843, 0xE8C97A],
  background: 0x0D0D0D,
};

const chapters = [
  { id: 'chapter1', title: '星火燎原', num: '壹' },
  { id: 'chapter2', title: '扎根中国', num: '贰' },
  { id: 'chapter3', title: '知识重塑', num: '叁' },
  { id: 'chapter4', title: '青春接力', num: '肆' },
  { id: 'chapter5', title: '社会基石', num: '伍' },
  { id: 'chapter6', title: '薪火相传', num: '陆' },
];

// ========== 提取 Hyperspeed 为独立 memo 组件，永不重渲染 ==========
const HeroBackground = memo(function HeroBackground() {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
      transform: 'translateZ(0)', backfaceVisibility: 'hidden',
    }}>
      <Hyperspeed effectOptions={heroHyperspeedConfig} />
    </div>
  );
});

const CtaBackground = memo(function CtaBackground() {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.3,
      transform: 'translateZ(0)', backfaceVisibility: 'hidden',
    }}>
      <Hyperspeed effectOptions={ctaHyperspeedConfig} />
    </div>
  );
});

// ========== 主应用 ==========
export default function App() {
  const [activeChapter, setActiveChapter] = useState(-1);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    setScrollProgress(progress);

    // 只在章节切换时才更新 activeChapter，减少不必要的重渲染
    for (let i = chapters.length - 1; i >= 0; i--) {
      const el = document.getElementById(chapters[i].id);
      if (el && el.offsetTop - 300 <= scrollY) {
        setActiveChapter(prev => prev === i ? prev : i);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 进度条 */}
      <div className="nav-progress" style={{ width: `${scrollProgress}%` }} />

      {/* 顶部章节导航 */}
      <nav className="top-nav" aria-label="章节导航">
        <div className="nav-inner">
          <button
            className={`nav-item nav-home ${activeChapter === -1 ? 'active' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            百年征程
          </button>
          {chapters.map((ch, i) => (
            <button
              key={ch.id}
              className={`nav-item ${i === activeChapter ? 'active' : ''}`}
              onClick={() => scrollTo(ch.id)}
            >
              {ch.num} · {ch.title}
            </button>
          ))}
        </div>
      </nav>

      {/* 导航圆点 */}
      <nav className="nav-dots" aria-label="章节导航">
        {chapters.map((ch, i) => (
          <button
            key={ch.id}
            className={`nav-dot ${i === activeChapter ? 'active' : ''}`}
            onClick={() => scrollTo(ch.id)}
            title={`第${ch.num}章 · ${ch.title}`}
            aria-label={`跳转到第${ch.num}章：${ch.title}`}
            aria-current={i === activeChapter ? 'true' : undefined}
          />
        ))}
      </nav>

      {/* ========== HERO ========== */}
      <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <HeroBackground />

        <div style={{ position: 'relative', zIndex: 10 }}>
          <FadeContent>
            <p className="hero-subtitle">中国共产党 · 建党105周年数据新闻</p>
          </FadeContent>

          <FadeContent>
            <h1 className="hero-title">
              <ShinyText
                text="百年征程 风华正茂"
                speed={3}
                style={{
                  fontSize: 'inherit', fontWeight: 'inherit',
                  letterSpacing: 'inherit',
                  background: 'linear-gradient(180deg, #E8C97A 0%, #D4A843 50%, #B8860B 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text', display: 'block',
                }}
              />
            </h1>
          </FadeContent>

          <FadeContent>
            <p style={{
              color: 'var(--text-secondary)', textAlign: 'center',
              maxWidth: '55ch', margin: '24px auto 0',
              fontSize: '1.1rem', lineHeight: 1.8, letterSpacing: '0.04em',
              textWrap: 'pretty',
            }}>
              从58个年轻人的理想，到一亿人的共同信仰。<br />
              105年来，最优秀的人选择加入。<br />
              <span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>下一个，是你吗？</span>
            </p>
          </FadeContent>

          <FadeContent>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <button
                onClick={() => scrollTo('chapter1')}
                className="cta-button"
                aria-label="开始探索数据可视化"
              >
                开始探索
              </button>
            </div>
          </FadeContent>
        </div>

        <div className="hero-year" style={{
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          fontSize: '15rem', opacity: 0.03,
        }}>
          1921
        </div>
      </section>

      {/* ========== 六章正文 ========== */}
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
      <Chapter5 />
      <Chapter6 />

      {/* ========== CTA 结尾 ========== */}
      <section className="cta-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <CtaBackground />

        <div style={{ position: 'relative', zIndex: 10 }}>
          <FadeContent>
            <h2 className="cta-title">
              <ShinyText
                text="百年大党，等你加入"
                speed={3}
                style={{
                  fontSize: 'inherit', fontWeight: 'inherit',
                  background: 'linear-gradient(180deg, #E8C97A 0%, #D4A843 50%, #B8860B 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text', display: 'inline',
                }}
              />
            </h2>
          </FadeContent>

          <FadeContent>
            <p className="cta-body">
              1921年，13个年轻人在上海的一间石库门房子里开会，<br />
              他们中最大的45岁，最小的只有19岁。<br /><br />
              当时的他们不知道未来会发生什么，<br />
              但他们知道：<span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
                总得有人站出来改变这一切。
              </span><br /><br />
              105年后，这个国家变了，<br />
              但 28 岁以下的青年仍然是这个组织最活跃的新鲜血液。<br />
              <span style={{ color: 'var(--red-primary)', fontWeight: 700 }}>
                下一个写进党史的名字，也许就是你。
              </span>
            </p>
          </FadeContent>

          <FadeContent>
            <a
              href="#chapter1"
              className="cta-button"
              onClick={(e) => { e.preventDefault(); scrollTo('chapter1'); }}
              style={{ display: 'inline-block', textAlign: 'center' }}
            >
              重新探索
            </a>
          </FadeContent>
        </div>
      </section>

      {/* ========== Footer ========== */}
      <footer className="footer">
        <p>本页数据均来源于中共中央组织部历年《中国共产党党内统计公报》及公开党史资料</p>
        <p style={{ marginTop: 8 }}>
          1921 — 2025 · 跨越105年的数据叙事
        </p>
      </footer>
    </>
  );
}
