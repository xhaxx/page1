import { Player } from "@remotion/player";
import { GridPixelateWipe } from "@/components/ui/grid-pixelate-wipe";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function ScenePanel({
  label,
  subtitle,
  background,
}: {
  label: string;
  subtitle: string;
  background: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily:
          "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div style={{ display: "grid", gap: 18, textAlign: "center" }}>
        <span style={{ fontSize: 18, letterSpacing: "0.4em", opacity: 0.72 }}>
          {subtitle}
        </span>
        <span
          style={{ fontSize: 96, fontWeight: 700, letterSpacing: "-0.06em" }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function FrontendDesignScene() {
  return (
    <GridPixelateWipe
      cols={12}
      rows={7}
      pattern="wave"
      transitionStart={8}
      transitionDuration={34}
      cellFadeFrames={5}
      from={
        <ScenePanel
          label="前端设计"
          subtitle="FRONTEND"
          background="linear-gradient(135deg, #0f172a 0%, #1e293b 48%, #334155 100%)"
        />
      }
      to={
        <ScenePanel
          label="DESIGN"
          subtitle="UI / UX"
          background="linear-gradient(135deg, #fd5200 0%, #f97316 54%, #fb923c 100%)"
        />
      }
    />
  );
}

export default function FrontendDesign() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* 返回按钮 */}
      <Link
        to="/"
        className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 transition-colors hover:border-white/20 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        返回主页
      </Link>

      {/* Remotion Player */}
      <Player
        component={FrontendDesignScene}
        durationInFrames={90}
        fps={30}
        compositionWidth={1280}
        compositionHeight={720}
        controls={false}
        autoPlay
        loop
        clickToPlay={false}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
