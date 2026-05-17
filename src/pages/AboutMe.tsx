import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#09090b]"
      aria-label="关于我"
    >
      {/* 荧光笔静态样式 */}
      <style>{`
        .marker-bar {
          position: absolute;
          inset: 0 -0.1em;
          background: #fd5200;
          transform: scaleX(1);
          z-index: 0;
        }
        .marker-word {
          position: relative;
          z-index: 1;
        }
      `}</style>

      {/* 左上角返回主页 */}
      <Link
        to="/"
        className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 transition-colors hover:border-white/20 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        返回主页
      </Link>

      {/* 中央文字，"按钮" 本身即跳转 */}
      <p
        className="text-center text-[clamp(1.5rem,4vw,4rem)] font-semibold tracking-tight text-[#fafafa]"
        style={{ fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        点击这个
        <a
          href="/hyperframes/index.html"
          className="relative mx-[0.15em] inline-block cursor-pointer no-underline"
          aria-label="了解现实世界的我"
        >
          <span className="marker-bar" aria-hidden="true" />
          <span className="marker-word">
            按钮
          </span>
        </a>
        你将了解现实世界的我
      </p>
    </div>
  );
}
