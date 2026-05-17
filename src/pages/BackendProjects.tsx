import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Server, Database, MessageCircle } from "lucide-react";

const cardClass =
  "rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 transition-all hover:border-white/20 hover:bg-white/[0.06]";

const projects = [
  {
    icon: <Server className="h-5 w-5" />,
    name: "short-url",
    label: "短链接服务",
    desc: "基于 Spring Boot 3.4.3 + JDK 17 的短链接服务，支持长链转短链、302 重定向、访问统计（PV/UV/地域）、过期自动清理。配套前端页面提供简约美观的 Web 交互界面。",
    tags: ["Spring Boot", "JDK 17", "Redis"],
    url: "https://github.com/xhaxx/short-url",
  },
  {
    icon: <Database className="h-5 w-5" />,
    name: "拼团支付商城",
    label: "Group Buy + Pay Mall",
    desc: "拼团交易平台与支付商城系统，全栈微服务分布式项目，为交易类平台提供拼团组合下单服务与支付能力。",
    tags: ["Java", "Spring Boot", "MySQL", "Redis", "DDD"],
    urls: [
      { label: "拼团平台", href: "https://gitcode.com/2301_79962008/group_buy_market" },
      { label: "支付商城", href: "https://gitcode.com/2301_79962008/s-pay-mall-ddd" },
      { label: "在线体验", href: "http://8.140.29.226" },
    ],
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    name: "Weifu 微服务",
    label: "生产级微服务架构",
    desc: "一套轻量小规模、生产级健康可用的微服务架构，包含数据库、本地/分布式缓存、消息队列三大核心组件。完整落地分布式数据一致性解决方案，含网关、订单、库存三大微服务。",
    tags: ["微服务", "Redis", "RabbitMQ", "分布式一致性"],
    url: "https://github.com/xhaxx/weifu-microservice",
  },
];

export default function BackendProjects() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* 返回 */}
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 transition-colors hover:border-white/20 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          返回主页
        </Link>

        <h1 className="mb-2 text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight">
          后端项目
        </h1>
        <p className="mb-10 text-white/40">基于 Java / Spring Boot 技术栈的生产级项目实践</p>

        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <div key={p.name} className={cardClass}>
              <div className="mb-3 flex items-center gap-2">
                <span className="text-[#fd5200]">{p.icon}</span>
                <h2 className="text-xl font-bold">{p.name}</h2>
                <span className="text-sm text-white/30">— {p.label}</span>
              </div>
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-white/50">
                {p.desc}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {"urls" in p && p.urls ? (
                <div className="flex flex-wrap gap-3">
                  {p.urls.map((u) => (
                    <a
                      key={u.href}
                      href={u.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/60 transition-colors hover:border-[#fd5200]/30 hover:text-white"
                    >
                      {u.label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/60 transition-colors hover:border-[#fd5200]/30 hover:text-white"
                >
                  查看项目
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
