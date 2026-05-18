import { useState } from "react";
import { postMessage } from "@/api/messages";
import { Send, EyeOff, Loader2, Smile } from "lucide-react";

const EMOJIS = ["😊", "👍", "❤️", "🎉", "💡", "🔥", "🤔", "👏", "✨", "🙏"];

interface Props {
  onSuccess: () => void;
}

export default function MessageForm({ onSuccess }: Props) {
  const [content, setContent] = useState("");
  const [emoji, setEmoji] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!content.trim()) {
      setError("请输入留言内容");
      return;
    }
    if (content.length > 500) {
      setError("留言内容不能超过500字");
      return;
    }

    setLoading(true);
    try {
      await postMessage(content.trim(), emoji, isPrivate);
      setContent("");
      setEmoji("");
      setIsPrivate(false);
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "提交失败");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-6">
      <h3 className="mb-4 text-sm font-bold text-white">写下你的留言</h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="想说点什么..."
          rows={3}
          maxLength={500}
          className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-[#fd5200]/40 focus:bg-white/[0.07]"
          disabled={loading}
        />
        <div className="flex items-center justify-between text-xs text-white/30">
          <span>{content.length}/500</span>
        </div>

        {error && <p className="text-xs text-red-400">{error}</p>}

        <div className="flex items-center gap-3">
          {/* Emoji picker toggle */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowEmojis(!showEmojis)}
              className="flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-sm text-white/50 transition-colors hover:border-white/20 hover:text-white"
            >
              <Smile className="h-4 w-4" />
              {emoji || "表情"}
            </button>
            {showEmojis && (
              <div className="absolute bottom-full left-0 mb-2 flex gap-1 rounded-lg border border-white/10 bg-slate-900 p-2 shadow-xl">
                {EMOJIS.map((e) => (
                  <button
                    key={e}
                    type="button"
                    onClick={() => {
                      setEmoji(e);
                      setShowEmojis(false);
                    }}
                    className="rounded p-1 text-lg transition-colors hover:bg-white/10"
                  >
                    {e}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Private toggle */}
          <button
            type="button"
            onClick={() => setIsPrivate(!isPrivate)}
            className={`flex items-center gap-1 rounded-lg border px-3 py-1.5 text-sm transition-colors ${
              isPrivate
                ? "border-[#fd5200]/30 bg-[#fd5200]/10 text-[#fd5200]"
                : "border-white/10 text-white/50 hover:border-white/20 hover:text-white"
            }`}
          >
            <EyeOff className="h-4 w-4" />
            仅博主可见
          </button>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="ml-auto flex items-center gap-2 rounded-lg bg-[#fd5200] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#fd5200]/90 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            {loading ? "提交中..." : "发送"}
          </button>
        </div>
      </form>
    </div>
  );
}
