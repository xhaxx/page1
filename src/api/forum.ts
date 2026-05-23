const API_BASE = "https://api.houkaijian.xyz/api";

export interface Post {
  id: number;
  title: string;
  content: string;
  authorEmail: string;
  authorNickname: string;
  createdAt: string;
  commentCount: number;
}

export interface Comment {
  id: number;
  postId: number;
  parentId: number | null;
  email: string;
  nickname: string;
  content: string;
  createdAt: string;
  replies: Comment[];
}

export interface PostListResponse {
  data: Post[];
  page: number;
  size: number;
  total: number;
  hasMore: boolean;
}

export interface PostDetailResponse {
  post: Post;
  comments: Comment[];
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as { error?: string }).error || `请求失败 (${res.status})`);
  }
  return res.json();
}

export function getPosts(page = 0, size = 20): Promise<PostListResponse> {
  return request(`/posts?page=${page}&size=${size}`);
}

export function getPost(id: number): Promise<PostDetailResponse> {
  return request(`/posts/${id}`);
}

export function createPost(data: {
  title: string;
  content: string;
  email: string;
  nickname: string;
}): Promise<{ ok: boolean; id: number }> {
  return request("/posts", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function createComment(
  postId: number,
  data: {
    email: string;
    nickname: string;
    content: string;
    parentId?: number | null;
  }
): Promise<{ ok: boolean; id: number }> {
  return request(`/posts/${postId}/comments`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
