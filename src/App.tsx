import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

// ──────────────────────────────────────────
// 项目数据
// ──────────────────────────────────────────
const projects = [
  {
    title: 'ChatGPT AI 问答助手',
    tags: ['Java', 'AI', 'ChatGPT', 'DDD', 'Docker'],
    desc: '涵盖爬虫接口、ChatGPT API 对接、DDD 架构设计、镜像打包、Docker 容器部署',
    link: 'https://gitcode.com/2301_79962008/chatbot-api',
  },
  {
    title: 'MVC 支付商城',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Redis'],
    desc: '基于 MVC 架构的小型支付商城系统',
    link: 'https://gitcode.com/2301_79962008/s-pay-mall-mvc',
  },
  {
    title: '拼团交易平台',
    tags: ['Java', 'DDD', 'Spring Boot', 'MySQL', 'Redis'],
    desc: '前后端 + DevOps 全栈微服务分布式项目，为交易类平台提供拼团组合下单服务',
    link: 'https://gitcode.com/2301_79962008/group_buy_market',
    extra: 'http://8.140.29.226/',
  },
];

// ──────────────────────────────────────────
// 标签色映射
// ──────────────────────────────────────────
const tagColors: Record<string, string> = {
  Java: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  AI: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  ChatGPT: 'bg-green-500/10 text-green-400 border-green-500/20',
  DDD: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  Docker: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Spring Boot': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  MySQL: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  Redis: 'bg-red-500/10 text-red-400 border-red-500/20',
};

function Tag({ label }: { label: string }) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${tagColors[label] ?? 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}
    >
      {label}
    </span>
  );
}

