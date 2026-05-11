/**
 * PROGRAM 16 — Infinite Scroll
 *
 * Load posts from the API below, 10 at a time.
 * Automatically load the next page when the user scrolls to the bottom.
 *
 * API: GET https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10
 *      (increment _page for subsequent loads)
 *
 * Requirements:
 *   - Display each post as a card with its title and body
 *   - Show a "Loading..." indicator at the bottom while fetching
 *   - Show "No more posts" when all posts are loaded
 *   - Use IntersectionObserver to detect when the user reaches the bottom
 */

import { useCallback, useEffect, useRef, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};
const PAGE_SIZE = 10;
const API_BASE = "https://jsonplaceholder.typicode.com/posts";

export default function InfiniteScroll() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const pageRef = useRef(1);
  const loadingLock = useRef(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (loadingLock.current || !hasMore) return;
    loadingLock.current = true;
    setLoading(true);

    try {
      const page = pageRef.current;
      const url = `${API_BASE}?_page=${page}&_limit=${PAGE_SIZE}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: Post[] = await res.json();

      if (data.length === 0) {
        setHasMore(false);
        return;
      }

      setPosts((prev) => [...prev, ...data]);
      pageRef.current = page + 1;

      if (data.length < PAGE_SIZE) {
        setHasMore(false);
      }
    } catch {
      setHasMore(false);
    } finally {
      loadingLock.current = false;
      setLoading(false);
    }
  }, [hasMore]);

  useEffect(() => {
    void loadMore();
  }, []);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first?.isIntersecting) {
          void loadMore();
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: 16 }}>
      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: 12,
            marginBottom: 12,
          }}
        >
          <h3 style={{ margin: "0 0 8px" }}>{post.title}</h3>
          <p style={{ margin: 0, color: "#444" }}>{post.body}</p>
        </article>
      ))}

      <div ref={sentinelRef} style={{ height: 1 }} aria-hidden />

      {loading && <p style={{ marginTop: 8 }}>Loading...</p>}
      {!hasMore && posts.length > 0 && (
        <p style={{ marginTop: 8 }}>No more posts</p>
      )}
    </div>
  );
}
