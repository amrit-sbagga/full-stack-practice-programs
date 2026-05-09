/**
 * Program 16 — Infinite Scroll
 * Goal: Load the first PAGE_SIZE posts. When the user scrolls to the bottom sentinel
 *       element, load the next page automatically.
 * Concepts: IntersectionObserver, useRef (for sentinel div), paginated append, useEffect
 *
 * API: GET https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10
 * PAGE_SIZE: 10
 */
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ProgramShell from "../ProgramShell";

const PAGE_SIZE = 10;

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function InfiniteScroll() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // TODO: useEffect to fetch page from API and append to posts
  //       if returned array length < PAGE_SIZE → setHasMore(false)
  // TODO: useEffect to set up IntersectionObserver on sentinelRef
  //       when sentinel enters viewport → setPage(p => p + 1) if hasMore
  // TODO: render posts list + sentinel div at the bottom + loading indicator

  return (
    <ProgramShell
      title="16 — Infinite Scroll"
      concepts={["IntersectionObserver", "useRef", "paginated fetch", "append state"]}
    >
      <p className="text-slate-400 italic text-sm">
        TODO: render posts, append on scroll, sentinel div with IntersectionObserver
      </p>
      <div ref={sentinelRef} />
    </ProgramShell>
  );
}
