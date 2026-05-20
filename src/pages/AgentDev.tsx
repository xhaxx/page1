import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Bot, Cpu, Terminal } from "lucide-react";

export default function AgentDev() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* 返回 */}
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 transition-colors hover:border-white/20 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          返回主页
        </Link>

        <h1 className="mb-2 text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight">
          Agent 开发
        </h1>
        <p className="mb-10 text-white/40">Spring AI 智能体学习与实践</p>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-lg bg-[#fd5200]/10 p-2 text-[#fd5200]">
              <Bot className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-2xl font-bold">AI Agent Station Study</h2>
              <p className="text-sm text-white/30">智能体学习平台</p>
            </div>
          </div>

          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/50">
            本项目是一个基于 DDD 架构的 AI 智能体学习平台，提供 Auto Agent
            自动智能对话功能，支持流式响应和实时交互体验。项目采用 DDD
            领域驱动设计架构模式，后端基于 Java 与 Spring Boot 框架开发，前端使用
            HTML5、JavaScript 搭配 Tailwind CSS 构建页面，通过 SSE 服务端推送实现流式数据响应，整体项目支持
            Docker 容器化部署。
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {[
              "Java",
              "Spring Boot",
              "Spring AI",
              "DDD",
              "SSE",
              "Docker",
              "Tailwind CSS",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href="https://gitcode.com/2301_79962008/ai-agent-station-study"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#fd5200]/30 bg-[#fd5200]/10 px-6 py-3 text-sm font-medium text-[#fd5200] transition-all hover:bg-[#fd5200]/20"
          >
            <Cpu className="h-4 w-4" />
            查看项目源码
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* xxCode */}
        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
              <Terminal className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-2xl font-bold">xxCode</h2>
              <p className="text-sm text-white/30">终端 AI 编码助手</p>
            </div>
          </div>

          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/50">
            类 Claude Code 的终端 AI 编码助手 —— 多模型可切换、架构清晰、易于扩展。
            支持 Agent 自主循环（Plan → Think → Act → Observe → Reflect）、
            子代理委托、上下文自动压缩、四级 Bash 安全分级，
            内置 DeepSeek / Claude 双模型适配，流式输出实时展示。
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {[
              "TypeScript",
              "Node.js",
              "Agent Loop",
              "Sub-agent",
              "DeepSeek API",
              "Claude API",
              "Context Compaction",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/xhaxx/xxCode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 text-sm font-medium text-emerald-400 transition-all hover:bg-emerald-400/20"
          >
            <Cpu className="h-4 w-4" />
            查看项目源码
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
