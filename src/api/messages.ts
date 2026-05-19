const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:2005";

function getToken(): string | null {
  return localStorage.getItem("mb_token");
}

function authHeaders(): Record<string, string> {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export interface LoginResponse {
  token: string;
  email: string;
  nickname: string;
  isNew: boolean;
}

export interface MessageItem {
  id: number;
  content: string;
  emoji: string | null;
  nickname: string;
  isPrivate: boolean;
  createdAt: string;
}

export interface MessagesPage {
  data: MessageItem[];
  page: number;
  size: number;
  total: number;
  hasMore: boolean;
}

export async function login(email: string): Promise<LoginResponse> {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "登录失败");
  }
  return res.json();
}

export async function fetchMessages(page = 0, size = 20): Promise<MessagesPage> {
  const res = await fetch(`${API_BASE}/api/messages?page=${page}&size=${size}`);
  if (!res.ok) throw new Error("获取留言失败");
  return res.json();
}

export async function fetchMyMessages(page = 0): Promise<MessagesPage> {
  const res = await fetch(`${API_BASE}/api/messages/mine?page=${page}`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("获取我的留言失败");
  return res.json();
}

export async function postMessage(content: string, emoji: string, isPrivate: boolean): Promise<void> {
  const res = await fetch(`${API_BASE}/api/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify({ content, emoji, isPrivate }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "提交失败");
  }
}

export async function deleteMessage(id: number): Promise<void> {
  const res = await fetch(`${API_BASE}/api/messages/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "删除失败");
  }
}

export function saveToken(token: string) {
  localStorage.setItem("mb_token", token);
}

export function clearToken() {
  localStorage.removeItem("mb_token");
}

export function hasToken(): boolean {
  return !!getToken();
}
