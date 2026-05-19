import { Link } from "react-router-dom";
import { ArrowLeft, MessageSquare } from "lucide-react";

const cardClass =
  "rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-6";

export default function MessageBoard() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <div className="mx-auto max-w-2xl px-6 py-12">
        {/* 返回 */}
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 transition-colors hover:border-white/20 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          返回主页
        </Link>

        <h1 className="mb-2 text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight">
          留言板
        </h1>
        <p className="mb-10 text-white/40">给我留下一句话吧</p>

        {/* 占位框架 — 后续版本接入实际留言板 */}
        <div className={`flex flex-col items-center gap-6 py-16 ${cardClass}`}>
          <div className="rounded-full bg-[#fd5200]/10 p-5 text-[#fd5200]">
            <MessageSquare className="h-10 w-10" />
          </div>
          <p className="text-center text-lg text-white/50">
            留言板功能即将上线
          </p>
          <p className="text-center text-sm text-white/20">
            后续版本将接入真实留言服务<br />敬请期待
          </p>
        </div>
      </div>
    </div>
  );
}
