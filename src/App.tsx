import { Link } from 'react-router-dom';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Server, Bot, Palette } from 'lucide-react';

// ──────────────────────────────────────────
// 统一样式：标签
// ──────────────────────────────────────────
const tagClass =
  'inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300';

function Tag({ label }: { label: string }) {
  return <span className={tagClass}>{label}</span>;
}

// ──────────────────────────────────────────
// 向下滚动箭头（Section 1 专用）
// ──────────────────────────────────────────
function ScrollArrow() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-[clamp(2.8rem,5vw,4rem)] w-[clamp(2.8rem,5vw,4rem)] items-center justify-center rounded-full border-2 border-white/25">
        <svg
          className="h-[clamp(1rem,1.8vw,1.4rem)] w-[clamp(1rem,1.8vw,1.4rem)] text-white/60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <div className="h-4 w-[1px] bg-white/25" />
      <div className="h-[clamp(0.4rem,0.6vw,0.5rem)] w-[clamp(0.4rem,0.6vw,0.5rem)] rounded-full bg-white/35" />
    </div>
  );
}

// ──────────────────────────────────────────
// 统一卡片样式
// ──────────────────────────────────────────
const cardClass =
  'rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.06]';

// ──────────────────────────────────────────
// App
// ──────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-slate-950 text-slate-200">
      {/* 跃动箭头动画 */}
      <style>{`
        @keyframes bounce-arrow {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(10px); opacity: 1; }
        }
        .animate-bounce-arrow {
          animation: bounce-arrow 1.6s ease-in-out infinite;
        }
      `}</style>
      <FlowArt aria-label="侯凯健个人主页">
        {/* ═══════════════════════════════
            Section 1 — 我是谁
            ═══════════════════════════════ */}
        <FlowSection
          aria-label="Who I am"
          style={{ backgroundColor: '#fd5200', color: '#fff' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Hello</p>
          <hr className="my-[2vw] border-none border-t border-white/30" />

          <div>
            <h1 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
              <Link
                to="/about"
                className="group inline-block"
                aria-label="了解侯凯健"
              >
                <span className="inline-block transition-all duration-300 ease-out group-hover:-translate-y-[0.06em] group-hover:[text-shadow:0_8px_30px_rgba(255,255,255,0.18)]">
                  侯
                </span>
                <span className="inline-block transition-all delay-[60ms] duration-300 ease-out group-hover:-translate-y-[0.06em] group-hover:[text-shadow:0_8px_30px_rgba(255,255,255,0.18)]">
                  凯
                </span>
                <span className="inline-block transition-all delay-[120ms] duration-300 ease-out group-hover:-translate-y-[0.06em] group-hover:[text-shadow:0_8px_30px_rgba(255,255,255,0.18)]">
                  健
                </span>
              </Link>
            </h1>
            <p className="mt-[2vw] text-[clamp(1.2rem,2.5vw,2.5rem)] font-light tracking-wide opacity-90">
              一名菜鸟全栈工程师，理想是用优雅的代码构建优秀的解决方案
            </p>
          </div>

          <hr className="my-[2vw] border-none border-t border-white/30" />

          {/* 向下滚动箭头 — 带跃动效果 */}
          <div className="flex justify-center animate-bounce-arrow">
            <ScrollArrow />
          </div>
        </FlowSection>

        {/* ═══════════════════════════════
            Section 2 — 技术方向
            ═══════════════════════════════ */}
        <FlowSection
          aria-label="Tech stack"
          style={{ backgroundColor: '#000', color: '#fff' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — Stack</p>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Full-stack
              <br />
              Developer
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <p className="max-w-[50ch] text-[clamp(1rem,1.8vw,1.5rem)] font-normal leading-relaxed opacity-85">
            Java · Spring Boot · Spring AI · MySQL · Redis · Docker · VibeCoding
          </p>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <div className="flex flex-wrap gap-[2vw]">
            {[
              { label: 'Java / Spring', sub: '主力开发语言与框架' },
              { label: 'Spring AI Agent', sub: 'AI 智能体应用开发' },
              { label: '数据库设计', sub: 'MySQL · Redis 方案设计' },
              { label: 'DevOps', sub: 'Docker · CI/CD 部署' },
            ].map((skill) => (
              <div key={skill.label} className="min-w-[160px] flex-1">
                <p className="mb-1 text-sm font-bold uppercase tracking-wider">
                  {skill.label}
                </p>
                <p className="text-[clamp(0.8rem,1.1vw,0.95rem)] leading-relaxed opacity-50">
                  {skill.sub}
                </p>
              </div>
            ))}
          </div>
        </FlowSection>

        {/* ═══════════════════════════════
            Section 3 — 项目展示
            ═══════════════════════════════ */}
        <FlowSection
          aria-label="Projects"
          style={{
            background: 'linear-gradient(to bottom, #1A3DE8 0%, #1A3DE8 60%, #0f172a 100%)',
            color: '#fff',
          }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — Projects</p>
          <hr className="my-[2vw] border-none border-t border-white/40" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Build
              <br />
              &amp;
              <br />
              Share
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/40" />
          <p className="max-w-[50ch] text-[clamp(0.95rem,1.5vw,1.2rem)] leading-relaxed opacity-80">
            选择你感兴趣的方向，探索我的项目实践。
          </p>
          <hr className="my-[2vw] border-none border-t border-white/40" />

          {/* 三大模块 GlowCard */}
          <div className="flex flex-wrap items-center justify-center gap-[clamp(1rem,3vw,3rem)]">
            {/* 后端项目 */}
            <Link to="/projects/backend" className="group">
              <GlowCard glowColor="blue" size="md">
                <div className="flex flex-col items-center justify-center text-center gap-3">
                  <div className="rounded-full bg-blue-500/10 p-4 text-blue-400 transition-transform group-hover:scale-110">
                    <Server className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">后端项目</h3>
                  <p className="text-sm text-white/40">Spring Boot 微服务<br/>分布式系统实践</p>
                  <span className="mt-2 text-xs text-white/20 transition-colors group-hover:text-white/40">查看项目 →</span>
                </div>
              </GlowCard>
            </Link>

            {/* Agent 开发 */}
            <Link to="/projects/agent" className="group">
              <GlowCard glowColor="green" size="md">
                <div className="flex flex-col items-center justify-center text-center gap-3">
                  <div className="rounded-full bg-green-500/10 p-4 text-green-400 transition-transform group-hover:scale-110">
                    <Bot className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Agent 开发</h3>
                  <p className="text-sm text-white/40">Spring AI 智能体<br/>流式对话交互</p>
                  <span className="mt-2 text-xs text-white/20 transition-colors group-hover:text-white/40">了解详情 →</span>
                </div>
              </GlowCard>
            </Link>

            {/* 前端设计 */}
            <Link to="/projects/frontend" className="group">
              <GlowCard glowColor="orange" size="md">
                <div className="flex flex-col items-center justify-center text-center gap-3">
                  <div className="rounded-full bg-orange-500/10 p-4 text-orange-400 transition-transform group-hover:scale-110">
                    <Palette className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">前端设计</h3>
                  <p className="text-sm text-white/40">React · Tailwind<br/>交互体验设计</p>
                  <span className="mt-2 text-xs text-white/20 transition-colors group-hover:text-white/40">探索设计 →</span>
                </div>
              </GlowCard>
            </Link>
          </div>
        </FlowSection>

        {/* ═══════════════════════════════
            Section 4 — 技术笔记
            ═══════════════════════════════ */}
        <FlowSection
          aria-label="Notes"
          style={{ backgroundColor: '#09090b', color: '#fff' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">
            04 — Notes
          </p>
          <hr className="my-[2vw] border-none border-t border-white/10" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Notes
            </h2>
            <p className="mt-[1.5vw] max-w-[50ch] text-[clamp(0.9rem,1.3vw,1.1rem)] leading-relaxed opacity-60">
              记录开发中的技术积累与实践经验。
            </p>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/10" />
          <div className={`p-[clamp(1.2rem,2vw,2rem)] ${cardClass}`}>
            <div className="flex items-start gap-4">
              <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-white/20" />
              <div>
                <h3 className="text-[clamp(1.1rem,1.5vw,1.3rem)] font-bold text-white">
                  后端 Java Spring Boot
                </h3>
                <p className="mt-1 text-sm text-white/40">个人笔记 · 2026-02-07</p>
                <p className="mt-3 max-w-[60ch] text-[clamp(0.85rem,1.1vw,1rem)] leading-relaxed text-white/40">
                  全面记录 Spring Boot 框架核心原理、Spring AI Agent 开发实践、数据库设计方法论以及分布式系统架构经验。持续更新中。
                </p>
                <a
                  href="https://houkaijian.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:border-white/20 hover:text-white"
                >
                  阅读笔记 →
                </a>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* ═══════════════════════════════
            Section 5 — 思维导图
            ═══════════════════════════════ */}
        <FlowSection
          aria-label="Mind Map"
          style={{ backgroundColor: '#0f172a', color: '#fff' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">
            05 — Mind Map
          </p>
          <hr className="my-[2vw] border-none border-t border-white/10" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Mind
              <br />
              Map
            </h2>
            <p className="mt-[1.5vw] max-w-[50ch] text-[clamp(0.9rem,1.3vw,1.1rem)] leading-relaxed opacity-60">
              Java 核心知识体系的思维导图整理。
            </p>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/10" />
          <div
            className={`flex flex-col gap-[clamp(1rem,2vw,2rem)] p-[clamp(1rem,2vw,2rem)] md:flex-row md:items-center ${cardClass}`}
          >
            <img
              src="https://houkaijian.xyz/img/mindmaps/1%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E7%BC%A9%E7%95%A5%E5%9B%BE.jpg"
              alt="Java 基础知识导图"
              className="w-full rounded-lg md:w-[clamp(200px,28vw,360px)] md:max-h-[40vh] object-cover"
              loading="lazy"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-[clamp(1.1rem,1.6vw,1.4rem)] font-bold text-white">
                Java 基础知识导图
              </h3>
              <p className="mt-1 text-sm text-white/40">2025-12-06</p>
              <p className="mt-3 max-w-[50ch] text-[clamp(0.85rem,1.1vw,1rem)] leading-relaxed text-white/40">
                系统梳理 Java 核心知识体系，涵盖基础语法、面向对象、集合框架、多线程、JVM 等关键知识点。
              </p>
              <a
                href="https://houkaijian.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white/50 transition-colors hover:border-white/20 hover:text-white self-start"
              >
                查看详情 →
              </a>
            </div>
          </div>
        </FlowSection>

        {/* ═══════════════════════════════
            Section 6 — 联系 + Footer
            ═══════════════════════════════ */}
        <FlowSection
          aria-label="Connect"
          style={{
            background: 'linear-gradient(to bottom, #0f172a 0%, #0f172a 70%, #fd5200 100%)',
            color: '#fff',
          }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">
            06 — Connect
          </p>
          <hr className="my-[2vw] border-none border-t border-white/10" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Connect
            </h2>
            <p className="mt-[1.5vw] max-w-[50ch] text-[clamp(0.9rem,1.3vw,1.1rem)] leading-relaxed opacity-60">
              本人为985大学软工大三学生，正在求职，欢迎各位伯乐！如果你对技术有相似的兴趣，欢迎随时交流。
            </p>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/10" />
          <div className="flex flex-wrap gap-[clamp(0.8rem,1.5vw,1.5rem)]">
            <a
              href="mailto:1394891389@qq.com"
              className={`flex items-center gap-3 px-[clamp(1rem,1.5vw,1.5rem)] py-[clamp(0.8rem,1.2vw,1.2rem)] ${cardClass}`}
            >
              <span className="text-2xl">📧</span>
              <div>
                <p className="text-sm font-bold text-white">Email</p>
                <p className="text-xs text-white/40">1394891389@qq.com</p>
              </div>
            </a>
            <a
              href="https://github.com/xhaxx"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-[clamp(1rem,1.5vw,1.5rem)] py-[clamp(0.8rem,1.2vw,1.2rem)] ${cardClass}`}
            >
              <span className="text-2xl">🔗</span>
              <div>
                <p className="text-sm font-bold text-white">GitHub</p>
                <p className="text-xs text-white/40">xhaxx</p>
              </div>
            </a>
            <a
              href="#"
              className={`flex items-center gap-3 px-[clamp(1rem,1.5vw,1.5rem)] py-[clamp(0.8rem,1.2vw,1.2rem)] ${cardClass}`}
              onClick={(e) => e.preventDefault()}
            >
              <span className="text-2xl">💬</span>
              <div>
                <p className="text-sm font-bold text-white">WeChat</p>
                <p className="text-xs text-white/40">houkaijian200588</p>
              </div>
            </a>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/10" />
          <p className="text-center text-[clamp(0.75rem,1vw,0.85rem)] text-white/30">
            © 2026 侯凯健 · 永远相信美好的事情即将发生
          </p>
        </FlowSection>
      </FlowArt>
    </div>
  );
}
