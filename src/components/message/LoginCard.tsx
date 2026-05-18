import { useState } from "react";
import { login, saveToken } from "@/api/messages";
import type { LoginResponse } from "@/api/messages";
import { Mail, LogIn, Loader2 } from "lucide-react";

interface Props {
  onLogin: (data: LoginResponse) => void;
}

export default function LoginCard({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("请输入邮箱地址");
      return;
    }

    setLoading(true);
    try {
      const data = await login(email.trim());
      saveToken(data.token);
      onLogin(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "登录失败");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-full bg-[#fd5200]/10 p-2 text-[#fd5200]">
          <Mail className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">登录留言板</h3>
          <p className="text-xs text-white/40">输入邮箱即可登录</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-[#fd5200]/40 focus:bg-white/[0.07]"
          disabled={loading}
        />
        {error && (
          <p className="text-xs text-red-400">{error}</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#fd5200] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#fd5200]/90 disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <LogIn className="h-4 w-4" />
          )}
          {loading ? "登录中..." : "登录"}
        </button>
      </form>
    </div>
  );
}
