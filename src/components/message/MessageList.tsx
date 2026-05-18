import { useEffect, useState } from "react";
import { fetchMessages, fetchMyMessages, deleteMessage } from "@/api/messages";
import type { MessageItem } from "@/api/messages";
import { Trash2, Loader2, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  mode: "public" | "mine";
  refreshTrigger: number;
}

export default function MessageList({ mode, refreshTrigger }: Props) {
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<number | null>(null);

  useEffect(() => {
    loadMessages(0);
  }, [mode, refreshTrigger]);

  const loadMessages = async (p: number) => {
    setLoading(true);
    try {
      const fetcher = mode === "public" ? fetchMessages : fetchMyMessages;
      const data = await fetcher(p);
      setMessages(data.data);
      setPage(data.page);
      setHasMore(data.hasMore);
      setTotal(data.total);
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (deleting) return;
    setDeleting(id);
    try {
      await deleteMessage(id);
      setMessages((prev) => prev.filter((m) => m.id !== id));
    } catch {
      // silent
    } finally {
      setDeleting(null);
    }
  };

  const formatTime = (iso: string) => {
    try {
      const d = new Date(iso);
      return d.toLocaleString("zh-CN", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return iso;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-6 w-6 animate-spin text-white/20" />
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-white/30">
          {mode === "public" ? "还没有留言，来做第一个吧" : "你还没有留言"}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Page info */}
      <div className="flex items-center justify-between text-xs text-white/20">
        <span>共 {total} 条留言</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => loadMessages(Math.max(0, page - 1))}
            disabled={page === 0}
            className="rounded p-1 transition-colors hover:text-white disabled:opacity-20"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-white/40">第 {page + 1} 页</span>
          <button
            onClick={() => loadMessages(page + 1)}
            disabled={!hasMore}
            className="rounded p-1 transition-colors hover:text-white disabled:opacity-20"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Message list */}
      {messages.map((msg) => (
        <div
          key={msg.id}
          className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-4 transition-colors hover:border-white/20"
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white/80">
                {msg.nickname || "匿名"}
              </span>
              {msg.emoji && <span className="text-lg">{msg.emoji}</span>}
              {msg.isPrivate && (
                <span className="rounded border border-[#fd5200]/20 bg-[#fd5200]/5 px-1.5 py-0.5 text-[10px] text-[#fd5200]/60">
                  私密
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/20">
                {formatTime(msg.createdAt)}
              </span>
              {mode === "mine" && (
                <button
                  onClick={() => handleDelete(msg.id)}
                  disabled={deleting === msg.id}
                  className="text-white/20 transition-colors hover:text-red-400 disabled:opacity-30"
                >
                  {deleting === msg.id ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Trash2 className="h-3.5 w-3.5" />
                  )}
                </button>
              )}
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/60 whitespace-pre-wrap break-words">
            {msg.content}
          </p>
        </div>
      ))}
    </div>
  );
}
