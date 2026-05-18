import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, LogOut } from "lucide-react";
import { hasToken, clearToken } from "@/api/messages";
import type { LoginResponse } from "@/api/messages";
import LoginCard from "@/components/message/LoginCard";
import MessageForm from "@/components/message/MessageForm";
import MessageList from "@/components/message/MessageList";

export default function MessageBoard() {
  const [user, setUser] = useState<LoginResponse | null>(() => {
    if (hasToken()) {
      const saved = localStorage.getItem("mb_user");
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });
  const [activeTab, setActiveTab] = useState<"public" | "mine">("public");
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleLogin = useCallback((data: LoginResponse) => {
    localStorage.setItem("mb_user", JSON.stringify(data));
    setUser(data);
    setRefreshTrigger((n) => n + 1);
  }, []);

  const handleLogout = useCallback(() => {
    clearToken();
    localStorage.removeItem("mb_user");
    setUser(null);
  }, []);

  const handleMessageSent = useCallback(() => {
    setRefreshTrigger((n) => n + 1);
  }, []);

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

        {!user ? (
          /* 未登录 — 显示登录卡片 */
          <LoginCard onLogin={handleLogin} />
        ) : (
          /* 已登录 */
          <div className="space-y-6">
            {/* 用户信息栏 */}
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur px-4 py-3">
              <div>
                <span className="text-sm font-bold text-white">
                  {user.nickname || user.email}
                </span>
                <span className="ml-2 text-xs text-white/30">{user.email}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-xs text-white/30 transition-colors hover:text-white/50"
              >
                <LogOut className="h-3.5 w-3.5" />
                退出
              </button>
            </div>

            {/* 留言表单 */}
            <MessageForm onSuccess={handleMessageSent} />

            {/* Tab 切换 */}
            <div className="flex gap-1 rounded-lg border border-white/10 bg-white/[0.02] p-1">
              <button
                onClick={() => setActiveTab("public")}
                className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "public"
                    ? "bg-white/10 text-white"
                    : "text-white/30 hover:text-white/50"
                }`}
              >
                全部留言
              </button>
              <button
                onClick={() => setActiveTab("mine")}
                className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "mine"
                    ? "bg-white/10 text-white"
                    : "text-white/30 hover:text-white/50"
                }`}
              >
                我的留言
              </button>
            </div>

            {/* 留言列表 */}
            <MessageList
              key={activeTab + refreshTrigger}
              mode={activeTab}
              refreshTrigger={refreshTrigger}
            />
          </div>
        )}
      </div>
    </div>
  );
}