// ──────────────────────────────────────────
// App
// ──────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-slate-950 text-slate-200">
      {/* ═══════════════════════════════════════
          FlowArt 开场区（品牌印象）
          ═══════════════════════════════════════ */}
      <FlowArt aria-label="侯凯健个人主页">
        {/* Section 1 — 我是谁 */}
        <FlowSection
          aria-label="Who I am"
          style={{ backgroundColor: '#fd5200', color: '#fff' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Hello</p>
          <hr className="my-[2vw] border-none border-t border-white/30" />
          <div>
            <h1 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
              侯凯健
            </h1>
            <p className="mt-[2vw] text-[clamp(1.2rem,2.5vw,2.5rem)] font-light tracking-wide opacity-90">
              永远相信美好的事情即将发生！
            </p>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/30" />
          <p className="mt-auto max-w-[50ch] text-[clamp(0.9rem,1.5vw,1.3rem)] font-normal leading-relaxed opacity-85">
            后端开发工程师，专注 Spring AI Agent 开发与数据库设计。热爱用代码构建优雅的解决方案。
          </p>
        </FlowSection>

        {/* Section 2 — 技术方向 */}
        <FlowSection
          aria-label="Tech stack"
          style={{ backgroundColor: '#000', color: '#fff' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — Stack</p>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Backend
              <br />
              Engineer
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <p className="max-w-[50ch] text-[clamp(1rem,1.8vw,1.5rem)] font-normal leading-relaxed opacity-85">
            Java · Spring Boot · Spring AI · MySQL · Redis · Docker · DDD
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
                <p className="text-[clamp(0.8rem,1.1vw,0.95rem)] leading-relaxed opacity-60">
                  {skill.sub}
                </p>
              </div>
            ))}
          </div>
        </FlowSection>

        {/* Section 3 — 愿景 + 过渡 */}
        <FlowSection
          aria-label="Vision"
          style={{
            background: 'linear-gradient(to bottom, #1A3DE8 0%, #1A3DE8 60%, #0f172a 100%)',
            color: '#fff',
          }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — Vision</p>
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
          <p className="max-w-[50ch] text-[clamp(1rem,1.8vw,1.5rem)] font-normal leading-relaxed opacity-85">
            构建与分享，是我理解世界的方式。每一个项目都是一次探索，每一行代码都承载着思考。
          </p>
          <hr className="my-[2vw] border-none border-t border-white/40" />
          <p className="mt-auto text-[clamp(0.9rem,1.2vw,1.1rem)] font-light opacity-60">
            向下滚动了解更多 ↓
          </p>
        </FlowSection>
      </FlowArt>

      {/* ═══════════════════════════════════════
          传统内容区（信息密度）
          ═══════════════════════════════════════ */}
      <div className="mx-auto max-w-6xl px-[4vw] pb-[8vw]">

        {/* ── 项目 ── */}
        <section className="pt-[8vw]">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Projects
          </p>
          <h2 className="mb-[3vw] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white">
            项目
          </h2>
          <div className="grid gap-[2vw] md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-[clamp(1.2rem,2vw,2rem)] transition-colors hover:border-slate-700 hover:bg-slate-900/80"
              >
                <h3 className="mb-3 text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                  {p.title}
                </h3>
                <div className="mb-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {p.desc}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="group-hover:text-orange-400 transition-colors">
                    查看项目 →
                  </span>
                  {p.extra && (
                    <a
                      href={p.extra}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      在线访问 ↗
                    </a>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── 笔记 ── */}
        <section className="pt-[8vw]">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Notes
          </p>
          <h2 className="mb-[3vw] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white">
            笔记
          </h2>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-[clamp(1.2rem,2vw,2rem)]">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
              <div>
                <h3 className="text-lg font-bold text-white">后端 Java Spring Boot</h3>
                <p className="mt-1 text-sm text-slate-400">
                  个人笔记 · 2026-02-07
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  记录后端开发中的技术积累与实践经验。
                </p>
                <a
                  href="https://houkaijian.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-orange-400 hover:text-orange-300 transition-colors"
                >
                  阅读链接 →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 思维导图 ── */}
        <section className="pt-[8vw]">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Mind Map
          </p>
          <h2 className="mb-[3vw] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white">
            思维导图
          </h2>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-[clamp(1.2rem,2vw,2rem)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <img
                src="https://houkaijian.xyz/img/mindmaps/1%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E7%BC%A9%E7%95%A5%E5%9B%BE.jpg"
                alt="Java 基础知识导图"
                className="w-full rounded-lg md:w-64"
                loading="lazy"
              />
              <div>
                <h3 className="text-lg font-bold text-white">Java 基础知识导图</h3>
                <p className="mt-1 text-sm text-slate-400">2025-12-06</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Java 核心知识体系的思维导图整理。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 联系 ── */}
        <section className="pt-[8vw]">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Contact
          </p>
          <h2 className="mb-[3vw] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white">
            联系
          </h2>
          <div className="flex flex-wrap gap-[2vw]">
            <a
              href="mailto:1394891389@qq.com"
              className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-[clamp(1.2rem,2vw,2rem)] py-[clamp(1rem,1.5vw,1.5rem)] transition-colors hover:border-orange-500/30 hover:bg-slate-900/80"
            >
              <span className="text-2xl">📧</span>
              <div>
                <p className="text-sm font-bold text-white">Email</p>
                <p className="text-xs text-slate-400">1394891389@qq.com</p>
              </div>
            </a>
            <a
              href="https://gitcode.com/2301_79962008"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-[clamp(1.2rem,2vw,2rem)] py-[clamp(1rem,1.5vw,1.5rem)] transition-colors hover:border-orange-500/30 hover:bg-slate-900/80"
            >
              <span className="text-2xl">🔗</span>
              <div>
                <p className="text-sm font-bold text-white">GitCode</p>
                <p className="text-xs text-slate-400">2301_79962008</p>
              </div>
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="mt-[8vw] border-t border-slate-800 pt-[2vw] text-center text-xs text-slate-600">
          © 2026 侯凯健 · 永远相信美好的事情即将发生
        </footer>
      </div>
    </div>
  );
}
