import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, MessageSquare, Send, CornerDownRight, X } from "lucide-react";
import {
  getPosts,
  getPost,
  createPost,
  createComment,
  type Post,
  type Comment,
} from "@/api/forum";

const cardClass =
  "rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur";

// ──────────────────────────────────────────
// 评论树递归渲染
// ──────────────────────────────────────────
function CommentTree({
  comment,
  postId,
  onRefresh,
  replyingTo,
  onStartReply,
  onCancelReply,
}: {
  comment: Comment;
  postId: number;
  onRefresh: () => void;
  replyingTo: number | null;
  onStartReply: (id: number) => void;
  onCancelReply: () => void;
}) {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);

  const handleReply = async () => {
    if (!content.trim() || !email.trim() || !nickname.trim()) return;
    setSending(true);
    try {
      await createComment(postId, {
        email: email.trim(),
        nickname: nickname.trim(),
        content: content.trim(),
        parentId: comment.id,
      });
      setContent("");
      onCancelReply();
      onRefresh();
    } catch {
      // handled by parent
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="ml-4 border-l border-white/10 pl-4">
      <div className="py-3">
        <div className="flex items-center gap-2 text-xs text-white/40">
          <span className="font-medium text-white/60">{comment.nickname}</span>
          <span>{formatDate(comment.createdAt)}</span>
        </div>
        <p className="mt-1 text-sm text-white/70 whitespace-pre-wrap">
          {comment.content}
        </p>
        <button
          onClick={() => onStartReply(comment.id)}
          className="mt-2 inline-flex items-center gap-1 text-xs text-white/30 hover:text-white/60 transition-colors"
        >
          <CornerDownRight className="h-3 w-3" />
          回复
        </button>

        {/* 内联回复表单 */}
        {replyingTo === comment.id && (
          <div className="mt-3 space-y-2">
            <div className="flex gap-2">
              <input
                className="flex-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#fd5200]/40"
                placeholder="邮箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="flex-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#fd5200]/40"
                placeholder="昵称"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <textarea
              className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#fd5200]/40 resize-none"
              rows={2}
              placeholder="回复内容..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex gap-2">
              <button
                onClick={handleReply}
                disabled={sending || !content.trim()}
                className="inline-flex items-center gap-1 rounded-lg bg-[#fd5200]/20 px-3 py-1 text-xs text-[#fd5200] hover:bg-[#fd5200]/30 disabled:opacity-30 transition-colors"
              >
                <Send className="h-3 w-3" />
                {sending ? "发送中..." : "发送"}
              </button>
              <button
                onClick={onCancelReply}
                className="rounded-lg px-3 py-1 text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                取消
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 子回复递归 */}
      {comment.replies?.map((reply) => (
        <CommentTree
          key={reply.id}
          comment={reply}
          postId={postId}
          onRefresh={onRefresh}
          replyingTo={replyingTo}
          onStartReply={onStartReply}
          onCancelReply={onCancelReply}
        />
      ))}
    </div>
  );
}

// ──────────────────────────────────────────
// 工具函数
// ──────────────────────────────────────────
function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr + "Z");
    return d.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return dateStr;
  }
}

function excerpt(text: string, maxLen = 120) {
  return text.length > maxLen ? text.slice(0, maxLen) + "..." : text;
}

