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
          FlowArt — 全部 7 个 Section，无缝沉浸式滚动
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
              Full-stack
              <br />
              Developer
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

        {/* Section 4 — 项目作品 */}
        <FlowSection
          aria-label="Projects"
          style={{ backgroundColor: '#0f172a', color: '#fff' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            04 — Projects
          </p>
          <hr className="my-[2vw] border-none border-t border-white/15" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Projects
            </h2>
            <p className="mt-[1.5vw] max-w-[50ch] text-[clamp(0.9rem,1.3vw,1.1rem)] leading-relaxed opacity-70">
              每一个项目都是一次探索，每一行代码都承载着思考。
            </p>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/15" />
          <div className="grid gap-[clamp(0.8rem,1.5vw,1.5rem)] sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-[clamp(1rem,1.5vw,1.5rem)] backdrop-blur transition-colors hover:border-orange-500/30 hover:bg-white/[0.06]"
              >
                <h3 className="mb-2 text-[clamp(0.95rem,1.2vw,1.1rem)] font-bold leading-tight text-white group-hover:text-orange-400 transition-colors">
                  {p.title}
                </h3>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
                <p className="mb-3 flex-1 text-[clamp(0.8rem,1vw,0.9rem)] leading-relaxed text-slate-400">
                  {p.desc}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-500">
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
        </FlowSection>

        {/* Section 5 — 技术笔记 */}
        <FlowSection
          aria-label="Notes"
          style={{ backgroundColor: '#09090b', color: '#fff' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            05 — Notes
          </p>
          <hr className="my-[2vw] border-none border-t border-white/15" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Notes
            </h2>
            <p className="mt-[1.5vw] max-w-[50ch] text-[clamp(0.9rem,1.3vw,1.1rem)] leading-relaxed opacity-70">
              记录后端开发中的技术积累与实践经验。
            </p>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/15" />
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-[clamp(1.2rem,2vw,2rem)] backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(253,82,0,0.5)]" />
              <div>
                <h3 className="text-[clamp(1.1rem,1.5vw,1.3rem)] font-bold text-white">
                  后端 Java Spring Boot
                </h3>
                <p className="mt-1 text-sm text-slate-400">个人笔记 · 2026-02-07</p>
                <p className="mt-3 max-w-[60ch] text-[clamp(0.85rem,1.1vw,1rem)] leading-relaxed text-slate-400">
                  全面记录 Spring Boot 框架核心原理、Spring AI Agent 开发实践、数据库设计方法论以及分布式系统架构经验。持续更新中。
                </p>
                <a
                  href="https://houkaijian.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-sm font-medium text-orange-400 transition-colors hover:border-orange-500/40 hover:bg-orange-500/10"
                >
                  阅读笔记 →
                </a>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* Section 6 — 思维导图 */}
        <FlowSection
          aria-label="Mind Map"
          style={{ backgroundColor: '#0f172a', color: '#fff' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            06 — Mind Map
          </p>
          <hr className="my-[2vw] border-none border-t border-white/15" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Mind
              <br />
              Map
            </h2>
            <p className="mt-[1.5vw] max-w-[50ch] text-[clamp(0.9rem,1.3vw,1.1rem)] leading-relaxed opacity-70">
              Java 核心知识体系的思维导图整理。
            </p>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/15" />
          <div className="flex flex-col items-start gap-[clamp(1rem,2vw,2rem)] rounded-xl border border-white/10 bg-white/[0.03] p-[clamp(1rem,2vw,2rem)] backdrop-blur md:flex-row md:items-center">
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
              <p className="mt-1 text-sm text-slate-400">2025-12-06</p>
              <p className="mt-3 max-w-[50ch] text-[clamp(0.85rem,1.1vw,1rem)] leading-relaxed text-slate-400">
                系统梳理 Java 核心知识体系，涵盖基础语法、面向对象、集合框架、多线程、JVM 等关键知识点。
              </p>
              <a
                href="https://houkaijian.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-orange-500/30 hover:text-orange-400 self-start"
              >
                查看详情 →
              </a>
            </div>
          </div>
        </FlowSection>

        {/* Section 7 — 联系 + Footer */}
        <FlowSection
          aria-label="Connect"
          style={{
            background: 'linear-gradient(to bottom, #0f172a 0%, #0f172a 70%, #fd5200 100%)',
            color: '#fff',
          }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            07 — Connect
          </p>
          <hr className="my-[2vw] border-none border-t border-white/15" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Connect
            </h2>
            <p className="mt-[1.5vw] max-w-[50ch] text-[clamp(0.9rem,1.3vw,1.1rem)] leading-relaxed opacity-70">
              本人为985大学软工大三学生，正在求职，欢迎各位伯乐！如果你对技术有相似的兴趣，欢迎随时交流。
            </p>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/15" />
          <div className="flex flex-wrap gap-[clamp(0.8rem,1.5vw,1.5rem)]">
            <a
              href="mailto:1394891389@qq.com"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-[clamp(1rem,1.5vw,1.5rem)] py-[clamp(0.8rem,1.2vw,1.2rem)] backdrop-blur transition-colors hover:border-orange-500/30 hover:bg-white/[0.06]"
            >
              <span className="text-2xl">📧</span>
              <div>
                <p className="text-sm font-bold text-white">Email</p>
                <p className="text-xs text-slate-400">1394891389@qq.com</p>
              </div>
            </a>
            <a
              href="https://github.com/xhaxx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-[clamp(1rem,1.5vw,1.5rem)] py-[clamp(0.8rem,1.2vw,1.2rem)] backdrop-blur transition-colors hover:border-orange-500/30 hover:bg-white/[0.06]"
            >
              <span className="text-2xl">🔗</span>
              <div>
                <p className="text-sm font-bold text-white">GitHub</p>
                <p className="text-xs text-slate-400">xhaxx</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-[clamp(1rem,1.5vw,1.5rem)] py-[clamp(0.8rem,1.2vw,1.2rem)] backdrop-blur transition-colors hover:border-orange-500/30 hover:bg-white/[0.06]"
              onClick={(e) => e.preventDefault()}
            >
              <span className="text-2xl">💬</span>
              <div>
                <p className="text-sm font-bold text-white">WeChat</p>
                <p className="text-xs text-slate-400">houkaijian200588</p>
              </div>
            </a>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/10" />
          <p className="text-center text-[clamp(0.75rem,1vw,0.85rem)] text-white/40">
            © 2026 侯凯健 · 永远相信美好的事情即将发生
          </p>
        </FlowSection>
    </FlowArt>
    </div>
  );
}
