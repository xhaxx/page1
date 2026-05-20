import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#09090b] text-white">
      <div className="text-center">
        {/* 返回 */}
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 transition-colors hover:border-white/20 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          返回主页
        </Link>

        <div className="mx-auto mt-12 flex flex-col items-center gap-6">
          <div className="rounded-full bg-[#fd5200]/10 p-6 text-[#fd5200]">
            <Sparkles className="h-12 w-12" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">功能即将上线</h1>
          <p className="max-w-md text-lg text-white/40">
            一对一深度对话功能正在开发中，届时你可以在这里直接与凯健交流技术、项目合作或任何你感兴趣的话题。
          </p>
          <p className="text-sm text-white/20">Coming Soon · 敬请期待</p>
        </div>
      </div>
    </div>
  );
}