// ──────────────────────────────────────────
// 主组件
// ──────────────────────────────────────────
export default function Forum() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 发帖弹窗
  const [showCreate, setShowCreate] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newNickname, setNewNickname] = useState("");
  const [creating, setCreating] = useState(false);

  // 帖子详情
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingDetail, setLoadingDetail] = useState(false);

  // 评论
  const [commentEmail, setCommentEmail] = useState("");
  const [commentNickname, setCommentNickname] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [sendingComment, setSendingComment] = useState(false);

  // 回复状态
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getPosts();
      setPosts(res.data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "加载失败");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const fetchDetail = async (post: Post) => {
    setSelectedPost(post);
    setLoadingDetail(true);
    try {
      const res = await getPost(post.id);
      setComments(res.comments);
    } catch {
      setComments([]);
    } finally {
      setLoadingDetail(false);
    }
  };

  const handleCreate = async () => {
    if (!newTitle.trim() || !newContent.trim() || !newEmail.trim() || !newNickname.trim()) return;
    setCreating(true);
    try {
      await createPost({
        title: newTitle.trim(),
        content: newContent.trim(),
        email: newEmail.trim(),
        nickname: newNickname.trim(),
      });
      setShowCreate(false);
      setNewTitle("");
      setNewContent("");
      setNewEmail("");
      setNewNickname("");
      fetchPosts();
    } catch (e) {
      alert(e instanceof Error ? e.message : "发帖失败");
    } finally {
      setCreating(false);
    }
  };

  const handleComment = async () => {
    if (!commentContent.trim() || !commentEmail.trim() || !commentNickname.trim() || !selectedPost) return;
    setSendingComment(true);
    try {
      await createComment(selectedPost.id, {
        email: commentEmail.trim(),
        nickname: commentNickname.trim(),
        content: commentContent.trim(),
      });
      setCommentContent("");
      // refresh detail
      const res = await getPost(selectedPost.id);
      setComments(res.comments);
      fetchPosts(); // refresh comment count
    } catch (e) {
      alert(e instanceof Error ? e.message : "评论失败");
    } finally {
      setSendingComment(false);
    }
  };

  // ── 帖子详情视图 ──
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-[#09090b] text-white">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 hover:border-white/20 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            返回帖子列表
          </button>

          <article className={`p-6 ${cardClass}`}>
            <h1 className="text-2xl font-bold">{selectedPost.title}</h1>
            <div className="mt-2 flex items-center gap-3 text-xs text-white/40">
              <span>{selectedPost.authorNickname}</span>
              <span>{formatDate(selectedPost.createdAt)}</span>
            </div>
            <p className="mt-4 text-white/70 whitespace-pre-wrap leading-relaxed">
              {selectedPost.content}
            </p>
          </article>

          {/* 评论列表 */}
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-4">
              评论 {loadingDetail ? "..." : `(${comments.length})`}
            </h2>

            {comments.length === 0 && !loadingDetail && (
              <p className="text-white/30 text-sm">暂无评论，来说点什么吧</p>
            )}

            {comments.map((c) => (
              <CommentTree
                key={c.id}
                comment={c}
                postId={selectedPost.id}
                onRefresh={() => {
                  getPost(selectedPost.id).then((res) => setComments(res.comments));
                  fetchPosts();
                }}
                replyingTo={replyingTo}
                onStartReply={setReplyingTo}
                onCancelReply={() => setReplyingTo(null)}
              />
            ))}
          </div>

          {/* 发评论表单 */}
          <div className={`mt-6 p-4 ${cardClass}`}>
            <h3 className="text-sm font-medium text-white/60 mb-3">发表评论</h3>
            <div className="flex gap-3 mb-3">
              <input
                className="flex-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#fd5200]/40"
                placeholder="邮箱"
                value={commentEmail}
                onChange={(e) => setCommentEmail(e.target.value)}
              />
              <input
                className="flex-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#fd5200]/40"
                placeholder="昵称"
                value={commentNickname}
                onChange={(e) => setCommentNickname(e.target.value)}
              />
            </div>
            <textarea
              className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#fd5200]/40 resize-none"
              rows={3}
              placeholder="写下你的想法..."
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
            />
            <div className="mt-3 flex justify-end">
              <button
                onClick={handleComment}
                disabled={sendingComment || !commentContent.trim() || !commentEmail.trim() || !commentNickname.trim()}
                className="inline-flex items-center gap-2 rounded-lg bg-[#fd5200]/20 px-5 py-2 text-sm font-medium text-[#fd5200] hover:bg-[#fd5200]/30 disabled:opacity-30 transition-colors"
              >
                <Send className="h-4 w-4" />
                {sendingComment ? "发送中..." : "发表评论"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── 帖子列表视图 ──
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 hover:border-white/20 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          返回主页
        </Link>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-tight">
              论坛
            </h1>
            <p className="text-white/40 text-sm mt-1">交流想法，分享见解</p>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-[#fd5200]/40 bg-[#fd5200]/10 px-4 py-2 text-sm font-medium text-[#fd5200] hover:bg-[#fd5200]/20 transition-colors"
          >
            <Plus className="h-4 w-4" />
            发帖
          </button>
        </div>

        {/* 发帖弹窗 */}
        {showCreate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className={`w-full max-w-lg p-6 ${cardClass} bg-[#09090b]`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">发布新帖</h2>
                <button
                  onClick={() => setShowCreate(false)}
                  className="text-white/30 hover:text-white/60 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-3">
                <input
                  className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#fd5200]/40"
                  placeholder="帖子标题"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  maxLength={200}
                />
                <textarea
                  className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#fd5200]/40 resize-none"
                  rows={6}
                  placeholder="帖子内容..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  maxLength={5000}
                />
                <div className="flex gap-3">
                  <input
                    className="flex-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#fd5200]/40"
                    placeholder="你的邮箱"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                  <input
                    className="flex-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#fd5200]/40"
                    placeholder="你的昵称"
                    value={newNickname}
                    onChange={(e) => setNewNickname(e.target.value)}
                    maxLength={50}
                  />
                </div>
              </div>

              <div className="mt-5 flex justify-end gap-3">
                <button
                  onClick={() => setShowCreate(false)}
                  className="rounded-lg px-4 py-2 text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={handleCreate}
                  disabled={creating || !newTitle.trim() || !newContent.trim() || !newEmail.trim() || !newNickname.trim()}
                  className="rounded-lg bg-[#fd5200]/20 px-5 py-2 text-sm font-medium text-[#fd5200] hover:bg-[#fd5200]/30 disabled:opacity-30 transition-colors"
                >
                  {creating ? "发布中..." : "发布"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 帖子列表 */}
        {loading ? (
          <p className="text-white/30 text-center py-16">加载中...</p>
        ) : error ? (
          <p className="text-red-400 text-center py-16">{error}</p>
        ) : posts.length === 0 ? (
          <div className={`flex flex-col items-center gap-4 py-16 ${cardClass}`}>
            <div className="rounded-full bg-[#fd5200]/10 p-5 text-[#fd5200]">
              <MessageSquare className="h-10 w-10" />
            </div>
            <p className="text-white/40">还没有帖子，来发第一个吧</p>
            <button
              onClick={() => setShowCreate(true)}
              className="inline-flex items-center gap-2 rounded-lg border border-[#fd5200]/40 bg-[#fd5200]/10 px-4 py-2 text-sm font-medium text-[#fd5200] hover:bg-[#fd5200]/20 transition-colors"
            >
              <Plus className="h-4 w-4" />
              发帖
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <button
                key={post.id}
                onClick={() => fetchDetail(post)}
                className={`w-full p-5 text-left ${cardClass} transition-colors hover:border-white/20 hover:bg-white/[0.06]`}
              >
                <h3 className="text-lg font-bold text-white group-hover:text-[#fd5200] transition-colors">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-white/40 leading-relaxed">
                  {excerpt(post.content)}
                </p>
                <div className="mt-3 flex items-center gap-4 text-xs text-white/30">
                  <span>{post.authorNickname}</span>
                  <span>{formatDate(post.createdAt)}</span>
                  <span className="inline-flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    {post.commentCount}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
